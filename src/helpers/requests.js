export default {
	fetchTrending: `/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
	fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
	fetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
	fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
	fetchDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`,
}