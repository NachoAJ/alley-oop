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
import SavedPlayers from './components/SavedPlayers'
import Footer from './components/Footer'

class App extends Component {
	constructor() {
		super()
		this.state = { loggedInUser: null, players: [], playersInfo: [], tests: [] }
		this.authServices = new AuthServices()
		this.services = new UserServices()
	}

	getTests = () => {
		this.services
			.getTestById(this.state.loggedInUser.data._id)
			.then(response => this.setState({ tests: response.data }))
			.catch(err => console.log(err))
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

	updateLoggedInUser = elm => {
		console.log('actualizo')
		this.setState({ loggedInUser: elm })
	}

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
								return <Player updateLoggedInUser={this.updateLoggedInUser} user={this.state.loggedInUser} />
						}}
					/>
					<Route path='/login' exact render={match => <Login {...match} setUser={this.setTheUser} />} />
					<Route path='/saved-players' exact render={() => <SavedPlayers user={this.state.loggedInUser} />} />
					<Route path='/players' exact render={() => <PlayersList playersInfo={this.state.playersInfo} />} />
					<Route
						path='/players/:id'
						render={match => (
							<PlayerDetail
								{...match}
								playersInfo={this.state.players}
								user={this.state.loggedInUser}
								updateLoggedInUser={this.updateLoggedInUser}
							/>
						)}
					/>
					<Route
						path='/test'
						exact
						render={() => <TestList getTests={this.getTests} user={this.state.loggedInUser} tests={this.state.tests} />}
					/>
					<Route
						path='/test/create'
						exact
						render={match => (
							<TestCreate
								{...match}
								getTest={this.getTests}
								user={this.state.loggedInUser}
								updateLoggedInUser={this.updateLoggedInUser}
							/>
						)}
					/>
				</Switch>
				<Footer></Footer>
			</div>
		)
	}
}

export default App
