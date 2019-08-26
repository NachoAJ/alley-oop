import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PlayersList extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='container'>
				<button>GP</button>
				<button>PTS</button>
				<button>3PM</button>
				<button>FGM</button>
				<button>FTM</button>
				{this.props.playersInfo.map(elm => (
					<p key={elm._id}>
						{elm.username}
						<Link to={`/players/${elm._id}`}>Ver Perfil</Link>
					</p>
				))}
			</div>
		)
	}
}

export default PlayersList
