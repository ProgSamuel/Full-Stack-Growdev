const apiUrl = "https://rickandmortyapi.com/api/";
// -----------------------------------------------------------------------------------------------------------------------------------------------------
const campoBusca = document.getElementById("campoBusca");
const resultado = document.getElementById("resultado");
const opcoesBusca = document.getElementById("opcoesBusca");
// -----------------------------------------------------------------------------------------------------------------------------------------------------
const nper = document.getElementById('nper')
const nloc = document.getElementById('nloc')
const nep = document.getElementById('nep')


axios.get(apiUrl + "character")
    .then(response => {
        nper.innerHTML=`${response.data.info.count}`
    })
    .catch(error => {
        console.error("Erro ao obter quantidade de personagens:", error);
    });

axios.get(apiUrl + "location")
    .then(response => {
        nloc.innerHTML = `${response.data.info.count}`
    })
    .catch(error => {
        console.error("Erro ao obter quantidade de localizações:", error);
    });

axios.get(apiUrl + "episode")
    .then(response => {
        nep.innerHTML = `${response.data.info.count}`
    })
    .catch(error => {
        console.error("Erro ao obter quantidade de episódios:", error);
    });


// -----------------------------------------------------------------------------------------------------------------------------------------------------
