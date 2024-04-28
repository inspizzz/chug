import { Posts } from "@/components/Feed/Posts";
import { UserSuggestions } from "@/components/Feed/UserSuggestions";
import { TopBar } from "@/components/User/TopBar";

// icons
import { IoIosAddCircleOutline } from "react-icons/io";

export default function FeedPage() {
	return (
		<div className="h-full w-full bg-primary flex flex-col gap-4">
			<TopBar name="Dash" />

			<div className="w-full h-16 bg-accent flex justify-between p-2 rounded-2xl z-20">
				<p className="text-white text-2xl font-extrabold self-center">Your Feed</p>

				<div className="h-full w-fit hover:shadow-md rounded-full hover:shadow-white z-20">
					<IoIosAddCircleOutline className="h-full w-fit aspect-square" color="white"/>
				</div>
			</div>

			<UserSuggestions />

			<Posts />
		</div>
	)
}	