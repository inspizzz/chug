'use client'

import { useState } from "react"
import { Account } from "./Account"
import { Privacy } from "./Privacy"
import { Blocked } from "./Blocked"
import { Notification } from "./Notification"
import { About } from "./About"
import { TopBar } from "@/components/User/TopBar"

export default function SettingsPage() {

	const [ selected, setSelected ] = useState("Account")

	return (
		<div className="h-full w-full flex flex-col p-2">

			<TopBar name="Settings"/>
			<h1 className="text-4xl font-extrabold text-white">Settings</h1>

			<div className="h-full w-full flex justify-start gap-2 p-2">
				<div className="flex flex-col justify-between">
					<div className="flex flex-col">
						<h1 className={`text-white text-2xl p-1 flex justify-start self-center text-nowrap w-full cursor-pointer select-none ${selected === "Account" ? "opacity-100" : "opacity-50"} hover:text-secondary hover:opacity-100`} onClick={() => setSelected("Account")}>Account</h1>
						<h1 className={`text-white text-2xl p-1 flex justify-start self-center text-nowrap w-full cursor-pointer select-none ${selected === "Privacy" ? "opacity-100" : "opacity-50"} hover:text-secondary hover:opacity-100`} onClick={() => setSelected("Privacy")}>Privacy & Social</h1>
						<h1 className={`text-white text-2xl p-1 flex justify-start self-center text-nowrap w-full cursor-pointer select-none ${selected === "Notification" ? "opacity-100" : "opacity-50"} hover:text-secondary hover:opacity-100`} onClick={() => setSelected("Notification")}>Notification</h1>
						<h1 className={`text-white text-2xl p-1 flex justify-start self-center text-nowrap w-full cursor-pointer select-none ${selected === "Blocked" ? "opacity-100" : "opacity-50"} hover:text-secondary hover:opacity-100`} onClick={() => setSelected("Blocked")}>Blocked</h1>
					</div>

					<h1 className={`text-white text-2xl p-1 flex justify-start self-center text-nowrap w-full cursor-pointer select-none ${selected === "About" ? "opacity-100" : "opacity-50"} hover:text-secondary hover:opacity-100`} onClick={() => setSelected("About")}>About</h1>
					
				</div>

				{/* middle splitter */}
				<div className="w-[1px] h-full bg-white" />

				<div className="w-full h-full flex flex-col">
					{
						selected === "Account" && (
							<Account />
						)
					}

					{
						selected === "Privacy" && (
							<Privacy />
						)
					}

					{
						selected === "Notification" && (
							<Notification />
						)
					}

					{
						selected === "Blocked" && (
							<Blocked />
						)
					}

					{
						selected === "About" && (
							<About />
						)
					}
				</div>
			</div>
		</div>
	)
}