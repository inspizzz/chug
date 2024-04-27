'use client'

// hooks
import { useEffect, useState } from "react"

// icons
import { IoRefresh } from "react-icons/io5";


export function UserSuggestions() {

	const [ users, setUsers ] = useState([1, 2, 3, 4, 5])
	const [ loading, setLoading ] = useState(false)	
	const [ refresh, setRefresh ] = useState(false)

	/**
	 * load in the users, fetch at least 5
	 */
	useEffect(() => {
		setLoading(true)
		setLoading(false)
	}, [refresh])


	return (
		<div className="w-full h-fit rounded-2xl bg-accent p-2 flex gap-2 justify-between">
			{
				users.map((user, index) => {
					return (
						<div key={index} className="w-full h-52 bg-secondary flex justify-between p-2 rounded-2xl">

						</div>
					)
				})
			}

			<div>
				<IoRefresh className={`${loading && "animate-spin"}`} color="white" onClick={() => setRefresh(refresh+1)}/>
			</div>

		</div>
	)
}