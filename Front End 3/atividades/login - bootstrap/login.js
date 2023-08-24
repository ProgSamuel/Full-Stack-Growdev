const formularioLogin = document.getElementById('formularioLogin');
const retorno = document.getElementById('retorno');
const button = document.querySelector('#envio');

formularioLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('chegou em login');

    const email = formularioLogin[0].value; 
    const password = formularioLogin[1].value; 

    // Validar campos
    if (!email || !password) {
        console.log('Por favor, preencha todos os campos.');
        return;
    }

    button.innerHTML = ` Loading...  <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>`;
    button.disabled = true;

    const requestData = {
        email: email,
        senha: password,
    };

    axios.post("https://api-recados-fnzo.onrender.com/login/", requestData)
        .then((res) => {
            button.innerHTML = `Submit`
            button.disabled = false;
            const usuarioALogar = res.data.id_do_usuario;
            console.log(res);
            console.log(res.status);
           return retorno.innerHTML = `<div class="alert alert-success mt-2" role="alert"> Login efetuado com sucesso! </div>`

        })
        .catch((err) => {
            button.innerHTML = `Submit`
            button.disabled = false;
            console.log(err.response.status);
            return retorno.innerHTML = `<div class="alert alert-danger mt-2" role="alert"> A simple danger alert—check it out! </div>`
        });
});
