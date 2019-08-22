import React, { Component } from 'react'
import AuthServices from '../services/auth.services'

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			role: 'PLAYER',
			age: undefined,
			position: 'BASE'
		}
		this.authServices = new AuthServices()
	}

	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleFormSubmit = e => {
		e.preventDefault()
		const { username, password, role, age, position } = this.state
		this.authServices
			.signup(username, password, role, age, position)
			.then(theNewUser => {
				this.setState({
					username: '',
					password: '',
					role: '',
					position: 'BASE',
					age: 0
				})
				this.props.setUser(theNewUser)
				this.props.history.push('/')
			})
			.catch(err => console.log(err.response.data.message))
	}

	render() {
		return (
			<>
				<h1>Nueva prueba</h1>
				<form onSubmit={this.handleFormSubmit}>
					<label htmlFor='title'>Título:</label>
					<input name='title' type='text' id='title' value={this.state.title} onChange={this.handleInputChange} /> <br />
					<label htmlFor='location'>Ubicación:</label>
					<input name='location' type='text' id='location' value={this.state.location} onChange={this.handleInputChange} />
					<br />
					<label htmlFor='date'>Fecha:</label>
					<input name='date' type='date' id='date' value={this.state.date} onChange={this.handleInputChange} />
					<br />
					<label htmlFor='requirements'>Requisitos:</label>
					<textarea name='requirements' id='requirements' value={this.state.requirements} onChange={this.handleInputChange} />
					<br />
					<input type='submit' value='Registrar' />
				</form>
			</>
		)
	}
}

export default Signup
