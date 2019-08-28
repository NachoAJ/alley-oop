require('dotenv').config()
require('./configs/mongoose.config')
require('./configs/passport.config')

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')

const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const cors = require('cors')

const session = require('express-session')
const passport = require('passport')

const app_name = require('./package.json').name
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`)

const app = express()

// Middleware Setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Express View engine setup

app.use(
	require('node-sass-middleware')({
		src: path.join(__dirname, 'public'),
		dest: path.join(__dirname, 'public'),
		sourceMap: true
	})
)

// CORS middleware
const whitelist = ['http://localhost:3000']
const corsOptions = {
	origin: (origin, cb) => {
		const originIsWhitelisted = whitelist.includes(origin)
		cb(null, originIsWhitelisted)
	},
	credentials: true
}
app.use(cors(corsOptions))

// Configuración de sesión
app.use(
	session({
		secret: 'Whatever',
		resave: true,
		saveUninitialized: true
	})
)
app.use(passport.initialize())
app.use(passport.session())

app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator'

app.use('/api', require('./routes/auth.routes'))
app.use('/api', require('./routes/user.routes'))
app.use('/api', require('./routes/file-upload.routes'))

app.use((req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})

module.exports = app
