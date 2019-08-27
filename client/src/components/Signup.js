import React, { Component } from 'react'
import AuthServices from '../services/auth.services'
import Services from '../services/user.services'

class Signup extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			email: '',
			password: '',
			role: 'PLAYER',
			age: undefined,
			position: 'BASE',
			imageUrl: ''
		}
		this.authServices = new AuthServices()
		this.service = new Services()
	}

	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleFileUpload = e => {
		const uploadData = new FormData()
		uploadData.append('videoUrl', e.target.files[0])

		this.service
			.handleUpload(uploadData)
			.then(response => this.setState({ imageUrl: response.data.secure_url }))
			.catch(err => console.log(err))
	}

	handleFormSubmit = e => {
		e.preventDefault()
		const { username, email, password, role, age, position, imageUrl } = this.state
		this.authServices
			.signup(username, email, password, role, age, position, imageUrl)
			.then(theNewUser => {
				this.setState({
					username: '',
					email: '',
					password: '',
					role: '',
					position: 'BASE',
					age: 0,
					imageUrl: ''
				})
				this.props.setUser(theNewUser)
				this.props.history.push('/')
			})
			.catch(err => console.log(err.response.data.message))
	}

	render() {
		if (this.state.role === 'PLAYER') {
			return (
				<>
					<h1>Signup</h1>
					<form onSubmit={this.handleFormSubmit}>
						<label htmlFor='role'>Rol:</label>
						<select name='role' id='role' onChange={this.handleInputChange}>
							<option value='PLAYER'>Deportista</option>
							<option value='COACH'>Entrenador</option>
						</select>
						<br />
						<label htmlFor='username'>Usuario:</label>
						<input name='username' type='text' id='username' value={this.state.username} onChange={this.handleInputChange} />{' '}
						<br />
						<label htmlFor='email'>Correo electrónico:</label>
						<input name='email' type='email' id='email' value={this.state.email} onChange={this.handleInputChange} /> <br />
						<label htmlFor='password'>Contraseña:</label>
						<input name='password' type='password' id='password' value={this.state.password} onChange={this.handleInputChange} />
						<br />
						<label htmlFor='age'>Edad:</label>
						<input name='age' type='number' id='age' value={this.state.age} onChange={this.handleInputChange} />
						<br />
						<label htmlFor='position'>Posición:</label>
						<select name='position' id='position' onChange={this.handleInputChange}>
							<option value='BASE'>Base</option>
							<option value='ESCOLTA'>Escolta</option>
							<option value='ALERO'>Alero</option>
							<option value='ALAPIVOT'>Ala-Pivot</option>
							<option value='PIVOT'>Pivot</option>
						</select>
						<br />
						<label htmlFor='imageUrl'>Imagen:</label>
						<input name='imageUrl' type='file' id='imageUrl' onChange={this.handleFileUpload} />
						<br />
						<input type='submit' value='Registrar' />
					</form>
				</>
			)
		} else {
			return (
				<>
					<h1>Signup</h1>
					<form onSubmit={this.handleFormSubmit}>
						<label htmlFor='role'>Rol:</label>
						<select name='role' id='role' onChange={this.handleInputChange}>
							<option value='PLAYER'>Deportista</option>
							<option value='COACH'>Entrenador</option>
						</select>
						<br />
						<label htmlFor='username'>Usuario:</label>
						<input name='username' type='text' id='username' value={this.state.username} onChange={this.handleInputChange} />{' '}
						<br />
						<label htmlFor='password'>Contraseña:</label>
						<input name='password' type='password' id='password' value={this.state.password} onChange={this.handleInputChange} />
						<br />
						<input type='submit' value='Registrar' />
					</form>
				</>
			)
		}
	}
}

export default Signup
