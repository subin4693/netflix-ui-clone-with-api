import React, { useEffect, useState } from 'react'
import { Card } from './'
//import Slider from 'react-slick'
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
	return (<div className="mt-10 flex overflow-hidden">
		{
			movieImg?.map((items, index) => {
				return <Card items={items} key={index} size={size} />
			})
		}
	</div>
	)
}

export default Row;