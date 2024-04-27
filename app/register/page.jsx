'use client'

import Link from "next/link";
import { TopBar } from "@/components/User/TopBar";
import Image from "next/image";

// hooks
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// icons
import { CiUser } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useUser } from "@/contexts/userContext";


export default function RegisterPage() {

	const [ mounted, setMounted ] = useState(false)

	const [ username, setUsername ] = useState("")
	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("")
	const [ passwordConfirm, setPasswordConfirm ] = useState("")

	const [ focus1, setFocus1 ] = useState(false)
	const [ focus2, setFocus2 ] = useState(false)
	const [ focus3, setFocus3 ] = useState(false)
	const [ focus4, setFocus4 ] = useState(false)

	const [ error, setError ] = useState("")

	// hooks
	const { user, register } = useUser()
	const router = useRouter()

	useEffect(() => {
		setMounted(true)
	}, [])
	/**
	 * perform checks on the input fields
	 */
	const Check = () => {
		if (username === "") return false

		if (email === "") return false

		if (password === "") return false

		if (passwordConfirm === "") return false

		if (password !== passwordConfirm) return false

		return true
	}

	const Submit = async (e) => {

		// stop redirecting
		e.preventDefault()
		console.log("called")
		// perform the check on input fields
		if (!Check()) return
		console.log("passed")

		const result = await register(email, password)

		if (result) {
			router.push("login")
		} else {
			setError("something went wrong")
		}
	}

	return mounted && (
		<div className="w-full h-full bg-primary flex flex-col justify-center">
			<TopBar name="Up" />

			{
				(user === null) ? (
					<form className="w-1/3 h-1/2 bg-accent self-center flex justify-center gap-10 z-20 rounded-2xl p-8 min-w-96" onClick={Submit}>
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
												onChange={(e) => setUsername(e.target.value)}
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
												onChange={(e) => setEmail(e.target.value)}
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
												onChange={(e) => setPassword(e.target.value)}
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
												onChange={(e) => setPasswordConfirm(e.target.value)}
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
							<h1 className="text-red-500 self-center">{error && "- " + error}</h1>
							<Image 
								src="/register_image.webp"
								className="w-full h- self-center"
								alt={"not found"} 
								width={"200"}
								height={"200"}/>

						</div>
					</form>
				) : (
					<div className="w-1/3 h-1/2 bg-accent self-center flex flex-col justify-center gap-2 z-20 rounded-2xl p-8 min-w-96">
						<h1 className="text-white text-2xl font-bold self-center select-none">Oops! Your already logged in</h1>
						<Link href={"/feed"} className="text-white text-2xl font-bold self-center p-2 bg-secondary rounded-2xl cursor-pointer hover:shadow-md hover:bg-red-600 select-none">Home</Link>
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