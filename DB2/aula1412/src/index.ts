import express, { Request, Response, request, response } from "express";
import cors from 'cors';
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
app.use(cors());

const repository = new PrismaClient()
app.post('usuario/', async (req:Request, res:Response)=>{
    try{
    //entrada
    const {nome, idade, email, password,linkGithub }= req.body
//processo
!nome ||!idade ||!email ||!password ||!linkGithub&& res.status(400).send({
    ok:false,
    message:"dados inválidos"
})
const usuario = await repository.usuario.create(
    {
        data:{
            nome, idade, email, password,linkGithub 
        }
    }

)
return res.status(201).send({
    ok:true,
    message:"usuario criado com sucesso",
    data:nome
})
} catch (error:any) {
    return res.status(500).send({
        ok:true,
        message:error.toString(),
    })
}

//saida
}

)

app.listen(3333, () => {
    console.log("A API está rodando!");
});