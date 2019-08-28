import React, { Component } from 'react'
import Video from '../components/Video'
import Services from '../services/user.services'
import { Modal } from 'react-bootstrap'

import '../Player-details.css'

class Player extends Component {
	constructor(props) {
		super(props)
		this.state = {
			player: { role: '', videos: [], position: '', username: '', age: '', stats: '' },
			showModal: false,
			subject: '',
			message: ''
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
			.then(response => {
				console.log(response)
				this.props.updateLoggedInUser(response)
				console.log('Jugador Añadido')
			})
			.catch(err => console.log('Ha habido un error', err))
	}

	handleModalOpen = () => {
		this.setState({ showModal: true })
	}

	handleModalClose = () => {
		this.setState({ showModal: false })
	}

	handleEmail = e => {
		e.preventDefault()
		this.services
			.sendEmail({ email: this.state.player.email, subject: this.state.subject, message: this.state.message })
			.then(() => this.handleModalClose())
			.catch(err => console.log('Ha habido un error', err))
	}

	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className='player-details'>
				<div className='container'>
					<header>
						<div className='cover'></div>
						<div className='row padding'>
							<div className='col-md-3'>
								<img src={this.state.player.imageUrl}></img>
							</div>
							<div className='col-md-5'>
								<h2>{this.state.player.username}</h2>
								<span>Posicion: {this.state.player.position}</span>
								<br></br>
								<span>Edad: {this.state.player.age}</span>
							</div>
							<div className='col-md-4'>
								<button onClick={this.savePlayer} className='save-btn'>
									Guardar
								</button>
								<button onClick={this.handleModalOpen} className='contact-btn'>
									Contactar
								</button>
							</div>
						</div>
					</header>
					<h2>Vídeos</h2>
					<section className='videos'>
						{this.state.player.videos.map((elm, idx) => {
							if (idx === 0) {
								return <Video url={elm} key={idx} width='850px' />
							}
						})}
						<div className='secondary-videos'>
							<ul>
								{this.state.player.videos.map((elm, idx) => {
									if (idx > 0) {
										return (
											<li>
												<Video url={elm} key={idx} width='230px' />
											</li>
										)
									}
								})}
							</ul>
						</div>
					</section>
					<Modal show={this.state.showModal} onHide={this.handleModalClose}>
						<div className='container'>
							<Modal.Header closeButton>
								<h4 className='center'>Contactar</h4>
							</Modal.Header>
							<Modal.Body>
								<form onSubmit={this.handleEmail}>
									<label htmlFor='subject'>Asunto:</label>
									<input type='text' name='subject' id='subject' onChange={this.handleInputChange}></input>
									<br></br>
									<label htmlFor='message'>Mensaje:</label>
									<textarea name='message' id='message' onChange={this.handleInputChange}></textarea>
									<button>Enviar</button>
								</form>
							</Modal.Body>
						</div>
					</Modal>
				</div>
			</div>
		)
	}
}

export default Player
