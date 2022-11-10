import React, { Suspense } from 'react'
import requestUrl from '../helpers/requests'
import { Row } from './'



const MovieListContainer = () => {
	
	return (<div className="bg-black py-10">
		<h1 className="text-2xl ml-5 lg:text-5xl lg:ml-10 text-white font-bold mb-5">Movies</h1>
		<h2 className="text-xl ml-5 lg:text-2xl lg:ml-10 text-white font-bold">Popular</h2>
		<Row type={requestUrl.fetchTopRated} size="lg" />
		<h2 className="text-xl ml-5 lg:text-2xl lg:ml-10 text-white font-bold mt-6">Trending</h2>
		<Row type={requestUrl.fetchTrending} size="sm" />
		<h2 className="text-xl ml-5 lg:text-2xl lg:ml-10 text-white font-bold mt-6">Action</h2>
		<Row type={requestUrl.fetchActionMovies} size="sm" />
		<h2 className="text-xl ml-5 lg:text-2xl lg:ml-10 text-white font-bold mt-6">Comedy</h2>
		<Row type={requestUrl.fetchComedyMovies} size="sm" />
		<h2 className="text-xl ml-5 lg:text-2xl lg:ml-10 text-white font-bold mt-6">Horror</h2>
		<Row type={requestUrl.fetchHorrorMovies} size="sm" />
		<h2 className="text-xl ml-5 lg:text-2xl lg:ml-10 text-white font-bold mt-6">Romanctic</h2>
		<Row type={requestUrl.fetchRomanceMovies} size="sm" />
		<h2 className="text-xl ml-5 lg:text-2xl lg:ml-10 text-white font-bold mt-6">Netflix Originals</h2>
		<Row type={requestUrl.fetchNetflixOriginals} size="sm" />
		<h2 className="text-xl ml-5 lg:text-2xl lg:ml-10 text-white font-bold mt-6">Documentaries</h2>
		<Row type={requestUrl.fetchDocumentaries} size="sm" />
	</div>
	)
}
export default MovieListContainer;