
export function SearchResults({ results }) {

	return (
		<div className="flex gap-4 w-full h-fit justify-center">
			{
				results.map((result, index) => (
					<p key={index} className="aspect-square w-full h-full p-2 bg-accent flex justify-center items-center rounded-lg">{result}</p>
				))
			}
		</div>
	)
}