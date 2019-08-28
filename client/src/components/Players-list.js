import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Player-list.css'

class PlayersList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			players: this.props.playersInfo
		}
	}

	sortListBy3PM = () => {
		let playersCopy = [...this.state.players]
		playersCopy = playersCopy.sort((a, b) => b.stats.ThreePPCT - a.stats.ThreePPCT)
		this.setState({ players: playersCopy })
	}

	sortListByPTS = () => {
		let playersCopy = [...this.state.players]
		playersCopy = playersCopy.sort((a, b) => b.stats.Pts - a.stats.Pts)
		this.setState({ players: playersCopy })
	}

	sortListByGP = () => {
		let playersCopy = [...this.state.players]
		playersCopy = playersCopy.sort((a, b) => b.stats.Gp - a.stats.Gp)
		this.setState({ players: playersCopy })
	}

	sortListByFgpct = () => {
		let playersCopy = [...this.state.players]
		playersCopy = playersCopy.sort((a, b) => b.stats.Fgpct - a.stats.Fgpct)
		this.setState({ players: playersCopy })
	}

	sortListByFtpct = () => {
		let playersCopy = [...this.state.players]
		playersCopy = playersCopy.sort((a, b) => b.stats.Ftpct - a.stats.Ftpct)
		this.setState({ players: playersCopy })
	}

	render() {
		return (
			<div className='container'>
				<button onClick={this.sortListByGP}>GP</button>
				<button onClick={this.sortListByPTS}>PTS</button>
				<button onClick={this.sortListBy3PM}>3P%</button>
				<button onClick={this.sortListByFgpct}>FG%</button>
				<button onClick={this.sortListByFtpct}>FT%</button>
				{this.state.players.map(elm => (
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
