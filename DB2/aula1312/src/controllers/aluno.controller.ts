import { Request, Response } from "express";
import { Aluno } from "../models/aluno.model";
import repository from "../database/prisma.repository";

export class AlunoController {

    public async criarAluno(req: Request, res: Response) {
        try {
            // entrada
            const { nome, email, senha, idade } = req.body

            !nome || !email || !senha && res.status(400).send({
                ok: false,
                message: 'Os campos não foram informados corretamente'
            })

            //processamento

            const aluno = new Aluno(nome, email, senha, idade)

            const result = await repository.aluno.create({
                data: aluno
            })
            //saida
            return res.status(200).send({
                ok: true,
                message: 'Usuário cadastrado com sucesso',
                data: result,
            })
        }

        catch (error: any) {
            return res.status(500).send({
                ok: false,
                message: error.toString(),
            })
        }
    }

    // aluno/:id
    public async obterAluno(req: Request, res: Response) {
        try {
            //entrada
            const { id } = req.params
            //processamento
            const aluno = await repository.aluno.findFirst(
                {where: {
                    id,
                }
            })

            !aluno && res.status(404).send({
                ok:false,
                message:'Aluno não encontrado'
            })
            //retorno

            return res.status(200).send({
                ok: true,
                message: 'Usuário obtido com sucesso!',
                data: aluno
            })

        } catch (error: any) {
            return res.status(500).send({
                ok: false,
                message: error.toString(),
            })
        }
    }
}

export class obterAluno {

}
