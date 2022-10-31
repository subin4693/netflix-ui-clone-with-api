import React, { useEffect, useState } from 'react';
import CSS from 'csstype';
import axios from '../helpers/axios';
import requestUrl from '../helpers/requests';

const Banner = () => {
	const [bannerImg, setBannerImg] = useState<any>()

	useEffect(() => {
		const fetchData = async () => {
			const request: any = await axios.get(requestUrl.fetchNetflixOriginals);
			setBannerImg(request.data.results[Math.floor(Math.random() * request.data.results.length)])
			console.log(bannerImg)
			return request;
		}
		fetchData();
	}, [])
	const textSlice = (text: string = "loading"): string => {
		return text?.length > 130 ? text.slice(0, 130) + "..." : text + "..."
	}

	const bgimg: CSS.Properties = {
		backgroundImage: `linear-gradient(to top,rgba(0, 0, 1, 1), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original/${bannerImg?.backdrop_path})`
	}

	return (
		<div className="relative">
			<div className="h-[38rem] bg-center bg-cover" style={bgimg} />
			<div className="absolute text-white z-10 bottom-28 left-24 max-w-md"> 
				<h1 className="font-bold text-2xl">{bannerImg?.original_name}</h1>
				<p className="font-bold">
					{textSlice(bannerImg?.overview)}
				</p>
				<button className="px-5 py-1 text-black font-bold bg-white rounded mt-5 text-center hover:bg-transparent hover:text-white duration-300 border border-white">Play</button>
				<button className="px-5 py-1 text-white font-bold  bg-transparent rounded mt-5 text-center hover:bg-white border border-white hover:text-black duration-300 ml-5">PLAY LIST</button>
			</div>
		</div>
	)
}

export default Banner;