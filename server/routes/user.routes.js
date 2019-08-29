const express = require('express')
const router = express.Router()
const axios = require('axios')
const nodemailer = require('nodemailer')

const User = require('../models/User.model')

router.get('/getAllPlayers', (req, res, next) => {
	User.find({ role: 'PLAYER' })
		.then(allPlayers => res.json(allPlayers))
		.catch(err => console.log('Ha habido un error', err))
})

router.post('/add-test', (req, res, next) => {
	User.findByIdAndUpdate(req.body.id, {
		$push: {
			tests: {
				title: req.body.title,
				date: req.body.date,
				location: req.body.location,
				requirements: req.body.requirements,
				latlng: req.body.latlng
			}
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

router.get('/get-location/:loc', (req, res, next) => {
	axios
		.get(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.loc}&key=AIzaSyAQn79ofulVcJxbKOb1tGmPG6GuA7bPojM`
		)
		.then(response => res.json(response.data.results[0].geometry.location))
		.catch(err => console.log(err))
})

router.post('/save-player', (req, res, next) => {
	User.findByIdAndUpdate(
		req.body.userId,
		{
			$push: {
				savePlayers: {
					player: req.body.player
				}
			}
		},
		{ new: true }
	)
		.then(user => res.json(user))
		.catch(err => console.log('Error', err))
})

router.post('/send-email', (req, res, next) => {
	let { email, subject, message } = req.body
	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'alleyoopiron@gmail.com',
			pass: 'aeootlc6991$'
		}
	})
	transporter
		.sendMail({
			from: '"Alley-Oop Team" <alleyoopiron@gmail.com>',
			to: email,
			subject: subject,
			text: message,
			html: `Hola!! <br><br> Desde el equipo de Alley-Oop te remitimos este mensaje: <br>	<b>${message}</b><br><br> Gracias por contar con nosotros!`
		})
		.then(info => res.json(info))
		.catch(error => console.log(error))
})

router.post('/update-player', (req, res, next) => {
	User.findById(req.body.id)
		.then(user => res.json(user))
		.catch(err => console.log('Error', err))
})

module.exports = router
