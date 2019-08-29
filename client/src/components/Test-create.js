import React, { Component } from 'react'
import UserServices from '../services/user.services'
import Autocomplete from 'react-google-autocomplete'
import '../Test-create.css'

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
			<div className='test-create'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-md-8'>
							<h2>Crea pruebas de selección y encuentra candidatos</h2>
						</div>
						<div className='col-md-4'>
							<div className='box'>
								<h3>Publica tu prueba</h3>
								<form onSubmit={this.handleFormSubmit}>
									<label htmlFor='title'>Título:</label>
									<br></br>
									<input
										className='input'
										placeholder='Pruebas Stanford'
										name='title'
										type='text'
										id='title'
										value={this.state.title}
										onChange={this.handleInputChange}
									/>{' '}
									<br />
									<label htmlFor='location'>Ubicación:</label>
									<br></br>
									<input
										placeholder='Stanford University'
										className='input'
										name='location'
										type='text'
										id='location'
										value={this.state.location}
										onChange={this.handleInputChange}
									/>
									<br />
									<label htmlFor='date'>Fecha:</label>
									<br></br>
									<input
										className='input'
										name='date'
										type='date'
										id='date'
										value={this.state.date}
										onChange={this.handleInputChange}
									/>
									<br />
									<label htmlFor='requirements'>Requisitos:</label>
									<br></br>
									<textarea
										className='input'
										name='requirements'
										id='requirements'
										value={this.state.requirements}
										onChange={this.handleInputChange}
									/>
									<br />
									<button className='btn'>Publicar</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default TestCreate
