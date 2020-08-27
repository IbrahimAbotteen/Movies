import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import Login from './components/Login'
import { Redirect } from 'react-router-dom'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: false,
      user: null,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    fetch('/api/auth/verify', { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: res.data.user
        })
      }).catch(err => console.log(err));
  }

  handleLoginSubmit = (e, data) => {
    e.preventDefault()
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          auth: res.auth,
          user: res.data.user,
        })
      }).catch(err => console.log(err))
  }
  handleRegisterSubmit = (e, data) => {
    e.preventDefault()
    fetch('/api/auth/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          auth: res.auth,
          user: res.data.user,
        })
      }).catch(err => console.log(err))
  }
  logout = () => {
    fetch('/api/auth/logout', {
      credentials: 'include',
    }).then(res => res.json())
      .then(res => {
        this.setState({
          auth: res.auth,
          user: res.data.user
        })
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header logout={this.logout} />
        <div className="container">
          <Route exact path='/' component={Home} />
          <Route exact path='/login' render={() => (
            this.state.auth ?
              <Redirect to='/dashboard' />
              :
              <Login handleLoginSubmit={this.handleLoginSubmit} />
          )} />

          <Route exact path='/register' render={() => (
            this.state.auth
              ? <Redirect to='/dashboard' />
              : <Register handleRegisterSubmit={this.handleRegisterSubmit} />
          )} />

          <Route exact path='/dashboard' render={() => (
            !this.state.auth ?
              <Redirect to='/login' />
              :
              <Dashboard user={this.state.user} />
          )} />

        </div>
        <Footer />

      </div>
    )
  }
}

export default App;
