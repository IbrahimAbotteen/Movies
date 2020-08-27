import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            email: '',
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
                <form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange} />
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange} />
                    <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange} />
                    <input type="submit" value="Register" />
                </form>
            </div>

        )
    }
}

export default Register