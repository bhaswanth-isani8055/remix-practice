import { useLoaderData } from "remix";
import MovieItem from "~/components/MovieItem";
import { Movie } from "~/models/movie-modal";

export const loader = () => {
	const movies: Movie[] = [
		
	];

	return movies;
};

const MoviesPage = () => {
	const movies = useLoaderData<Movie[]>();

	return (
		<div>
			{movies.map((movie) => {
				return <MovieItem key={movie.id} movie={movie} />
			})}
		</div>
	);
};

export default MoviesPage;
