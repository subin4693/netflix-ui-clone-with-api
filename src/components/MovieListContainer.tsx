import React from 'react'
import { Row } from './'

const MovieListContainer = () => {
	return (<div className="px-20 py-10 bg-black">
		<h1 className="text-5xl font-bold mb-5">Movies</h1>
		<h2 className="text-2xl font-bold">Popular</h2>
		<Row type="fetchTopRated" size="lg" />

	</div>
	)
}
export default MovieListContainer;