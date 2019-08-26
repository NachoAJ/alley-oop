import React, { Component } from 'react'
import Map from './Map'

const { google } = window
class MapContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log(this.props)
		return (
			<div>
				<Map center={{ lat: this.props.lat, lng: this.props.lng }} height='300px' zoom={15} />
			</div>
		)
	}
}

export default MapContainer
