'use client'

import { createContext, useContext, useState, useEffect, useMemo } from "react"

import PocketBase from "pocketbase"
import ms from "ms"

const BASE_URL = "https://wiktor.uk:3000"

const fiveMinutesInMs = ms("5 minutes")
const twoMinutesInMs = ms("2 minutes")

const FeedContext = createContext({})


export const FeedProvider = ({ children }) => {

	const pb = useMemo(() => new PocketBase(BASE_URL), [])

	const [feed, setFeed] = useState([])

	useEffect(() => {
		console.log("feed has been updated -> ", feed)
	}, [feed])

	useEffect(() => {
		pb.collection("posts").subscribe("*", (thing) => {
			console.log("change! -> ", thing)

			const updatedPost = thing.record
			const action = thing.action

			// delete a post
			if (action === "delete") {
				setFeed((prevFeed) => {
					const updatedFeed = prevFeed.filter((post) => post.id !== updatedPost.id)
					return updatedFeed
				})
				return
			}

			// create a new post
			if (action === "create") {
				setFeed((prevFeed) => {
					const updatedFeed = [updatedPost, ...prevFeed]
					return updatedFeed
				})
				return
			}

			// update a post
			if (action === "update") {
				setFeed((prevFeed) => {
					const updatedFeed = prevFeed.map((post) => {
						if (post.id === updatedPost.id) {
							return updatedPost
						}
						return post
					})
					return updatedFeed
				})
				return
			}
		})

		return () => pb.collection("posts").unsubscribe("*")
	}, [])

	// initial fetch of the feed
	useEffect(() => {
		const resultList = pb.collection('posts').getList(1, 5, {
			sort: "-created",
		}).then((result) => {
			setFeed(result.items)
		})
	}, [])

	
	pb.autoCancellation(false)

	

	return (
		<FeedContext.Provider
			value={{ feed }}
		>
			{children}
		</FeedContext.Provider>
	)
}


export const useFeed = () => useContext(FeedContext)


