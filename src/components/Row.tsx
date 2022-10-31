import React, { useEffect, useState } from 'react'
import { Card } from './'

import axios from '../helpers/axios'
import requestUrl from '../helpers/requests'


type PropType = {
	type: string;
	size: string;
}

const Row = ({ type, size }: PropType) => {
	const [movieImg, setMovieImg] = useState<Array<Object>>()
	useEffect(() => {
		const fetchMovie = async () => {
			const request: any = await axios.get(requestUrl["fetchTopRated"])
			setMovieImg(request.data.results)
		}
		fetchMovie();
	}, [type])
	return (<div className="flex  mt-10">
		{
			movieImg?.map((items, index) => {
				return <Card items={items} key={index} />
			})
		}

	</div>
	)
}

export default Row;