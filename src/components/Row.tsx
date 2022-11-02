import React, { useEffect, useState } from 'react'
import { Card } from './'
import Slider from 'react-slick'
import axios from '../helpers/axios'


type PropType = {
	type: string;
	size: string;
}

const Row = ({ type, size }: PropType) => {
	const [movieImg, setMovieImg] = useState<Array<Object>>()
	useEffect(() => {
		const fetchMovie = async () => {
			const request: any = await axios.get(type)
			setMovieImg(request.data.results)
		}
		fetchMovie();
	}, [type])
	console.log(movieImg)
	var settings = {
		dots: false,
		infinite: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 3
	};

	return (<div className="mt-10">
		<Slider {...settings} >		
			{
				movieImg?.map((items, index) => {
					return <Card items={items} key={index} size={size} />
				})
			}
		</Slider>

	</div>
	)
}

export default Row;