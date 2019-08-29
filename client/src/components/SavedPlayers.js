import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../SavedPlayers.css'

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
			<div className='saved-players'>
				<h2>Mis jugadores</h2>
				{this.props.user &&
					this.props.user.data.savePlayers.map((elm, idx) => (
						<div className='player-box' key={elm.player._id}>
							<div className='container'>
								<div className='row'>
									<div className='col-md-4'>
										<img src={elm.player.imageUrl} alt='Jugador'></img>
									</div>
									<div className='col-md-4'>
										<h2>{elm.player.username}</h2>
										<p className='capitalize'>Posición: {elm.player.position}</p>
										<p>Edad: {elm.player.age}</p>
									</div>
									<div className='col-md-4'>
										<div className='margin'>
											<Link className='button' to={`/players/${elm.player._id}`}>
												Ver Perfil
											</Link>
										</div>
										<div className='stats'>
											{elm.player.stats && <span className='single-stat'>{elm.player.stats.ThreePM}</span>}
											{elm.player.stats && <span className='single-stat'>{elm.player.stats.ThreePPCT}</span>}
											<br></br>
											<span className='label'>3PM</span>
											<span className='label'>3P%</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
			</div>
		)
	}
}

export default SavedPlayers
