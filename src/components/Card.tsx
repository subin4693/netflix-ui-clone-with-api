import React from 'react'
import CSS from 'csstype'

const Card = ({ items, size }: any) => {
	const textSlice = (text: string = "loading"): string => {
		return text?.length > 80 ? text.slice(0, 80) + "..." : text + "..."
	}
	const bgimg: CSS.Properties = {
		backgroundImage: `linear-gradient(to top,rgba(0, 0, 1, 1), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original/${size === "lg" ? items?.poster_path : items?.backdrop_path})`
	}
	// console.log(items);
	return (
		<div className={`overflow-hidden md:mr-10  `}>
			<div className={`border border-black rounded-lg hover:border-white ${size === "lg" ? "p-3" : "p-2"} w-min group duration-400`}>
				<div className={`p-5 rounded-lg ${size === "lg" ? "h-[15rem] w-[10rem] md:h-[20rem] lg:h-[30rem] lg:w-[18rem] md:w-[15rem]" : "h-[6rem] w-[10rem] md:h-[9rem] md:w-[15rem]"} bg-center bg-cover relative`} style={bgimg}>
					<div className={`text-white absolute ${size === "lg" ? "bottom-8 lg:bottom-20" : "bottom-5 lg:bottom-10"}`}>
						<h3 className={`${size === "lg" ? "text-sm font-bold lg:text-xl" : "text-sm font-normal lg:text-md"}`}>{items.original_title ? items.original_title : items.original_name}</h3>
						{size === "lg" && <div className="hidden md:block h-0 group-hover:h-20 overflow-hidden transition-all duration-700 ">
							<p>{textSlice(items.overview)}</p>
						</div>}
						{size === "lg" ? <button className="px-2 pb-1 lg:px-4 text-sm mt-2 lg:font-bold rounded-sm border lg:mt-3 hover:bg-white hover:text-black">
							play
						</button> : <div className="h-0 mt-2 overflow-hidden group-hover:h-9 transition-all duration-500">
							<button className="border border-2 border-red-700 px-3 text-red-700 hover:text-white   hover:bg-red-700 rounded">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-5 h-5 md:w-6 md:h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
								</svg>
							</button>
						</div>}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card