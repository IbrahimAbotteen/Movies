import React,{Component} from React

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
            return <h1>Our Movie List will go here</h1>
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