import React, { Component } from 'react'
import './App.css'
import { Switch, Route, Link } from 'react-router-dom'

import AuthServices from './services/auth.services'
import Signup from './components/Signup'
import Login from './components/Login'
import Scout from './components/Scout'
import Player from './components/Player'
import PlayersList from './components/Players-list'

class App extends Component {
	constructor() {
		super()
		this.state = { loggedInUser: null }
		this.authServices = new AuthServices()
	}

	setTheUser = user => {
		this.setState({ loggedInUser: user })
		console.log('Un componente ha cambiado el usuario en App:', this.state.loggedInUser)
	}

	fetchUser = () => {
		if (this.state.loggedInUser === null) {
			this.authServices
				.loggedin()
				.then(response => this.setState({ loggedInUser: response }))
				.catch(x => this.setState({ loggedInUser: false }))
		}
	}

	render() {
		this.fetchUser()

		return (
			<div className='App'>
				<Link to='/profile'>Perfil</Link>
				<Link to='/login'>Login</Link>
				<Link to='/signup'>Signup</Link>
				<Link to='/players-list'>Deportistas</Link>
				<Switch>
					<Route path='/signup' exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
					<Route
						path='/profile'
						exact
						render={() => {
							if (this.state.loggedInUser.data.role === 'SCOUT') {
								return <Scout user={this.state.loggedInUser.data} />
							} else if (this.state.loggedInUser.data.role === 'PLAYER') return <Player user={this.state.loggedInUser.data} />
						}}
					/>
					<Route path='/login' exact render={match => <Login {...match} setUser={this.setTheUser} />} />
					<Route path='/players-list' exact component={PlayersList} />
				</Switch>
			</div>
		)
	}
}

export default App
