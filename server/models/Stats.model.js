const mongoose = require('mongoose')
const Schema = mongoose.Schema

const statsSchema = new Schema(
	{
		Name: String,
		Team: String,
		Rank: String,
		Pos: String,
		GP: String,
		Pts: String,
		PPG: String,
		FGM: String,
		FGA: String,
		FGPCT: String,
		'3PM': String,
		'3PPCT': String,
		FTM: String,
		FTPCT: String
	},
	{ timestamps: true }
)

const Stats = mongoose.model('Stats', statsSchema)
module.exports = Stats
