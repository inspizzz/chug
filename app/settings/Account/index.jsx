export function Account() {
	return (
		<div className="w-full h-full flex flex-col gap-1 justify-between">
			<div className="flex flex-col gap-2">
				<p className="w-fit h-8 bg-white rounded-2xl flex items-center px-2 select-none">Wiktor Wiejak</p>
				<p className="w-fit h-8 bg-white rounded-2xl flex items-center px-2 select-none">wiktor.wiejak@gmail.com</p>
			</div>

			<div className="flex flex-col gap-2">
				<p className="w-full h-8 bg-white rounded-2xl self-center flex justify-center items-center px-2 opacity-60 hover:opacity-100 select-none">Change name</p>
				<p className="w-full h-8 bg-white rounded-2xl self-center flex justify-center items-center px-2 opacity-60 hover:opacity-100 select-none">Change email</p>
				<p className="w-full h-8 p-2 bg-slate-500 rounded-2xl flex items-center justify-center opacity-60 hover:opacity-100 select-none">Logout</p>
				<p className="w-full h-8 p-2 bg-secondary rounded-2xl flex items-center justify-center hover:bg-red-600 select-none">Delete account</p>
			</div>

		</div>

	)
}