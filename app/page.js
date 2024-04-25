import Image from "next/image";
import { TopBar } from "../components/User/TopBar";
import Link from "next/link";
import { Diamonds } from "@/components/Global/Diamonds";

export default function Home() {
  return (
    <div className="w-full h-full bg-primary flex flex-col justify-center">
		<TopBar />
		<Diamonds />

		<div className="self-center flex flex-col justify-center gap-4 z-20">
			<div className="flex flex-col">
				<p className="self-center text-xl text-text font-bold">Welcome to Chug</p>
				<p className="self-center text-xl text-text font-bold">The social media for alcholics</p>
			</div>
			
			<Link href={"/login"} className="px-6 py-3 bg-secondary w-fit self-center rounded-2xl cursor-pointer">Lets Get Started</Link>
		</div>
	</div>
  );
}
