export function Privacy() {
	return (
		<div className="flex flex-col gap-1">

			<div className="w-full h-full flex justify-between gap-4 ">
				<div className="flex flex-col">
					<p className="h-4 text-white select-none opacity-80">Public?</p>
					<p className="h-4 text-white select-none opacity-50">Do you want your profile to be public?</p>
				</div>

				<div>
					<input type="checkbox" />
				</div>
			</div>

			<div className="w-full h-full flex justify-between gap-1 ">
				<div className="flex flex-col">
					<p className="h-4 text-white select-none opacity-80">Show followers?</p>
					<p className="h-4 text-white select-none opacity-50">Do you want your profile to show your follower count?</p>
				</div>

				<div>
					<input type="checkbox" />
				</div>
			</div>

			

		</div>
		
	)
}