import React, { Component } from 'react'
import AuthServices from '../services/auth.services'
import '../Login.css'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: ''
		}
		this.authServices = new AuthServices()
	}

	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleFormSubmit = e => {
		e.preventDefault()
		const { username, password } = this.state
		this.authServices
			.login(username, password)
			.then(theLoggedUser => {
				this.setState({
					username: '',
					password: ''
				})
				this.props.setUser(theLoggedUser)
				this.props.history.push('/')
			})
			.catch(err => console.log(err.response.data.message))
	}

	render() {
		return (
			<div className='login'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-md-8'>
							<h2>Inicia sesión y encuentra el jugador que necesitas</h2>
						</div>
						<div className='col-md-4'>
							<div className='box'>
								<h3>Inicio de sesión de usuario</h3>
								<form onSubmit={this.handleFormSubmit}>
									Nombre:{' '}
									<input
										placeholder='Lebron James'
										className='input'
										name='username'
										type='text'
										value={this.state.username}
										onChange={this.handleInputChange}
									/>{' '}
									<br />
									Contraseña:{' '}
									<input
										className='input'
										name='password'
										type='password'
										value={this.state.password}
										onChange={this.handleInputChange}
									/>{' '}
									<br />
									<button className='btn'>Iniciar</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Login
