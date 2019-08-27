import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AuthServices from '../services/auth.services'

import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends Component {
	constructor(props) {
		super(props)
		this.authServices = new AuthServices()
	}

	toggleMenu = () => document.querySelector('.menu').classList.toggle('abierto')

	logout = () => {
		this.authServices
			.logout()
			.then(x => {
				this.props.setUser(null)
				this.props.match.history.push('/')
			})
			.catch(err => console.log(err))
	}

	render() {
		const saludo = this.props.userInSession ? this.props.userInSession.data.username : 'invitado'

		if (this.props.userInSession) {
			return (
				<Navbar expand='lg' className='menu'>
					<Navbar.Brand>
						<Link to='/'>
							<img src='../images/Logo.svg' alt='Logo' className='logo-nav' />
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link as='div'>
								<Link to='/saved-players' className='white'>
									Mis jugadores
								</Link>
							</Nav.Link>
							<Nav.Link as='div'>
								<Link to='/test' className='white'>
									Pruebas de selección
								</Link>
							</Nav.Link>
							<Nav.Link as='div' onClick={this.logout}>
								<Link to='/' className='white'>
									Cerrar sesión
								</Link>
							</Nav.Link>
							<Nav.Link as='div'>
								<small className='white'>{saludo}</small>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)
		} else {
			return (
				<Navbar expand='lg' className='menu'>
					<Navbar.Brand>
						<Link to='/'>
							<img src='../images/Logo.svg' alt='Logo' className='logo-nav' />
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link as='div'>
								<Link to='/signup' className='nav-signup'>
									Regístrate
								</Link>
							</Nav.Link>
							<Nav.Link as='div'>
								<Link to='/login' className='nav-login'>
									Iniciar sesión
								</Link>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)
		}
	}
}
export default NavBar
