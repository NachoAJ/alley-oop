import React, { Component } from 'react'
import AuthServices from '../services/auth.services'

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			role: 'PLAYER'
		}
		this.authServices = new AuthServices()
	}

	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleFormSubmit = e => {
		e.preventDefault()
		const { username, password, role } = this.state
		this.authServices
			.signup(username, password, role)
			.then(theNewUser => {
				this.setState({
					username: '',
					password: '',
					role: ''
				})
				this.props.setUser(theNewUser)
				this.props.history.push('/')
			})
			.catch(err => console.log(err.response.data.message))
	}

	render() {
		return (
			<>
				<h1>Signup</h1>
				<form onSubmit={this.handleFormSubmit}>
					<label htmlFor='username'>Usuario:</label>
					<input name='username' type='text' id='username' value={this.state.username} onChange={this.handleInputChange} /> <br />
					<label htmlFor='password'>Contraseña:</label>
					<input name='password' type='password' id='password' value={this.state.password} onChange={this.handleInputChange} />
					<br />
					<label htmlFor='role'>Rol:</label>
					<select name='role' id='role' onChange={this.handleInputChange}>
						<option value='PLAYER'>Deportista</option>
						<option value='SCOUT'>Ojeador</option>
					</select>
					<br />
					<input type='submit' value='Registrar' />
				</form>
			</>
		)
	}
}

export default Signup
