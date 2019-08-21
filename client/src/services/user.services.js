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
}
