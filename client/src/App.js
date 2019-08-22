import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import AuthServices from './services/auth.services'
import UserServices from './services/user.services'
import Signup from './components/Signup'
import Login from './components/Login'
import Scout from './components/Scout'
import Player from './components/Player'
import PlayersList from './components/Players-list'
import PlayerDetail from './components/Player-details'
import Navbar from './components/Navbar'
import Home from './components/Home'
import TestCreate from './components/Test-create'
import TestList from './components/Test-list'

class App extends Component {
	constructor() {
		super()
		this.state = { loggedInUser: null, players: [], playersInfo: [] }
		this.authServices = new AuthServices()
		this.services = new UserServices()
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

	componentDidMount = () => this.updateList()

	updateList = () => {
		this.services
			.getPlayers()
			.then(response => this.setState({ players: response.data, playersInfo: response.data }))
			.catch(err => console.log('Ha habido un error', err))
	}

	searchPlayer = string => {
		const playerCopy = [...this.state.players]
		this.setState({
			playersInfo: playerCopy.filter(elm => elm.age.toString() === string || elm.position === string)
		})
	}

	updateState = () => {
		this.setState(this.state)
	}

	render() {
		this.fetchUser()

		return (
			<div className='App'>
				<Navbar setUser={this.setTheUser} userInSession={this.state.loggedInUser} />
				<Switch>
					<Route path='/' exact render={match => <Home searchPlayer={this.searchPlayer} />} />
					<Route path='/signup' exact render={match => <Signup {...match} setUser={this.setTheUser} />} />
					<Route
						path='/profile'
						exact
						render={() => {
							if (this.state.loggedInUser && this.state.loggedInUser.data.role === 'COACH') {
								return <Scout user={this.state.loggedInUser.data} />
							} else if (this.state.loggedInUser && this.state.loggedInUser.data.role === 'PLAYER')
								return <Player updateState={this.updateState} user={this.state.loggedInUser.data} />
						}}
					/>
					<Route path='/login' exact render={match => <Login {...match} setUser={this.setTheUser} />} />
					<Route path='/players' exact render={() => <PlayersList playersInfo={this.state.playersInfo} />} />
					<Route path='/players/:id' render={match => <PlayerDetail {...match} playersInfo={this.state.players} />} />
					<Route path='/test' exact render={() => <TestList />} />
					<Route path='/test/create' exact render={() => <TestCreate />} />
				</Switch>
			</div>
		)
	}
}

export default App
