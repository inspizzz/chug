'use client'

import Link from "next/link";
import { TopBar } from "@/components/User/TopBar";
import Image from "next/image";
import { useEffect, useState } from "react";

// icons
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useUser } from "@/contexts/userContext";

export default function Login() {

	const [ mounted, setMounted ] = useState(false)

	const [ focus1, setFocus1 ] = useState(false)
	const [ focus2, setFocus2 ] = useState(false)

	const [ username, setUsername ] = useState("")
	const [ password, setPassword ] = useState("")

	const { login, user } = useUser()

	const Submit = (e) => {
		e.preventDefault()

		console.log(username)
		console.log(password)

		login(username, password)
		
	}

	useEffect(() => {
		setMounted(true)
	}, [])

	return mounted && (
		<div className="w-full h-full bg-primary flex flex-col justify-center">
			<TopBar name="Up" />

			{
				(user === null) ? (
					<form className="w-1/3 h-1/2 bg-accent self-center flex justify-center gap-10 z-20 rounded-2xl p-8 min-w-96" onSubmit={Submit}>
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
												onChange={(e) => setUsername(e.target.value)}
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
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>
										<div className={focus2 ? "bg-secondary w-full h-[1px]" : "bg-white w-full h-[1px]"}/>
									</div>
									<Link href={"register"} className="underline text-white w-fit">Dont have an account?</Link>
								</div>
							</div>

							<div>
								<button type="submit" className="w-1/2 bg-secondary rounded-sm p-2 mt-4 cursor-pointer hover:shadow-2xl hover:shadow-white">Login</button>
							</div>
						</div>

						<div className="w-1/2 h-full flex flex-col justify-center">
							<Image 
								src="/login_image.webp"
								className="w-full h- self-center"
								alt={"not found"} 
								width={"200"}
								height={"200"}
								priority
							/>
						</div>
					</form>
				) : (
					<div className="w-1/3 h-1/2 bg-accent self-center flex flex-col justify-center gap-2 z-20 rounded-2xl p-8 min-w-96">
						<h1 className="text-white text-2xl font-bold self-center select-none">Oops! Your already logged in</h1>
						<Link href={"/feed"} className="text-white text-2xl font-bold self-center p-2 bg-secondary rounded-2xl cursor-pointer hover:shadow-md hover:bg-red-600 select-none">Home</Link>
						<div className="w-3/4 h-fit flex flex-col justify-center self-center">
							<Image 
								src="/login_image.webp"
								className="w-full h- self-center"
								alt={"not found"} 
								width={"300"}
								height={"200"}
								priority
							/>
						</div>
					</div>
				)
			}

			
		</div>

	)
}