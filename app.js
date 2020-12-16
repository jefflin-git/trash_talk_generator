// Include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./trashTalkGen.js')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//create ifEquals 
handlebars.registerHelper('ifEquals', function (job, selectedJob, options) {
  return (job === selectedJob) ? options.fn(this) : options.inverse(this)
})

// setting static files
app.use(express.static('public'))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const trashTalk = generateTrashTalk(req.body)
  res.render('index', { trashTalk: trashTalk, data: req.body })

})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port} at ${Date()}.`)
})