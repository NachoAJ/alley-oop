import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PlayersList extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				{this.props.playersInfo.map(elm => (
					<p key={elm._id}>
						{elm.username}
						<Link to={`/players/${elm._id}`}>Detalles</Link>
					</p>
				))}
			</div>
		)
	}
}

export default PlayersList
