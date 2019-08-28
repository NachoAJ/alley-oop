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
						<div className='container'>
							<div className='row'>
								<div className='col-md-4'>
									<img src={elm.imageUrl} alt='Jugador'></img>
								</div>
								<div className='col-md-4'>
									<h2>{elm.username}</h2>
									<p className='capitalize'>Posición: {elm.position}</p>
									<p>Edad: {elm.age}</p>
								</div>
								<div className='col-md-4'>
									<div className='margin'>
										<Link className='button' to={`/players/${elm._id}`}>
											Ver Perfil
										</Link>
									</div>
									<div className='stats'>
										<span className='single-stat'>{elm.stats.ThreePM}</span>
										<span className='single-stat'>{elm.stats.ThreePPCT}</span>
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

export default PlayersList
