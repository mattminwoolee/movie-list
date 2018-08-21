var Search = ({handler, movieTitle}) => (
  <div className="search-bar">
    <input placeholder="Add movie title here.." type="text" onChange={(e) => movieTitle(e.target.value)}/>
    <button className="btn hidden-sm-down" >
      <span className="add-button">Add</span>
    </button>
    <br></br>
    <input placeholder="Search.." type="text" onChange={(e) => handler(e.target.value)}/>
    <button className="btn hidden-sm-down" >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
)