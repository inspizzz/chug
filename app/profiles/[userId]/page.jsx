'use client'

import { useEffect, useRef, useState } from "react"
import { SearchResults } from "../Results"

export default function ProfilePage( {params} ) {

	const searchQuery = useRef()
	const [ searchResults, setSearchResults ] = useState([])


	useEffect(() => {
		console.log("fetching user data for -> ", params.userId)
	}, [])

	const Search = () => {
		console.log("searching for user -> ", searchQuery.current.value)
		setSearchResults([1, 2, 3])
	}



	return (
		<div className="h-full w-full bg-primary flex flex-col gap-4 justify-center">
			<div className="self-center flex flex-col gap-4 w-1/2 h-fit">

				{/* search */}
				<div className="relative h-fit w-full h-8 rounded-lg bg-accent">
					<input type="text" ref={searchQuery} className="w-full h-full bg-accent text-white rounded-md p-3" placeholder="Search for a user" />

					<div className="absolute right-0 top-0 h-full w-32 bg-secondary rounded-lg flex justify-center items-center hover:bg-red-600 cursor-pointer" onClick={Search}>
						<p className="text-white">Search</p>
					</div>
				</div>

				{/* results */}
				<SearchResults results={searchResults}/>
			</div>
		</div>
	)
}