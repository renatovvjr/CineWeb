const CHAVE = 'api_key=c76b44768f5a56ea080472c268284709'
const URLTHEMOVDB = 'https://api.themoviedb.org/3'
const FILMESATUAIS = URLTHEMOVDB+'/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&'+CHAVE
const FILMESPOPULARES = URLTHEMOVDB+'/discover/movie?sort_by=popularity.desc'+CHAVE

function pegarfilme(url){
    fetch(url).then(resposta => resposta.json()).then(dados=> console.log(dados))
}
pegarfilme(FILMESATUAIS)

