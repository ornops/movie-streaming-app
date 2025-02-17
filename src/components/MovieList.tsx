import { useEffect, useState } from "react";
import { Grid, Container } from "@mui/material";
import { fetchMovies } from "../services/movieApi";
import MovieCard from "./MovieCard";

const MovieList = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetchMovies("popular").then(setMovies);
	}, []);

	return (
		<Container>
			<Grid container spacing={3}>
				{movies.map((movie) => (
					<Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
						<MovieCard movie={movie} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default MovieList;
