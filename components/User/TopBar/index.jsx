'use client'

import { useUser } from '@/contexts/userContext'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdHome } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

export function TopBar({ name = "" }) {
	const [selected, setSelected] = useState(false)
	const [mounted, setMounted] = useState(false)

	const { user, logout } = useUser()

	useEffect(() => {
		setMounted(true)
	}, [])

	return mounted && (
		<div className="absolute top-0 left-0 w-full h-20 flex justify-between pl-4 z-20">
			<div className="self-center w-fit h-full flex justify-center">
				<Link href={"/"} className="text-secondary self-center font-extrabold text-4xl cursor-pointer select-none">Chug<span className='text-white font-extrabold text-4xl cursor-pointer select-none'>{name}</span></Link>
			</div>

			<div className="self-center w-fit h-full flex justify-center p-4">
				{
					// is the user logged in?
					(user !== null) ? (
						<div className='w-fit h-16 flex'>

							{
								selected && (
									<div className="bg-notes_background w-full rounded-2xl flex gap-1 p-1">
										<Link href={"/feed"} className="aspect-square rounded-2xl bg-white hover:bg-secondary flex justify-center"><MdHome className="self-center text-black" /></Link>
										<Link href={"/profile"} className="aspect-square rounded-2xl bg-white hover:bg-secondary flex justify-center"><CgProfile className="self-center text-black" /></Link>
										<Link href={"/settings"} className="aspect-square rounded-2xl bg-white hover:bg-secondary flex justify-center"><IoSettingsOutline className="self-center text-black" /></Link>
									</div>
								)
							}

							<div className="h-16 w-16 aspect-square rounded-full bg-secondary self-center" onClick={() => setSelected(!selected)} />
						</div>
					) : (
						<div className="h-full w-full self-center flex justify-center gap-2 text-balance">
							<Link href={"register"} className="w-1/2 bg-secondary rounded-2xl flex justify-center self-center px-4 py-2">Register</Link>
							<Link href={"login"} className="w-1/2 bg-secondary rounded-2xl flex justify-center self-center px-4 py-2">Login</Link>
						</div>
					)
				}

			</div>

		</div>
	)
}