const express=require('express')

const app=express()

app.listen(3000, ()=>console.log('express app listening on port 3000'))

app.get('/', (req, res)=>{
    res.send('Hi guys!!!')
})
