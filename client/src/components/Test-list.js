import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TestList extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h3>Pruebas de selección</h3>
				<Link to='/test/create'>Añadir +</Link>
			</div>
		)
	}
}

export default TestList
