import { FeedProvider } from '@/contexts/feedContext'

export default function FeedLayout({ children }) {
	return (
		<FeedProvider>
			<div className="h-fit w-full px-[30%] py-10 bg-primary">
				{children}
			</div>
		</FeedProvider>
	)
}