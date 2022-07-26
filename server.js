const express = require('express')
const app = express()
const path = require('path')

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
const brand = ['Ford','Jeep','Maruti','Hyundai','Chevrolet']
const car = [{name:'Ford',model:'Ikon'},{name:'Jeep',model:'Compass'},{name:'Hyundai',model:'i20'}]

app.get('/',(req,res)=>{
    res.render('base')
})

app.get('/list',(req,res)=>{
    res.render('list',{title:brand})
})

app.get('/card',(req,res)=>{
    res.render('card',{title:brand})
})

app.get('/table',(req,res)=>{
    res.render('table',{title:car})
})

app.listen(3000,()=>{
    console.log("Working fine");
})