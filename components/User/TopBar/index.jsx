import Link from 'next/link'

export function TopBar({ name="" }) {
	return (
		<div className="absolute top-0 w-full h-20 flex justify-between pl-4 z-20">
			<div className="self-center w-fit h-full flex justify-center">
				<Link href={"/"} className="text-secondary self-center font-extrabold text-4xl cursor-pointer select-none">Chug<span className='text-white font-extrabold text-4xl cursor-pointer select-none'>{name}</span></Link>
			</div>

			<div className="self-center w-fit h-full flex justify-center p-4">
				<div className="h-full aspect-square rounded-full bg-secondary self-center">

				</div>
			</div>

		</div>
  	)
}