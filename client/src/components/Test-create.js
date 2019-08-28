import React, { Component } from 'react'
import UserServices from '../services/user.services'
import Autocomplete from 'react-google-autocomplete'

class TestCreate extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			location: '',
			date: '',
			requirements: ''
		}
		this.userServices = new UserServices()
	}

	handleInputChange = e => {
		console.log(e.target.value)
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleFormSubmit = e => {
		e.preventDefault()
		const { title, location, date, requirements } = this.state
		const id = this.props.user.data._id

		this.userServices
			.getLocation(location)
			.then(response => {
				const latlng = response.data
				this.userServices
					.addTest({ title, location, date, requirements, id, latlng })
					.then(x => {
						// console.log(x.data)
						// this.props.updateLoggedInUser(x.data)
						this.setState({
							title: '',
							location: '',
							date: '',
							requirements: ''
						})
						this.props.history.push('/test')
					})
					.catch(err => console.log(err.response.data.message))
			})
			.catch(err => console.log('Ha habido un error', err))

		this.userServices
			.addTest({ title, location, date, requirements, id })
			.then(x => {
				this.setState({
					title: '',
					location: '',
					date: '',
					requirements: ''
				})
				this.props.history.push('/test')
			})
			.catch(err => console.log(err.response.data.message))
	}

	render() {
		return (
			<>
				<h1>Nueva prueba</h1>
				<form onSubmit={this.handleFormSubmit}>
					<label htmlFor='title'>Título:</label>
					<input name='title' type='text' id='title' value={this.state.title} onChange={this.handleInputChange} /> <br />
					<label htmlFor='location'>Ubicación:</label>
					<input name='location' type='text' id='location' value={this.state.location} onChange={this.handleInputChange} />
					<br />
					<label htmlFor='date'>Fecha:</label>
					<input name='date' type='date' id='date' value={this.state.date} onChange={this.handleInputChange} />
					<br />
					<label htmlFor='requirements'>Requisitos:</label>
					<textarea name='requirements' id='requirements' value={this.state.requirements} onChange={this.handleInputChange} />
					<br />
					<input type='submit' value='Registrar' />
				</form>
			</>
		)
	}
}

export default TestCreate
