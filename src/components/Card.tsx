import React from 'react'
import CSS from ''

const Card = ({ items }: any) => {
	const textSlice = (text: string = "loading"): string => {
		return text?.length > 80 ? text.slice(0, 80) + "..." : text + "..."
	}
	const bgimg: CSS.Properties = {
		backgroundImage: `linear-gradient(to top,rgba(0, 0, 1, 1), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original/${bannerImg?.backdrop_path})`
	}
	console.log(items);
	return (
		<div className="overflow-hidden min-w-[20rem] mr-10 ">
			<div className="border border-4 border-white p-1 rounded-lg relative">
				<img src={`https://image.tmdb.org/t/p/original/${items.poster_path}`} className="object-cover rounded-lg" />
				<div className="text-white absolute bottom-20 ">
					<h3 className="font-bold text-xl">{items.title}</h3>
					<p>{textSlice(items.overview)}</p>
				</div>
			</div>
		</div>
	)
}

export default Card