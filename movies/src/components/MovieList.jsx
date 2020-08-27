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

    componentDidMount(){
        fetch('/api/movies',{credentials:"include"})
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                movies:res.data.movies,
                dataloaded:true,
            }).catch(err => console.log(err));
        })
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