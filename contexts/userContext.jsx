'use client'

import { createContext, useContext, useCallback, useState, useEffect, useMemo } from "react"
import { jwtDecode } from "jwt-decode"
import { useRouter } from "next/navigation"

import PocketBase from "pocketbase"
import ms from "ms"

const BASE_URL = "https://wiktor.uk:3000"

const fiveMinutesInMs = ms("5 minutes")
const twoMinutesInMs = ms("2 minutes")

const UserContext = createContext({})


export const UserProvider = ({ children }) => {

	const pb = useMemo(() => new PocketBase(BASE_URL), [])

	const [token, setToken] = useState(pb.authStore.token)
	const [user, setUser] = useState(pb.authStore.model)
	const [imageUrl, setImageUrl] = useState(null)
	const [error, setError] = useState("haven't connected yet")
	const [ refresh, setRefresh ] = useState(0)

	const router = useRouter()

	// update the token when it changes
	useEffect(() => {
		console.log("connecting")
		
		return pb.authStore.onChange((token, model) => {
			console.log("the context has changed")
			console.log({ token, model })
			setToken(token)
			setUser(model)
			setError(null)
		})
	}, [refresh])

	useEffect(() => {
		pb.collection("users").subscribe("*", (thing) => {
			console.log("update! -> ", thing.record)
			setUser(thing.record)
		})

		return () => pb.collection("users").unsubscribe("*")
	}, [])

	useEffect(() => {
		refreshSession()
	}, [])


	/**
	 * Register a new user
	 */
	const register = useCallback(async (email, password) => {
		const result = await pb.collection("users").create({ email, password, passwordConfirm: password }).then(() => {
			return true
		}).catch((err) => {
			console.log("registering errored")
			console.log(err)
			return false
		})

		return result
	}, [])


	/**
	 * Login a user
	 * 
	 * @param {string} email the email provided
	 * @param {string} password the password provided
	 * 
	 * @returns {Promise} the promise that resolves with the user model
	*/
	const login = useCallback(async (email, password) => {
		const result = await pb.collection("users").authWithPassword(email, password).then(() => {
			return true
		}).catch((err) => {
			console.log("errored")
			return false
		})

		return result
	}, [])


	/**
	 * Logout the user
	*/
	const logout = useCallback(() => {
		pb.authStore.clear()
		router.push("/")
	}, [])


	/**
	 * add the email to the mailing list
	 */
	const addMailingList = useCallback(async (email) => {
		const result = await pb.collection("mailing_list").create({ email }).then(() => {
			return true
		}).catch((err) => {
			console.log("mailing list errored")
			console.log(err)
			return false
		})

		return result
	}, [])


	/**
	 * Refresh the session if the token is about to expire
	*/
	const refreshSession = useCallback(async () => {
		
		if (!pb.authStore.isValid) return

		console.log("refreshing session")

		const decoded = jwtDecode(token)
		const tokenExpiration = decoded.exp
		const expirationWithBuffer = (decoded.exp + fiveMinutesInMs) / 1000
		if (tokenExpiration < expirationWithBuffer) {
			await pb.collection("users").authRefresh()
		}
	}, [token, pb])

	
	pb.autoCancellation(false)

	

	return (
		<UserContext.Provider
			value={{ register, login, logout, addMailingList, refreshSession, user, token, pb, imageUrl, error }}
		>
			{children}
		</UserContext.Provider>
	)
}


export const useUser = () => useContext(UserContext)


