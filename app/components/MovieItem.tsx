import { Movie } from "~/models/movie-modal"

const MovieItem = (props: {movie: Movie}) => {
  return (
    <h1>{props.movie.title}</h1>
  )
}

export default MovieItem