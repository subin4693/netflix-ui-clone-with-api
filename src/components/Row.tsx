import React, { useEffect, useState } from 'react'
import { Card } from './'
import Slider from 'react-slick'
import axios from '../helpers/axios'

type PropType = {
	type: string;
	size: string;
}

const Row = ({ type, size }: PropType) => {

	const [movieImg, setMovieImg] = useState<Array<Object>>();
	
	const fetchMovie = async () => {
		const request: any = await axios.get(type)
		setMovieImg(request.data.results)
	}

	useEffect(() => {
		fetchMovie();
		
	}, [type])

	const settings = {
		dots: false,
		infinite: false,
		speed: 900,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidsToScroll: 1,
					centerMode: true,
				},
			},
			{
				breakpoint: 436,
				settings: {
					slidesToShow: 1.5,
					slidsToScroll: 1,
				},
			},
			{
				breakpoint: 546,
				settings: {
					slidesToShow: 2,
					slidsToScroll: 1,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2.5,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1134,
				settings: {
					slidesToShow: 3,
					slidsToScroll: 1,
				},
			},
			{
				breakpoint: 1285,
				settings: {
					slidesToShow: 3.5,
					slidsToScroll: 1,
				},
			},
		]
	};

	return (<div className="px-10 py-10 lg:mt-5 lg:py-10 ">
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