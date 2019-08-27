const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		username: { type: String, required: true },
		email: String,
		password: { type: String, required: true },
		role: {
			type: String,
			enum: ['PLAYER', 'COACH'],
			default: 'PLAYER'
		},
		videos: [],
		tests: [],
		age: Number,
		position: String,
		stats: {},
		savePlayers: [],
		imageUrl: String
	},
	{ timestamps: true }
)

const User = mongoose.model('User', userSchema)
module.exports = User
