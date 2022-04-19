import express from "express";


const app = express()
app.use(express.static('front'))
app.use('/css',express.static(__dirname+'/front/css'))
app.use('/images',express.static(__dirname+'/front/images'))
app.use('/js',express.static(__dirname+'/front/js'))

app.set('front','./front')
app.set('view engine','ejs')

