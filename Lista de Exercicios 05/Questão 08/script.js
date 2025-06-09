let nomes = [];
let grausOb = [];

const descGrauOb = [
  "Magreza",
  "Saudável",
  "Sobrepeso",
  "Obesidade Leve",
  "Obesidade Severa",
  "Obesidade Mórbida"
];

function processarDados() {
  const nomeField = document.getElementById('nome');
  const pesoField = document.getElementById('peso');
  const alturaField = document.getElementById('altura');

  const nome = nomeField.value.trim();
  const peso  = parseFloat(pesoField.value.replace(',', '.'));
  const altura= parseFloat(alturaField.value.replace(',', '.'));

  if (!nome) {
    alert("Nome não informado!");
    return;
  }
  if (isNaN(peso) || peso <= 0) {
    alert("Peso não informado ou inválido!");
    return;
  }
  if (isNaN(altura) || altura <= 0) {
    alert("Altura não informada ou inválida!");
    return;
  }

  const imc = peso / (altura * altura);
  let grauOb;
  if (imc < 18.5)       grauOb = 0;
  else if (imc < 25)    grauOb = 1;
  else if (imc < 30)    grauOb = 2;
  else if (imc < 35)    grauOb = 3;
  else if (imc < 40)    grauOb = 4;
  else                  grauOb = 5;

  nomes.push(nome);
  grausOb.push(grauOb);

  alert(`Grau de Obesidade de ${nome}: ${descGrauOb[grauOb]}`);

  nomeField.value = '';
  pesoField.value = '';
  alturaField.value = '';
  nomeField.focus();
}

function listarIndividuos() {
  const select = document.getElementById('grauObesidade');
  let grauOb = parseInt(select.value, 10);

  if (grauOb === -1) {
    alert("Grau de obesidade não selecionado!");
    return;
  }

  let nomesGrauOb = '';
  for (let i = 0; i < grausOb.length; i++) {
    if (grausOb[i] === grauOb) {
      nomesGrauOb += (nomesGrauOb ? ', ' : '') + nomes[i].toUpperCase();
    }
  }

  const p = document.getElementById('pNomes');
  if (nomesGrauOb === '') {
    p.innerText = 'Não há indivíduos com o grau de obesidade selecionado.';
  } else {
    p.innerText = `Indivíduos nesta condição: ${nomesGrauOb}`;
  }
}

document.getElementById('btn-processar')
        .addEventListener('click', processarDados);
document.getElementById('btn-listar')
        .addEventListener('click', listarIndividuos);
