'use client'

import Link from "next/link";
import { TopBar } from "@/components/User/TopBar";
import Image from "next/image";
import { useState } from "react";

// icons
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {


	const [ focus1, setFocus1 ] = useState(false)
	const [ focus2, setFocus2 ] = useState(false)

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
			<TopBar name="Up" />

			<form className="w-1/3 h-1/2 bg-accent self-center flex justify-center gap-10 z-20 rounded-2xl p-8 min-w-96">
				<div className="w-1/2 h-full flex flex-col gap-2 justify-between">

					<div className="flex flex-col gap-8">
						<h1 className="text-white font-extrabold text-4xl">Sign In</h1>

						<div className="flex flex-col gap-2">
							{/* email */}
							<div className="flex flex-col">
								<div className="flex gap-2 w-full h-fit">
									<MdAlternateEmail className="text-white self-center" />
									<input
										type="text"
										className="w-full border-none bg-accent p-2 rounded-sm outline-none text-white"
										placeholder="Email"
										onFocus={() => setFocus1(true)}
										onBlur={() => setFocus1(false)}
									/>
								</div>
								<div className={focus1 ? "bg-secondary w-full h-[1px]" : "bg-white w-full h-[1px]"}/>
							</div>

							{/* password */}
							<div className="flex flex-col">
								<div className="flex gap-2 w-full h-fit">
									<RiLockPasswordLine className="text-white self-center" />
									<input
										type="password"
										className="w-full border-none bg-accent p-2 rounded-sm outline-none text-white"
										placeholder="Password"
										onFocus={() => setFocus2(true)}
										onBlur={() => setFocus2(false)}
									/>
								</div>
								<div className={focus2 ? "bg-secondary w-full h-[1px]" : "bg-white w-full h-[1px]"}/>
							</div>
						</div>
					</div>


					<div>
						<button type="submit" className="w-1/2 bg-secondary rounded-sm p-2 mt-4 cursor-pointer hover:shadow-2xl hover:shadow-white">Login</button>
					</div>
					
				</div>

				<div className="w-1/2 h-full flex flex-col justify-center">
					<Image 
						src="/register_image.webp"
						className="w-full h- self-center"
						alt={"not found"} 
						width={"200"}
						height={"200"}/>

				</div>
			</form>
		</div>

	)
}