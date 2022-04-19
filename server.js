import express from 'express'
import path from 'path'
const __dirname = path.resolve()


const port=3000//process.env.PORT || 3000
const app = express()
app.use(express.static('front'))
app.use('/css',express.static(__dirname+'/front/css'))
app.use('/images',express.static(__dirname+'/front/images'))
app.use('/js',express.static(__dirname+'/front/js'))

app.set('front','./front')
app.set('view engine','ejs')




app.get('/',(req,res)=>
{
    res.render(__dirname+'/front/index.ejs')

})
app.get('/About',(req,res)=>
{
    res.render(__dirname+'/front/About.ejs')

})
app.get('/Contact',(req,res)=>
{
    res.render(__dirname+'/front/Contact.ejs')

})
app.get('/Prices',(req,res)=>
{
    res.render(__dirname+'/front/prices.ejs')

})
app.listen(port,()=>{
    console.log(port);
})


