'use client'

import Link from "next/link";
import { TopBar } from "@/components/User/TopBar";
import Image from "next/image";
import { useEffect, useState } from "react";

// icons
import { CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useUser } from "@/contexts/userContext";



export default function RegisterPage() {

	const [ mounted, setMounted ] = useState(false)

	const [ name, setName ] = useState("")
	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("")
	const [ passwordConfirm, setPasswordConfirm ] = useState("")

	const [ focus1, setFocus1 ] = useState(false)
	const [ focus2, setFocus2 ] = useState(false)
	const [ focus3, setFocus3 ] = useState(false)
	const [ focus4, setFocus4 ] = useState(false)

	const { user } = useUser()

	useEffect(() => {
		setMounted(true)
	}, [])
	/**
	 * perform checks on the input fields
	 */
	const Check = () => {

	}

	const Submit = (e) => {

		// stop redirecting
		e.preventDefault()

		// perform the check on input fields
		if (!Check) return

		console.log("can register")
	}

	return mounted && (
		<div className="w-full h-full bg-primary flex flex-col justify-center">
			<TopBar name="Up" />

			{
				(user === null) ? (
					<form className="w-1/3 h-1/2 bg-accent self-center flex justify-center gap-10 z-20 rounded-2xl p-8 min-w-96">
						<div className="w-1/2 h-full flex flex-col gap-2 justify-between">

							<div className="flex flex-col gap-8">
								<h1 className="text-white font-extrabold text-4xl">Sign Up</h1>

								<div className="flex flex-col gap-2">
									{/* username */}
									<div className="flex flex-col">
										<div className="flex gap-2 w-full h-fit">
											<CiUser className="text-white self-center" />
											<input
												type="text"
												className="w-full border-none bg-accent p-2 rounded-sm outline-none text-white"
												placeholder="Username"
												onFocus={() => setFocus1(true)}
												onBlur={() => setFocus1(false)}
											/>
										</div>
										<div className={focus1 ? "bg-secondary w-full h-[1px]" : "bg-white w-full h-[1px]"}/>
									</div>
									
									{/* email */}
									<div className="flex flex-col">
										<div className="flex gap-2 w-full h-fit">
											<MdAlternateEmail className="text-white self-center" />
											<input
												type="text"
												className="w-full border-none bg-accent p-2 rounded-sm outline-none text-white"
												placeholder="Email"
												onFocus={() => setFocus2(true)}
												onBlur={() => setFocus2(false)}
											/>
										</div>
										<div className={focus2 ? "bg-secondary w-full h-[1px]" : "bg-white w-full h-[1px]"}/>
									</div>

									{/* password */}
									<div className="flex flex-col">
										<div className="flex gap-2 w-full h-fit">
											<RiLockPasswordLine className="text-white self-center" />
											<input
												type="password"
												className="w-full border-none bg-accent p-2 rounded-sm outline-none text-white"
												placeholder="Password"
												onFocus={() => setFocus3(true)}
												onBlur={() => setFocus3(false)}
											/>
										</div>
										<div className={focus3 ? "bg-secondary w-full h-[1px]" : "bg-white w-full h-[1px]"}/>
									</div>

									{/* password confirm */}
									<div className="flex flex-col">
										<div className="flex gap-2 w-full h-fit">
											{/* <CiUser className="text-white self-center" /> */}
											<input 
												type="password"
												className="w-full border-none bg-accent p-2 rounded-sm outline-none text-white"
												placeholder="Repeat your password"
												onFocus={() => setFocus4(true)}
												onBlur={() => setFocus4(false)}
												autoComplete="off"
												onPaste={(e) => {e.preventDefault()}}
											/>
										</div>
										<div className={focus4 ? "bg-secondary w-full h-[1px]" : "bg-white w-full h-[1px]"}/>
									</div>

									<Link href={"login"} className="underline text-white w-fit">Already have an account?</Link>
								</div>

								<div className="flex gap-2">
									<input type="checkbox" className="self-center" />
									<p className="text-white">I agree to <Link href={"/terms"} className="underline cursor-pointer">Terms & Conditions</Link></p>
								</div>
							</div>


							<div>
								<button type="submit" className="w-1/2 bg-secondary rounded-sm p-2 cursor-pointer hover:shadow-2xl hover:shadow-white">Register</button>
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
				) : (
					<div className="w-1/3 h-1/2 bg-accent self-center flex flex-col justify-center gap-10 z-20 rounded-2xl p-8 min-w-96">
						<h1 className="text-white text-2xl font-bold self-center">Oops! Your already logged in</h1>
						<div className="w-3/4 h-fit flex flex-col justify-center self-center">
							<Image 
								src="/register_image.webp"
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