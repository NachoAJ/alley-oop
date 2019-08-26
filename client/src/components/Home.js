import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Home.css'

class PlayersList extends Component {
	constructor(props) {
		super(props)
	}

	handleOnChange = e => {
		this.props.searchPlayer(e.target.value)
	}

	render() {
		return (
			<div className='container home'>
				<div className='row'>
					<h1>Encuentra los mejores jugadores</h1>
				</div>
				<div className='row bg-white align-items-end'>
					<div className='col-md-4'>
						<p>Posición</p>
						<select name='position' id='position' onChange={this.handleOnChange}>
							<option value='BASE'>Base</option>
							<option value='ESCOLTA'>Escolta</option>
							<option value='ALERO'>Alero</option>
							<option value='ALAPIVOT'>Ala-Pivot</option>
							<option value='PIVOT'>Pivot</option>
						</select>
					</div>
					<div className='col-md-4'>
						<p>Edad</p>
						<input type='number' onChange={this.handleOnChange} placeholder='16' />
					</div>
					<div className='col-md-4'>
						<Link to='/players' className='button'>
							Buscar
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default PlayersList
