const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')

cloudinary.config({
	cloud_name: process.env.cloudName,
	api_key: process.env.cloudKey,
	api_secret: process.env.cloudSecret
})

const storage = cloudinaryStorage({
	cloudinary: cloudinary,
	params: {
		folder: 'final-project',
		format: 'mp4',
		resource_type: 'video'
	},
	filename: function(req, res, cb) {
		cb(null, res.originalname)
	}
})

const uploader = multer({ storage })
module.exports = uploader
