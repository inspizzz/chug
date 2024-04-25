import Link from 'next/link'

export function TopBar({ name="" }) {
	return (
		<div className="absolute top-0 w-full h-20 flex justify-between pl-4 z-20">
			<div className="self-center w-fit h-full flex justify-center">
				<Link href={"/"} className="text-secondary self-center font-extrabold text-4xl cursor-pointer select-none">Chug<span className='text-white font-extrabold text-4xl cursor-pointer select-none'>{name}</span></Link>
			</div>

			<div className="self-center w-48 h-full flex justify-center p-4">
				{
					// is the user logged in?
					false ? (
						<div className="h-full aspect-square rounded-full bg-secondary self-center">

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