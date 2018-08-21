class App extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      movies: props.movies,
      searchBarMovie: {title: ''}
    }

    this.handleAddMovieTitle = (input) => {
      console.log('search bar invokved!')
      this.setState({
        searchBarMovie: {title: input}
      })
      // set State with currently existing movies
    }

    this.searchHandle = (input) => {
      let filteredMovies = exampleMovieData.filter( movie => movie.title.includes(input));
      this.setState({
        movies : filteredMovies
        // set the new movies to the movies that contain the input as the title
      });
    };

    this.searchHandle = this.searchHandle.bind(this);
    this.handleAddMovieTitle = this.handleAddMovieTitle.bind(this);
  }

  render () {
    return (
      <div>
        <div className="header">
          <h2>Movie List</h2>
          <nav className="navbar">
            <div>
              <Search movieTitle={this.handleAddMovieTitle} handler={this.searchHandle}/>
            </div>
          </nav>
        </div>
        <div>
          <MovieList movies={this.state.movies}/>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
