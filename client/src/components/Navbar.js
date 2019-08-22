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
			})
			.catch(err => console.log(err))
	}

	render() {
		const saludo = this.props.userInSession ? this.props.userInSession.data.username : 'invitado'

		if (this.props.userInSession) {
			return (
				<Navbar bg='light' expand='lg' className='menu'>
					<Navbar.Brand>
						<h2>Basket lovers</h2>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link as='div'>
								<Link to='/'>Inicio</Link>
							</Nav.Link>
							<Nav.Link as='div'>
								<Link to='/'>Jugadores</Link>
							</Nav.Link>
							<Nav.Link as='div'>
								<Link to='/test'>Pruebas</Link>
							</Nav.Link>
							<Nav.Link as='div' onClick={this.logout}>
								Cerrar sesión
							</Nav.Link>
							<Nav.Link as='div'>
								<small>Bienvenid@, {saludo}</small>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)
		} else {
			return (
				<Navbar bg='light' expand='lg' className='menu'>
					<Navbar.Brand>
						<h2>Basket lovers</h2>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Nav.Link as='div'>
								<Link to='/'>Inicio</Link>
							</Nav.Link>
							<Nav.Link as='div'>
								<Link to='/signup'>Registro</Link>
							</Nav.Link>
							<Nav.Link as='div'>
								<Link to='/login'>Acceder</Link>
							</Nav.Link>
							<Nav.Link as='div'>
								<small>Bienvenid@, {saludo}</small>
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			)
		}
	}
}
export default NavBar
