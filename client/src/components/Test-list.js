import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MapContainer from './MapContainer'
import UserServices from '../services/user.services'
import '../Test-list.css'

class TestList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tests: ''
		}
		this.services = new UserServices()
	}

	componentDidMount() {
		this.props.getTests()
	}

	// getTests = () => {
	// 	this.services
	// 		.getTestById(this.props.user.data._id)
	// 		.then(response => this.setState({ tests: response.data }))
	// 		.catch(err => console.log(err))
	// }

	render() {
		console.log('Soy el render')
		if (this.props.user.data.role === 'COACH') {
			return (
				<div className='test-list'>
					<div className='container'>
						<div className='margin'>
							<Link to='/test/create' className='add-btn'>
								+ Añadir
							</Link>
						</div>
						<h3>Pruebas de selección</h3>
						{this.props.tests &&
							this.props.tests.map((elm, idx) => {
								if (elm.latlng) {
									return (
										<div className='text-box'>
											<div className='container'>
												<div className='row align-items-center'>
													<div className='col-md-4 no-padding'>
														<MapContainer className='map' lat={elm.latlng.lat} lng={elm.latlng.lng} />
													</div>
													<div className='col-md-4'>
														<h2>{elm.title}</h2>
														<p>
															<i class='fas fa-map-marker-alt'></i> {elm.location}
															{'  '}
															<i class='fas fa-calendar-day'></i> {elm.date}
														</p>

														<p>Requisitos: {elm.requirements}</p>
													</div>
													<div className='col-md-4'>
														<button className='delete-btn'>Eliminar</button>
													</div>
												</div>
											</div>
										</div>
									)
								}
							})}
						<div />
					</div>
				</div>
			)
		} else return <h2>En construccion</h2>
	}
}

export default TestList
