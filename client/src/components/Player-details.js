import React, { Component } from 'react'
import Video from '../components/Video'

class Player extends Component {
	constructor(props) {
		super(props)
		this.state = {
			player: { role: '', videos: [], position: '', username: '', age: '' }
		}
	}

	componentDidMount = () => this.getPlayer()

	getPlayer = () => {
		let player = this.props.playersInfo.filter(elm => elm._id === this.props.match.params.id)
		this.setState({ player: player[0] })
	}

	render() {
		return (
			<div className='container'>
				<h1>{this.state.player.username}</h1>
				<p>{this.state.player.position}</p>
				<p>{this.state.player.age}</p>
				<button>Contactar</button>
				<button>Guardar</button>
				<br />
				{this.state.player.videos.map((elm, idx) => {
					return <Video url={elm} key={idx} />
				})}
			</div>
		)
	}
}

export default Player
