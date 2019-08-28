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
		this.getTests()
	}

	getTests = () => {
		this.services
			.getTestById(this.props.user.data._id)
			.then(response => this.setState({ tests: response.data }))
			.catch(err => console.log(err))
	}

	render() {
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
						{this.state.tests &&
							this.state.tests.map((elm, idx) => {
								if (elm.latlng) {
									return (
										<div className='text-box'>
											<div className='container'>
												<div className='row'>
													<div className='col-md-4'>
														<MapContainer lat={elm.latlng.lat} lng={elm.latlng.lng} />
													</div>
													<div className='col-md-4'>
														<p>{elm.title}</p>
														<p>{elm.location}</p>
														<p>{elm.date}</p>
														<p>{elm.requirements}</p>
													</div>
													<div className='col-md-4'>
														<button>Eliminar</button>
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
