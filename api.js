/* API */

const nomeEmpresa = document.querySelector("#nome-empresa")
const valorAcao = document.querySelector("#valor-acao")
const btnAcao = document.querySelector("#btn-acao")

let principaisAcoes = ["PETR4", "VALE3", "ITUB4", "AZUL4", "ABEV3", "MGLU3", "B3SA3", "BBAS3", "WEGE3", "SUZB3", "CIEL3", "CMIG4", "CRFB3", "ELET3", "LREN3", "GGBR4", "RENT3", "JBSS3", "SBSP3", "TIMS3"]
let i = 0

async function atualizaAcoes(){

    if(i >= principaisAcoes.length){
        i = 0
    }

    try{
        let requisicao = await fetch(`https://brapi.dev/api/quote/${principaisAcoes[i]}?token=7g1Dbx889fg3Abths7KT5a`)
        let acao = await requisicao.json()

        nomeEmpresa.innerText = acao.results[0].longName 
        valorAcao.innerHTML =  `${acao.results[0].regularMarketPrice} BRL <i class="fa-solid fa-money-bill-transfer"></i>`
        i++
    }
    catch(error){
        console.log(error)
    }
}

btnAcao.addEventListener("click", atualizaAcoes)

/* CARROSSEL */

let count = 1
document.querySelector("#radio1").checked = true

setInterval(() => {
    count++;
    if(count > 4){
        count = 1
    }

    document.querySelector("#radio" + count).checked = true
}, 5000)