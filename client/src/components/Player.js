import React, { Component } from 'react'
import Services from '../services/user.services'
import Video from '../components/Video'
import Loader from 'react-loader-spinner'

class Player extends Component {
	constructor(props) {
		super(props)
		this.state = {
			videoUrl: '',
			showSpinner: false,
			valueInput: ''
		}
		this.service = new Services()
	}

	handleFileUpload = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
		const uploadData = new FormData()
		uploadData.append('videoUrl', e.target.files[0])
		this.setState({ showSpinner: true })
		this.service
			.handleUpload(uploadData)
			.then(response => {
				this.setState({ videoUrl: response.data.secure_url })
				this.service
					.videoUpload({ videoUrl: this.state.videoUrl, id: this.props.user.data._id })
					.then(() => {
						this.service
							.updatePlayer({ id: this.props.user.data._id })
							.then(response => {
								this.props.updateLoggedInUser(response)
								this.setState({ videoUrl: '', showSpinner: false, valueInput: '' })
							})
							.catch(err => console.log(err))
					})
					.catch(err => console.log('error', err))
			})
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div className='player-details'>
				<div className='container'>
					<header>
						<div className='cover'></div>
						<div className='row padding'>
							<div className='col-md-3'>
								<img src={this.props.user.data.imageUrl}></img>
							</div>
							<div className='col-md-5'>
								<h2>{this.props.user.data.username}</h2>
								<span>Posicion: {this.props.user.data.position}</span>
								<br></br>
								<span>Edad: {this.props.user.data.age}</span>
							</div>
						</div>
					</header>
					<section className='stats'>
						<h2>Estadísticas</h2>
						<div className='box'>
							<div className='container'>
								<div className='row'>
									{this.props.user.data.stats && <div className='col-md-1'></div>}
									{this.props.user.data.stats && (
										<div className='col-md-2'>
											<p>{this.props.user.data.stats.Gp}</p>
											<span>Partidos Jugados</span>
										</div>
									)}
									{this.props.user.data.stats && (
										<div className='col-md-2'>
											<p>{this.props.user.data.stats.Ppg}</p>
											<span>Puntos por partido</span>
										</div>
									)}
									{this.props.user.data.stats && (
										<div className='col-md-2'>
											<p>{this.props.user.data.stats.Fgpct}%</p>
											<span>Tiros de campo</span>
										</div>
									)}
									{this.props.user.data.stats && (
										<div className='col-md-2'>
											<p>{this.props.user.data.stats.ThreePPCT}%</p>
											<span>Triples</span>
										</div>
									)}
									{this.props.user.data.stats && (
										<div className='col-md-2'>
											<p>{this.props.user.data.stats.Ftpct}%</p>
											<span>Tiros libres</span>
										</div>
									)}
									{this.props.user.data.stats && <div className='col-md-1'></div>}
								</div>
							</div>
						</div>
					</section>
					<h2>Vídeos</h2>
					<div className='form-group'>
						<input
							name='videoUrl'
							type='file'
							value={this.state.valueInput}
							className='form-control'
							id='input-vid'
							onChange={this.handleFileUpload}
						/>
					</div>
					{this.state.showSpinner && <Loader type='MutatingDots' color='#dc2014' height='100' width='100' />}
					<section className='videos'>
						{this.props.user.data.videos.map((elm, idx) => {
							if (idx === 0) {
								return <Video url={elm} key={idx} width='850px' />
							}
						})}
						<div className='secondary-videos'>
							<ul>
								{this.props.user.data.videos.map((elm, idx) => {
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
				</div>
			</div>
		)
	}
}

export default Player
