import React, { Component } from 'react';
import Link from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import MovieList from './components/MovieList'
import Movie from './components/Movie'
import { Route } from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false,
      user: null,
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Route exact path='/' component={Home} />
          <Route exact path='/movies' render={() => <MovieList auth={this.state.auth} />} />
        </div>
        <Footer />

      </div>
    )
  }
}

export default App;
