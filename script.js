const CHAVE = 'api_key=c76b44768f5a56ea080472c268284709'
const URLTHEMOVDB = 'https://api.themoviedb.org/3'
const FILMESATUAIS = URLTHEMOVDB+'/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&'+CHAVE
const FILMESPOPULARES = URLTHEMOVDB+'/discover/movie?sort_by=popularity.desc&'+CHAVE

const resultPesquisa = URLTHEMOVDB + '/search/company?' + CHAVE
let mainFILME = document.getElementById('mainFILME')
let formulario = document.getElementById('formPesquisa')
let pesquisa = document.getElementById('pesquisa')

const urlimage = "https://image.tmdb.org/t/p/w500"

function pegarfilme(url){
    fetch(url).then(resposta => resposta.json()).then(dados=>{
        colocarnoHTML(dados.results);
    })
}
pegarfilme(FILMESATUAIS)

function colocarnoHTML(resposta){
    const divCarousel = document.getElementById("carouselFILMES")
    resposta.forEach(filme => {

        const {title, overview, release_date, poster_path, id} = filme
        
        const div = document.createElement("div")
        div.classList.add("carousel-item")
        
        div.innerHTML = `
        <center><img src="${urlimage+poster_path}" class="d-block poster"></center>
        <h6 class="post-title">
           <a href="${"https://www.themoviedb.org/movie/"+id}">${title}</a>
        </h6>
        <p class="post-top">Sinopse: ${overview}</p>
        <p class="post-top">Estréia em: ${release_date}</p>      
     
     ` 
     divCarousel.appendChild(div)
     const titulo = document.getElementById("titulo1")
     const sinopse = document.getElementById("sinopse1")
     const data = document.getElementById("data1")
     
   
     titulo.innerText = title
     sinopse.innerText = overview
     data.innerText = `Estréia em: ${release_date}`
    }); 
}
formulario.addEventListener('submit', (e) =>{
    e.preventDefault()

    const pesquisaValue = pesquisa.value
    if(pesquisaValue){
        pegarfilme(resultPesquisa+'&query=' + pesquisaValue)
    }
   
})


