import React, { Component } from 'react'
import Services from '../services/user.services'

class PlayersList extends Component {
	constructor() {
		super()
		this.state = { players: [] }
		this.services = new Services()
	}

	componentDidMount = () => this.updateList()

	updateList = () => {
		this.services
			.getPlayers()
			.then(response => this.setState({ players: response.data }))
			.catch(err => console.log('Ha habido un error', err))
	}

	render() {
		return (
			<>
				<h1>Listado de jugadores</h1>
				<ul>
					{this.state.players.map(elm => (
						<li key={elm._id}>{elm.username}</li>
					))}
				</ul>
			</>
		)
	}
}

export default PlayersList
