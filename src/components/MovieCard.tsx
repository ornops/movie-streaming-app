import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface MovieCardProps {
	movie: {
		id: number;
		title: string;
		poster_path: string;
	};
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
	return (
		<Card sx={{ maxWidth: 250 }}>
			<Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
				<CardMedia
					component="img"
					height="350"
					image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
					alt={movie.title}
				/>
				<CardContent>
					<Typography variant="h6">{movie.title}</Typography>
				</CardContent>
			</Link>
		</Card>
	);
};

export default MovieCard;
