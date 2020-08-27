import React, { Component } from 'react'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }



    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange} />
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
                    <input type="submit" value="Login" />
                </form>
            </div>

        )
    }
}

export default Login