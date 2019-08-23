import React, { Component } from 'react'
import Map from './Map'

const { google } = window
class MapContainer extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<Map center={{ lat: 40.392315, lng: -3.698527 }} height='300px' zoom={15} />
			</div>
		)
	}
}

export default MapContainer
