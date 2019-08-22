const express = require('express')
const router = express.Router()
const User = require('../models/User.model')

const uploader = require('../configs/cloudinary.config')

router.post('/upload', uploader.single('videoUrl'), (req, res, next) => {
	if (!req.file) {
		next(new Error('No file uploaded!'))
		return
	}

	res.json({ secure_url: req.file.secure_url })
})

router.post('/video-upload', (req, res, next) => {
	User.findByIdAndUpdate(req.body.id, { $push: { videos: req.body.videoUrl } })
		.then(() => console.log('Video añadido'))
		.catch(err => console.log('Error', err))
})

module.exports = router
