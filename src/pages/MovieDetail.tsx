import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../services/movieApi";
import { Container, Typography, CardMedia } from "@mui/material";

const MovieDetail = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		fetchMovieDetails(Number(id)).then(setMovie);
	}, [id]);

	if (!movie) return <Typography>Loading...</Typography>;

	return (
		<Container>
			<Typography variant="h3">{movie.title}</Typography>
			<CardMedia
				component="img"
				image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				alt={movie.title}
			/>
			<Typography variant="body1">{movie.overview}</Typography>
		</Container>
	);
};

export default MovieDetail;
