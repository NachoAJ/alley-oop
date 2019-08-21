const express = require('express')
const router = express.Router()

const User = require('../models/User.model')

router.get('/getAllPlayers', (req, res, next) => {
	User.find({ role: 'PLAYER' })
		.then(allPlayers => res.json(allPlayers))
		.catch(err => console.log('Ha habido un error', err))
})

module.exports = router
