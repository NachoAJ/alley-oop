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
			<div className='home'>
				<div className='container'>
					<div className='row'>
						<h1>
							Encuentra los <br></br>mejores jugadores
						</h1>
					</div>
					<div className='row align-items-center box'>
						<div className='col-md-4'>
							<label>Posición</label>
							<br></br>
							<select name='position' id='position' onChange={this.handleOnChange}>
								<option value='BASE'>Base</option>
								<option value='ESCOLTA'>Escolta</option>
								<option value='ALERO'>Alero</option>
								<option value='ALAPIVOT'>Ala-Pivot</option>
								<option value='PIVOT'>Pivot</option>
							</select>
						</div>
						<div className='col-md-4'>
							<label>Edad</label>
							<br></br>
							<input type='number' onChange={this.handleOnChange} placeholder='16' />
						</div>
						<div className='col-md-4'>
							<br></br>
							<Link to='/players' className='button'>
								Buscar
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PlayersList
