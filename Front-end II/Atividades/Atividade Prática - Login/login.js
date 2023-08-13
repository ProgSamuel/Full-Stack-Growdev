const login = document.getElementById("formularioLogin");

function loginUser() {
  login.addEventListener("submit", async (event) => {
    event.preventDefault();

    console.log('entrou em login');
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const res = await axios.post("https://api-recados-fnzo.onrender.com/login/", {
        email: email,
      senha: password,
      });

      setTimeout(function () {
        const usuarioALogar = res.data.id_do_usuario;
        console.log(usuarioALogar);
        localStorage.setItem("userId", JSON.stringify(usuarioALogar));

        window.location.href = "./recados.html";
      }, 1500);
    } catch (err) {
      console.log(err.res.status);
    }
  });
}

loginUser();
