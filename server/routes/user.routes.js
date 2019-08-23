const express = require('express')
const router = express.Router()

const User = require('../models/User.model')

router.get('/getAllPlayers', (req, res, next) => {
	User.find({ role: 'PLAYER' })
		.then(allPlayers => res.json(allPlayers))
		.catch(err => console.log('Ha habido un error', err))
})

router.post('/add-test', (req, res, next) => {
	console.log(req.body)
	User.findByIdAndUpdate(req.body.id, {
		$push: {
			tests: { title: req.body.title, date: req.body.date, location: req.body.location, requirements: req.body.requirements }
		}
	})
		.then(user => res.json(user))
		.catch(err => console.log('Error', err))
})

router.get('/get-test-id/:id', (req, res, next) => {
	User.findById(req.params.id)
		.then(user => res.json(user.tests))
		.catch(err => console.log('Error', err))
})

module.exports = router
