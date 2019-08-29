import axios from 'axios'

export default class Services {
	constructor() {
		this.service = axios.create({
			baseURL: `${process.env.REACT_APP_URL}`,
			withCredentials: true
		})
	}

	getPlayers = () => this.service.get('getAllPlayers')
	handleUpload = theFile => this.service.post('upload', theFile)
	videoUpload = theVideo => this.service.post('video-upload', theVideo)
	addTest = theTest => this.service.post('add-test', theTest)
	getTestById = theId => this.service.get(`get-test-id/${theId}`)
	getLocation = theLocation => this.service.get(`get-location/${theLocation}`)
	savePlayer = thePlayer => this.service.post('save-player', thePlayer)
	sendEmail = theMail => this.service.post('send-email', theMail)
	updatePlayer = theId => this.service.post('update-player', theId)
}
