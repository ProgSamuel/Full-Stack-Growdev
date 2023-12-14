import express from 'express'
import { AlunoController } from './controllers/aluno.controller'

const app = express()
app.use(express.json())
const alunoController = new AlunoController()

//criar aluno
app.post('/aluno', alunoController.criarAluno)
app.get('/aluno/:id', alunoController.obterAluno)

app.listen(5500, ()=>{
    console.log("A api esta ok");
    
})