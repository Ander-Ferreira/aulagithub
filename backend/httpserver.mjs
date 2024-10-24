const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res)=>{

    res.send('Api rodando')

})





app.listen(PORT, ()=>{
    console.log('Aplicação rodando na porta', PORT)
})

