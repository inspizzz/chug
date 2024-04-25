'use client'

import { BsSuitDiamondFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export function Diamonds() {

	const size = useWindowSize();

	const [width, setWidth] = useState(1);
	const [height, setHeight] = useState(1);
	
	// when screen size changes, update the number of diamonds
	useEffect(() => {

		// return if size is not defined
		if (!size.width || !size.height) {
			return;
		}

		// set width and height of diamonds
		setWidth(Math.floor(size.width  / 128) + 1)
		setHeight(Math.floor(size.height / 128) + 1)
	}, [size])

	return (
		<div className="absolute w-full h-full top-0 overflow-hidden opacity-50 z-10">

			{
				<div className="flex flex-col">
					{
						Array(height).fill(0).map((_, i) => (
							<div key={i} className="flex">
								{
									Array(width).fill(0).map((_, i) => (
										<div key={i} className="w-32 h-32 flex flex-col">
											<div className="w-full h-16">
												<BsSuitDiamondFill className="text-accent animate-bounce" />
											</div>

											<div className="w-full h-16 flex">
												<div className="w-16 h-full">

												</div>

												<div className="w-16 h-full">
													<BsSuitDiamondFill className="text-accent" />
												</div>
											</div>
										</div>
									))
								}
							</div>

						))
					}
				</div>
			}

			{/* <div className="w-32 h-32 flex flex-col">
				<div className="w-full h-16">
					<BsSuitDiamondFill className="text-secondary" />
				</div>

				<div className="w-full h-16 flex">
					<div className="w-16 h-full"/>

					<div className="w-16 h-full">
						<BsSuitDiamondFill className="text-secondary" />
					</div>
					
				</div>
			</div> */}

		</div>
	)
}

// Hook
function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match
	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		// only execute all the code below in client side
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}