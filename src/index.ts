import 'dotenv/config'
import express from 'express'

const app = express()
const porta = process.env.PORT


app.use(express.json)
app.get('/', (req, res) => {
    return res.json('Tudo Certo!')
})


app.listen(porta, () =>{
    console.log(`Servidor inicializado na porta ${porta}`)
})