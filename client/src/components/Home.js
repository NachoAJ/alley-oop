import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PlayersList extends Component {
	constructor(props) {
		super(props)
	}

	handleOnChange = e => {
		this.props.searchPlayer(e.target.value)
	}

	render() {
		return (
			<>
				<select name='position' id='position' onChange={this.handleOnChange}>
					<option value='BASE'>Base</option>
					<option value='ESCOLTA'>Escolta</option>
					<option value='ALERO'>Alero</option>
					<option value='ALAPIVOT'>Ala-Pivot</option>
					<option value='PIVOT'>Pivot</option>
				</select>
				<input type='number' onChange={this.handleOnChange} placeholder='Edad' />
				<Link to='/players'>Ir</Link>
			</>
		)
	}
}

export default PlayersList
