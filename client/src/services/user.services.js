import axios from 'axios'

export default class Services {
	constructor() {
		this.service = axios.create({
			baseURL: 'http://localhost:5000/api/',
			withCredentials: true
		})
	}

	getPlayers = () => this.service.get('getAllPlayers')
	handleUpload = theFile => this.service.post('upload', theFile)
	videoUpload = theVideo => this.service.post('video-upload', theVideo)
	addTest = theTest => this.service.post('add-test', theTest)
	getTestById = theId => this.service.get(`get-test-id/${theId}`)
	getLocation = theLocation => this.service.get(`get-location/${theLocation}`)
}
