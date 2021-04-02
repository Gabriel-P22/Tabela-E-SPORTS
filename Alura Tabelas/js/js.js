/*Declarando as variaveis pelo objeto*/ 
var Gabriel = {
    nome: "Gabriel",
    Vitorias: 2,
    Empates: 3,
    Derrotas: 1,
    Pontos: 7

}

var joao = {
    nome: "joao",
    Vitorias: 5,
    Empates: 4,
    Derrotas: 2,
    Pontos: 7
}

Gabriel.Pontos = calcularPontos(Gabriel)
joao.Pontos = calcularPontos(joao)



function calcularPontos(jogador){
   var Pontos = (jogador.Vitorias * 3) + jogador.Empates 
   return Pontos
   
}

var jogadores = [Gabriel, joao]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
    var html = ""
    for(var i = 0; i < jogadores.length; i++){
        html += "<td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].Vitorias + "</td>"
        html += "<td>" + jogadores[i].Empates + "</td>"
        html += "<td>" + jogadores[i].Derrotas + "</td>"
        html += "<td>" + jogadores[i].Pontos + "</td>"
        html += "<td><button onclick='adicionarVitoria(" + i  + ")'>Vitória</button></td>"
        html +="<td><button onclick='adicionarEmpate(" + i  + ")'>Empates</button></td>"
        html +="<td><button onclick='adicionarDerrota(" + i  + ")'>Derrota</button></td></tr>"
    
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
    var jogador = jogadores[i] 
    jogador.Vitorias++
    jogador.Pontos = calcularPontos(jogador)
    exibirJogadoresNaTela(jogadores)

}

function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.Empates++
    jogador.Pontos = calcularPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.Derrotas++
    exibirJogadoresNaTela(jogadores)
}