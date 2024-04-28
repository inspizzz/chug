'use client'

import { useUser } from "@/contexts/userContext"
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react"

// icons
import { CiUser } from "react-icons/ci";




export function UserProfile({ userId=null, ignoreLink=false }) {

	const { fetchUser, getImage } = useUser()

	const [ user, setUser ] = useState()
	const [ imageUrl, setImageUrl ] = useState("")



	useEffect(() => {
		console.log(ignoreLink)

		// fetch the user data
		console.log("fetching user data for -> ", userId)

		const result = fetchUser(userId).then((user) => {
			getImage(user).then((result) => {
				console.log("user data for profile -> ", user)
				console.log(result)
				setImageUrl(result)
			})
		})
	}, [])

	return (
		<div className="w-16 h-16 rounded-full">
			{
				ignoreLink ? (
					<>
						{
							(imageUrl !== "" && imageUrl !== null) ? (
								<div className="w-16 h-16 rounded-full flex justify-center hover:opacity-40 cursor-pointer">
									<Image src={imageUrl} alt="user profile picture" width={64} height={64} className="rounded-full w-full h-full"/>
								</div>
							) : (
								<div className="w-16 h-16 bg-white rounded-full flex justify-center p-1 hover:opacity-40 cursor-pointer">
									<CiUser className="w-full h-full self-center" />
								</div>
							)
						}
					</>
					
				) : (
					<>
						{
							(imageUrl !== "" && imageUrl !== null) ? (
								<Link href={`/profiles/${userId}`} className="w-16 h-16 rounded-full flex justify-center hover:opacity-40 cursor-pointer">
									<Image src={imageUrl} alt="user profile picture" width={64} height={64} className="rounded-full w-full h-full"/>
								</Link>
							) : (
								<Link href={`/profiles/${userId}`} className="w-16 h-16 bg-white rounded-full flex justify-center p-1 hover:opacity-40 cursor-pointer">
									<CiUser className="w-full h-full self-center" />
								</Link>
							)
						}
					</>
				)
			}
			
		</div>
	)
}