import { UserProfile } from "@/components/User/Profile";

// icons
import { CiCircleInfo } from "react-icons/ci";

export function Post({ post }) {
	return (
		<div className="bg-accent rounded-2xl p-2 flex flex-col gap-2">

			{/* top information of post */}
			<div className="flex justify-between">

				{/* user info and date */}
				<div className="flex gap-2 justify-center">
					<UserProfile user={null}/>

					<div className="flex flex-col justify-center gap-1">
						<p className="text-white font-bold">Username</p>
						<p className="text-white">Date</p>
					</div>
				</div>

				{/* info button, report ... */}
				<div className="flex justify-center rounded-full">
					<CiCircleInfo className="w-6 h-6 hover:shadow-md hover:shadow-white rounded-full" color="white"/>
				</div>
			</div>

			{/* post content */}
			<div>
				<div className="text-white w-full h-96 bg-white rounded-2xl">
					<p className="text-black">{post.content}</p>
				</div>
			</div>

		</div>
	)
}