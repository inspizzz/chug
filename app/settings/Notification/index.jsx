export function Notification() {
	return (
		<div className="flex flex-col gap-1">

			<div className="w-full h-full flex justify-between gap-4 ">
				<div className="flex flex-col">
					<p className="h-4 text-white select-none opacity-80">Notifications?</p>
					<p className="h-4 text-white select-none opacity-50">Do you want to receive notifications?</p>
				</div>

				<div>
					<input type="checkbox" />
				</div>
			</div>
		</div>
	)
}