import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Home.css'
import foto from '../images/Foto_home_div_entrenador.png'
import foto2 from '../images/foto_home_div_tech.png'
import foto3 from '../images/Foto_home_div_jugador.png'

class PlayersList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			age: '',
			position: 'BASE'
		}
	}

	handleOnChange = e => {
		this.props.searchPlayer(e.target.value)
		const { name, value } = e.target
		this.setState({ [name]: value })
	}

	render() {
		return (
			<>
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
								<input type='number' name='age' onChange={this.handleOnChange} placeholder='16' />
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
				<section className='search-players'>
					<div className='container'>
						<div className='row '>
							<div className='col-md-1'></div>

							<div className='col-md-5'>
								<h2>Busca a los mejores jugadores</h2>
								<br></br>
								<br></br>
								<p>
									Encuentra a los mejores jugadores de High School, filtra y entra en sus perfiles para ver su estadística
									verificada gracias a nuestro algoritmo. Contáctalos desde la plataforma.{' '}
								</p>
								<button>Saber más</button>
							</div>

							<div className='col-md-4'>
								<img src={foto} className='img-footer'></img>
							</div>
							<div className='col-md-2'></div>
						</div>
					</div>
				</section>
				<section className='web-scrapping'>
					<div className='container'>
						<div className='row '>
							<div className='col-md-1'></div>

							<div className='col-md-6'>
								<h2>Web scraping aplicado al baloncesto</h2>
								<br></br>
								<br></br>
								<p>
									Estadísticas extraídas de las mejores bases de datos del sector, para tener la máxima fiabilidad a la hora de
									analizar los datos de los jugadores.
								</p>
								<button>Saber más</button>
							</div>

							<div className='col-md-3'>
								<img src={foto2} className='img-footer'></img>
							</div>
							<div className='col-md-2'></div>
						</div>
					</div>
				</section>
				<section className='ncaa'>
					<div className='container'>
						<div className='row '>
							<div className='col-md-1'></div>

							<div className='col-md-3'>
								<img src={foto3} className='img-footer'></img>
							</div>
							<div className='col-md-1'></div>
							<div className='col-md-6'>
								<h2>Consigue una beca deportiva en la NCAA</h2>
								<br></br>
								<br></br>
								<p>
									Sube tus videos, publica tus partidos y permite que los mejores entrenadores de universidad te vean. Consigue
									una beca deportiva para estudiar en la universidad que elijas.
								</p>
								<button>Saber más</button>
							</div>
							<div className='col-md-1'></div>
						</div>
					</div>
				</section>
			</>
		)
	}
}

export default PlayersList
