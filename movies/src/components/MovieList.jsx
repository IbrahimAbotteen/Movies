import React,{Component} from 'react'
import Movie from "./Movie"

class MovieList extends Component{
    constructor(){
        super();
        this.state={
            movies:null,
            dataloaded:false
        }
    }

    getAllMovies() {
        fetch('/api/movies', { credentials: 'include' })
        .then(res => res.json())
        .then(res => {
          this.setState({
            movies: res.data.movies,
            dataLoaded: true,
          })
        }).catch(err => console.log(err));
      }

    componentDidMount(){
        this.getAllMovies();
    }

    handleFormSubmit(method, e, data, id) {
        e.preventDefault()
        fetch(`/api/movies/${id || ''}`, {
          method: method,
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.getAllMovies();
        }).catch(err => console.log(err));
      }
    renderMovieList(){
        if(this.state.dataloaded){
            return this.state.movies.map(movie=>{
                return <Movie key={movie.id} movie={movie} />
            })
        }
        else {
            return <p>loading.... </p>
        }
    }
    render(){
        return(
            <div className='movieList'>
                {this.renderMovieList()}
            </div>
        )
    }
}
export default MovieList