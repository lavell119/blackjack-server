const express=require('express')

const app=express()

//register user engine
app.set('view engine', 'ejs')

app.listen(3000, ()=>console.log('express app listening on port 3000'))

app.get('/', (req, res)=>{
    res.render('index')
    console.log('hello')
})

app.get('/about', (req, res)=>{
    res.sendFile('views/about.html', { root: __dirname})
})

app.use('/', (req, res)=>{
    res.sendFile('views/404.html', { root: __dirname})
})