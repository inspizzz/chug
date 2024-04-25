'use client'

import { TopBar } from "@/components/User/TopBar";
import { useState } from "react";

export default function Login() {

	const [ username, setUsername ] = useState("")
	const [ password, setPassword ] = useState("")

	const Submit = (e) => {
		e.preventDefault()

		console.log("Submitted")

		console.log(username)
		console.log(password)
		
	}
	return (
		<div className="w-full h-full bg-primary flex flex-col justify-center">
			<TopBar name="In" />

			<form className="flex flex-col justify-center self-center gap-2" onSubmit={Submit}>
				<input type="text" className="p-2 bg-white border-none rounded-2xl" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
				<input type="password" className="p-2 bg-white border-none rounded-2xl" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
				<button type="submit" className="w-1/2 bg-secondary rounded-2xl p-2 self-center cursor-pointer">Login</button>
			</form>
		</div>

	)
}