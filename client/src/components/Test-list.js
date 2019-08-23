import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MapContainer from './MapContainer'
import UserServices from '../services/user.services'

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
		return (
			<div>
				<h3>Pruebas de selección</h3>
				<Link to='/test/create'>Añadir +</Link>
				{this.state.tests &&
					this.state.tests.map((elm, idx) => {
						return (
							<>
								<MapContainer />
								<p>{elm.title}</p>
								<p>{elm.location}</p>
								<p>{elm.date}</p>
								<p>{elm.requirements}</p>
							</>
						)
					})}
			</div>
		)
	}
}

export default TestList
