import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SavedPlayers extends Component {
	constructor(props) {
		super(props)
		this.state = {
			players: []
		}
	}

	componentDidMount = () => {}

	render() {
		return (
			<>
				<h1>Lista jugadores guardados</h1>
				{this.props.user &&
					this.props.user.data.savePlayers.map((elm, idx) => {
						return <p>{elm.player.username}</p>
					})}
			</>
		)
	}
}

export default SavedPlayers
