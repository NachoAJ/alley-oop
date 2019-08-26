import React, { Component } from 'react'
import Video from '../components/Video'
import Services from '../services/user.services'

class Player extends Component {
	constructor(props) {
		super(props)
		this.state = {
			player: { role: '', videos: [], position: '', username: '', age: '', stats: '' }
		}
		this.services = new Services()
	}

	componentDidMount = () => this.getPlayer()

	getPlayer = () => {
		let player = this.props.playersInfo.filter(elm => elm._id === this.props.match.params.id)
		this.setState({ player: player[0] })
	}

	savePlayer = e => {
		e.preventDefault()
		this.services
			.savePlayer({ player: this.state.player, userId: this.props.user.data._id })
			.then(response => console.log('Jugador Añadido'))
			.catch(err => console.log('Ha habido un error', err))
	}

	render() {
		return (
			<div className='container'>
				<h1>{this.state.player.username}</h1>
				<p>{this.state.player.position}</p>
				<p>{this.state.player.age}</p>
				<p>{this.state.player.stats.ThreePPCT}</p>
				<button>Contactar</button>
				<form onSubmit={this.savePlayer}>
					<button>Guardar</button>
				</form>
				<br />
				{this.state.player.videos.map((elm, idx) => {
					return <Video url={elm} key={idx} />
				})}
			</div>
		)
	}
}

export default Player
