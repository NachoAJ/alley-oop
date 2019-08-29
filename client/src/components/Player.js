import React, { Component } from 'react'
import Services from '../services/user.services'
import Video from '../components/Video'

class Player extends Component {
	constructor(props) {
		super(props)
		this.state = {
			videoUrl: ''
		}
		this.service = new Services()
	}

	handleFileUpload = e => {
		const uploadData = new FormData()
		uploadData.append('videoUrl', e.target.files[0])

		this.service
			.handleUpload(uploadData)
			.then(response => this.setState({ videoUrl: response.data.secure_url }))
			.catch(err => console.log(err))
	}

	handleFormSubmit = e => {
		e.preventDefault()
		this.service
			.videoUpload({ videoUrl: this.state.videoUrl, id: this.props.user._id })
			.then(this.props.updateState())
			.catch(err => console.log('error', err))
	}

	render() {
		return (
			<div className='container'>
				<h1>Soy un perfil de usuario Deportista</h1>
				<p>{this.props.user.username}</p>
				<p>{this.props.user.age}</p>
				<p>{this.props.user.position}</p>
				<div className='form-group'>
					<img src={this.props.user.imageUrl} alt='Foto de Perfil'></img>
					<input name='videoUrl' type='file' className='form-control' id='input-vid' onChange={this.handleFileUpload} />
				</div>
				{this.props.user.videos.map((elm, idx) => (
					<Video url={elm} key={idx} />
				))}
				<button onClick={this.handleFormSubmit}>Upload video</button>
			</div>
		)
	}
}

export default Player
