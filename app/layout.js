import { UserProvider } from "@/contexts/userContext";
import "./globals.css";
import { Outfit } from "next/font/google";

const anton = Outfit({
	subsets: ["latin"]
})

export const metadata = {
	title: "Chug",
	description: "Social media for alcoholics",
}

export default function RootLayout({ children }) {
	return (
		<html className="w-full h-full" lang="en">
			<body className={[anton.className, "w-full h-full"]}>
				<UserProvider>
					{children}
				</UserProvider>
			</body>
		</html>
	)
}
