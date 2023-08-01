//  ROTA CRIAR USUÁRIO
app.post("/cadastrar-usuario", (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const novousuario = { nome, email, senha, idUsuario, recados };
  
    if (nome === undefined || email === undefined || senha === undefined) {
      res.status(401);
      res.send(`Insira um dado válido. Veja o exemplo abaixo:
  
                { 
                  "nome":"exemplo", 
                  "email": "exemplo@email.com",
                  "senha": "senha"
                }`);
    }
  
    const emailEncontrado = usuariosCadastrados.find(
      (usuario) => usuario.email === email
    );
  
    if (emailEncontrado) {
      res.status(404).send(`O e-mail: ${novousuario.email} já está cadastrado`);
    } else {
      usuariosCadastrados.push(novousuario);
      idUsuario++;
      res.send(
        `Usuário cadastrado com sucesso! 
        
        O seu idUsuario é: ${novousuario.idUsuario}`
      );
    }
  });
  
  //ROTA LOGIN
  app.get("/login/", (req, res) => {
    const { emailDoInput, senhaDoInput } = req.body;
    const encontrarUsuario = usuariosCadastrados.find((usuario) => usuario.email=== emailDoInput);
    
  
    if (emailDoInput === undefined || senhaDoInput === undefined) {
      res.status(404).send(`Tentativa inválida!
        Forneça o id do usuário após a rota e no body(json) envie o email e a senha:
  
        {
          "email": "email@example.com",
          "senha": "123"
        }
      `);
    } else {
      if(encontrarUsuario){
          if (encontrarUsuario.email === emailDoInput &&
              encontrarUsuario.senha === senhaDoInput) {
                  userlogged = encontrarUsuario.email;
                  return res.send("Login efetuado com sucesso");
          } else {
              return res
                .status(404)
                .send(`ERRO: Verifique as informações e tente novamente`);
            }
      } else {
          res.status(401).send(`Usuário não encontrado`);
        }
    }
  });




 
 