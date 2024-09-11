import 'dotenv/config'
import express from 'express'
import rotas from './rotas'

const app = express()
const porta = process.env.PORT


app.use(express.json())

app.use(rotas)
app.get('/', (req, res) => {
    return res.json('Tudo Certo!')
})


app.listen(porta, () =>{
    console.log(`Servidor inicializado na porta ${porta}`)
})

// TDD -> test driver development -> Desenvolvimento Guiado por Testes
// Modelo Link