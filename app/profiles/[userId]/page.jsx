'use client'

import { useEffect } from "react"

export default function ProfilePage( {params} ) {

	useEffect(() => {
		console.log("fetching user data for -> ", params.userId)
	}, [])

	return (
		<div className="h-full w-full bg-primary flex flex-col gap-4 justify-center">
			<p className="self-center text-white"> A page to view a profile - {params.userId}</p>
		</div>
	)
}