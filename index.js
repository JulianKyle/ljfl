var choo = require('choo')
var html = require('choo/html')
var css = require('sheetify')

var store = require('./app/store')

var Layout = require('./app/layout')

var Polling = require('./app/page/polling')
var Weight = require('./app/page/weight')
var Record = require('./app/page/record')
var Wecord = require('./app/page/Wecord')

css('tachyons')

css('./app/style/animate.scss')
css('./app/style/icon.scss')
css('./app/style/index.scss')

var app = choo()

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
}

app.route('/polling', Layout(Polling))
app.route('/record', Layout(Record))
app.route('/wecord', Layout(Wecord))
app.route('/weight', Layout(Weight))

// app.use(store)
app.mount('body')
