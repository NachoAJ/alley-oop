import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Player-list.css'

class PlayersList extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='container'>
				{/* <button>GP</button>
				<button>PTS</button>
				<button>3PM</button>
				<button>FGM</button>
				<button>FTM</button> */}
				{this.props.playersInfo.map(elm => (
					<div className='player-box' key={elm._id}>
						<img src={elm.imageUrl} alt='Jugador'></img>
						{elm.username}
						<Link className='button' to={`/players/${elm._id}`}>
							Ver Perfil
						</Link>
					</div>
				))}
			</div>
		)
	}
}

export default PlayersList
