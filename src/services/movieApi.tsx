import axios from "axios";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query: string) => {
	try {
		const response = await axios.get(`${BASE_URL}/search/movie`, {
			params: {
				api_key: API_KEY,
				query,
			},
		});
		return response.data.results;
	} catch (error) {
		console.error("Error fetching movies:", error);
		return [];
	}
};

export const fetchMovieDetails = async (movieId: number) => {
	try {
		const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
			params: {
				api_key: API_KEY,
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error fetching movie details:", error);
		return null;
	}
};