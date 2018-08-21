var MovieList = ({movies}) => (
  <div className="movie-list">
    <table>
      <tbody>
        {movies.map(movieEntry => <MovieListEntry movie={movieEntry}/>)}
      </tbody>
    </table>
  </div>
)

window.MovieList = MovieList;