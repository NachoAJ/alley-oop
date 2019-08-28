const mongoose = require('mongoose')
const Schema = mongoose.Schema

const statsSchema = new Schema(
	{
		Name: String,
		Team: String,
		Rank: String,
		Pos: String,
		Gp: String,
		Pts: String,
		Ppg: String,
		Fgm: String,
		Fga: String,
		Fgpct: String,
		ThreePM: String,
		ThreePPCT: String,
		Ftm: String,
		Ftpct: String
	},
	{ timestamps: true }
)

const Stats = mongoose.model('Stats', statsSchema)
module.exports = Stats
