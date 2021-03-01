//Tabela do Brasileirão
var appElement = document.getElementById("app"); //app é a div pai

//1-Criar uma tabela
var tabelaElement = document.createElement('table');

//3-Criando as entradas:
var nomeElement = document.createElement("input"); 
nomeElement.setAttribute('id', 'nome');
nomeElement.setAttribute('class', 'meuinput');
nomeElement.setAttribute('type', 'text');
nomeElement.setAttribute('name', 'nome');
nomeElement.setAttribute('placeholder', 'Digite o nome do time');
var vitoriaElement = document.createElement("input"); 
vitoriaElement.setAttribute('id', 'vitoria');
vitoriaElement.setAttribute('class', 'meuinput');
vitoriaElement.setAttribute('type', 'number');
vitoriaElement.setAttribute('name', 'vitoria');
vitoriaElement.setAttribute('placeholder', 'Digite o número de vitórias');
var derrotaElement = document.createElement("input");
derrotaElement.setAttribute('id', 'derrota');
derrotaElement.setAttribute('class', 'meuinput');
derrotaElement.setAttribute('type', 'number');
derrotaElement.setAttribute('name', 'derrota');
derrotaElement.setAttribute('placeholder', 'Digite o número de derrotas');
var empateElement = document.createElement("input");
empateElement.setAttribute('id', 'empate');
empateElement.setAttribute('class', 'meuinput');
empateElement.setAttribute('type', 'number');
empateElement.setAttribute('name', 'empate');
empateElement.setAttribute('placeholder', 'Digite o número de empates');
var pontosElement = document.createElement("input");
pontosElement.setAttribute('id', 'pontos');
pontosElement.setAttribute('class', 'meuinput');
pontosElement.setAttribute('type', 'text');
pontosElement.setAttribute('name', 'pontos');
pontosElement.setAttribute('placeholder', 'Digite aqui o site do time');

//Criando os botões:
var btnElement = document.createElement("button");
btnElement.setAttribute('id', 'btnSalvar');
btnElement.setAttribute('class', 'meuinput');
var textBotao = document.createTextNode("Adicionar time"); 
btnElement.appendChild(textBotao);

//Colocando as entradas e os botões na div app
appElement.appendChild(nomeElement);
appElement.appendChild(vitoriaElement);
appElement.appendChild(derrotaElement);
appElement.appendChild(empateElement);
appElement.appendChild(pontosElement);
appElement.appendChild(btnElement);
appElement.appendChild(tabelaElement); //Adicionar a tabela na div principal.

//4-Criando a tabela:
var trElement = document.createElement("tr");
var thNomeElement = document.createElement("th");
var thVitoriaElement = document.createElement("th");
var thDerrotaElement = document.createElement("th");
var thEmpateElement = document.createElement("th");
var thPontosElement = document.createElement("th");
var thSiteElement = document.createElement("th");

trElement.appendChild(thNomeElement);
trElement.appendChild(thVitoriaElement);
trElement.appendChild(thDerrotaElement);
trElement.appendChild(thEmpateElement);
trElement.appendChild(thPontosElement);
trElement.appendChild(thSiteElement);
tabelaElement.appendChild(trElement);

thNomeElement.innerHTML = "Nome";
thVitoriaElement.innerHTML = "Vitorias";
thDerrotaElement.innerHTML = "Derrotas";
thEmpateElement.innerHTML = "Empates";
thPontosElement.innerHTML = "Pontos";
thSiteElement.innerHTML = "Site";

//Adicionado o item na tabela, usando o botão.

btnElement.onclick = function() {
    
var trElement = document.createElement("tr");

var tdNomeElement = document.createElement("td");
var tdVitoriaElement = document.createElement("td");
var tdDerrotaElement = document.createElement("td");
var tdEmpateElement = document.createElement("td");
var tdPontosElement = document.createElement("td");
var tdSiteElement = document.createElement("td");

trElement.appendChild(tdNomeElement);
trElement.appendChild(tdVitoriaElement);
trElement.appendChild(tdDerrotaElement);
trElement.appendChild(tdEmpateElement);
trElement.appendChild(tdPontosElement);
trElement.appendChild(tdSiteElement);
tabelaElement.appendChild(trElement);

tdNomeElement.innerHTML = nomeElement.value;
tdVitoriaElement.innerHTML = vitoriaElement.value;
tdDerrotaElement.innerHTML = derrotaElement.value;
tdEmpateElement.innerHTML = empateElement.value;
tdPontosElement.innerHTML = ((parseInt(vitoriaElement.value)*3) + parseInt(empateElement.value));
tdSiteElement.innerHTML = pontosElement.value;

nomeElement.value = "";
vitoriaElement.value = "";
derrotaElement.value = "";
empateElement.value = "";
pontosElement.value = "";

};

//tdElement.innerHTML = "<a href='http://www.palmeiras.com.br'>Palmeiras</a>";