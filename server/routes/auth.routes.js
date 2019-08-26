const express = require('express')
const authRoutes = express.Router()

const passport = require('passport')
const bcrypt = require('bcrypt')

const User = require('../models/User.model')
const Stats = require('../models/Stats.model')

authRoutes.post('/signup', (req, res, next) => {
	const { username, password, role, age, position } = req.body

	if (!username || !password) {
		res.status(400).json({ message: 'Provide username and password' })
		return
	}

	if (password.length < 2) {
		res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' })
		return
	}


	Stats.findOne({Name: username}, (err, foundStats) => {
		const stats = {...foundStats}

		console.log(stats)

		User.findOne({ username }, (err, foundUser) => {
			if (err) {
				res.status(500).json({ message: 'Username check went bad.' })
				return
			}
	
			if (foundUser) {
				res.status(400).json({ message: 'Username taken. Choose another one' })
			}
	
			const salt = bcrypt.genSaltSync(10)
			const hashPass = bcrypt.hashSync(password, salt)
	
			const newUser = new User({
				username: username,
				password: hashPass,
				role: role,
				age: age,
				position: position,
				stats: stats
			})
	
			newUser.save(err => {
				if (err) {
					res.status(400).json({ message: 'Saving user to database went wrong.' })
					return
				}
	
				req.login(newUser, err => {
					if (err) {
						res.status(500).json({ message: 'Login after signup went bad.' })
						return
					}
					res.status(200).json(newUser)
				})
			})
		})
	})
})

authRoutes.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, theUser, failureDetails) => {
		if (err) {
			res.status(500).json({ message: 'Something went wrong authenticating user' })
			return
		}
		if (!theUser) {
			res.status(401).json(failureDetails)
			return
		}
		req.login(theUser, err => {
			if (err) {
				res.status(500).json({ message: 'Session save went bad.' })
				return
			}
			res.status(200).json(theUser)
		})
	})(req, res, next)
})

authRoutes.post('/logout', (req, res, next) => {
	// req.logout() is defined by passport
	req.logout()
	res.status(200).json({ message: 'Log out success!' })
})

authRoutes.get('/loggedin', (req, res, next) => {
	// req.isAuthenticated() is defined by passport
	if (req.isAuthenticated()) {
		res.status(200).json(req.user)
		return
	}
	res.status(403).json({ message: 'Unauthorized' })
})

module.exports = authRoutes
