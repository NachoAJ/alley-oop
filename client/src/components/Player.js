import React, { Component } from 'react'
import Services from '../services/user.services'

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

	render() {
		return (
			<div className='container'>
				<h1>Soy un perfil de usuario Deportista</h1>
				<p>{this.props.user.username}</p>
				<div className='form-group'>
					<label htmlFor='input-vid'>URL imagen</label>
					<input name='videoUrl' type='file' className='form-control' id='input-vid' onChange={this.handleFileUpload} />
				</div>
			</div>
		)
	}
}

export default Player
