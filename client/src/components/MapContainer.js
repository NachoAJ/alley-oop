import React, { Component } from 'react'
import Map from './Map'

const { google } = window
class MapContainer extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<Map center={{ lat: this.props.lat, lng: this.props.lng }} height='195.5px' zoom={15} />
			</div>
		)
	}
}

export default MapContainer
