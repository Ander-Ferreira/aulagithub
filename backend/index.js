const express = require('express')
const app = express()
const PORT = 3000




const contatos = require('./data/contatos.js')

app.use(express.json())

app.get('/contatos', (req, res)=>{

    res.status(200).json({
        error: false,
        contatos 
    })
})

app.get('/contatos/:id', (req, res)=>{
    const id = req.params.id
    const genero = req.query.genero
    const contato = contatos.find((contato) => contato.id === id)
    

    /*if(!id){
       return res.status(404).json({
            error: false,
            mensagem: "Id não encontrado!"
        })

    }*/

    if(!contato){
        return res.status(404).json({
            error: true,
            mensagem:"Contato não encontrado!"
        })
    
   

    
    }

    return res.status(200).json({contato})



    
})


app.post('/contatos', (res, req)=>{
    const contato = req.body
    
    const {nome, genero, email, telefone} = req.body

    if(nome || genero || email || telefone){

        res.status(400).json({
            error: true,
            mensagem: "Entrada inválida!"
        })

    }


    res.json({
        contato
    })
})





app.listen(PORT, ()=>{
    console.log('Aplicação rodando na porta', PORT)
})


//Docker extension pack

