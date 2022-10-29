import React, { useEffect, useState } from 'react';
import CSS from 'csstype';
import axios from '../helpers/axios';
import requestUrl from '../helpers/requests';

const Banner = () => {
	const [bannerImg, setBannerImg] = useState<Array<string>>()

	useEffect(() => {
		const fetchData = async () => {
			const request: any = await axios.get(requestUrl.fetchNetflixOriginals);
			setBannerImg(request.data.results[Math.floor(Math.random() * request.data.results.length)].backdrop_path)
			return request;
		}
		fetchData();
	}, [])

	const bgimg: CSS.Properties = {
		backgroundImage: `linear-gradient(to top,rgba(0, 0, 1, 1), rgba(0, 0, 0, 0)), url(https://image.tmdb.org/t/p/original/${bannerImg})`
	}

	return (
		<div>
			<div className="h-[448px] bg-center bg-cover" style={bgimg} />
		</div>
		
	)
}

export default Banner;