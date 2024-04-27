export default function SettingLayout({ children }) {
	return (
		<div className="h-full w-full bg-primary flex justify-center">
			<div className="w-1/2 h-1/2 self-center rounded-2xl bg-accent p-2">
				{children}
			</div>
		</div>
	)
}