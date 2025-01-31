let btn = document.querySelector('#btnConsulta'),
  cidade = document.getElementById('cidade'),
  estado = document.getElementById('estado'),
  logradouro = document.getElementById('logradouro'),
  pais = document.getElementById('pais'),
  bairro = document.getElementById('bairro'),
  sigla = document.getElementById('sigla'),
  InformaCep_h1 = document.getElementById("tituloResult");



let divCotainerResultado = document.querySelector(".containerResultado"),
  divContainerInfo = document.querySelector(".containerInfo");


btn.addEventListener("click", async () => {

  let cep = document.querySelector("#cep").value;

  if (cep.length < 8 || isNaN(cep)) {

    alert("Porfavor, coleque um CEP valido!!")

  }


  const URL = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
  const obj = await URL.json();
  let casoCepNaoEncontrado = obj['erro'];

  if (casoCepNaoEncontrado == "true") {
    alert("CEP NÃO ENCONTRADO!!")

  } else {
    cidade.innerText = obj['localidade'];
    sigla.innerText = obj['uf'];
    bairro.innerText = obj['bairro'];
    estado.innerText = obj['estado'];
    pais.innerText = "Brasil";
    logradouro.innerText = obj['logradouro'];
    InformaCep_h1.innerText = 'Dados sobre o CEP ' + cep;
  }

  divCotainerResultado.style.display = "flex";
  divContainerInfo.style.display = 'flex';



})







