var MovieListEntry = ({movie}) => (
  <div className="movie-list-entry">
    <tr>
      <td>
        {movie.title}
      </td>
    </tr>
  </div>

);

window.MovieListEntry = MovieListEntry;
