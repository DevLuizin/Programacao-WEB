function identificarFaixaEtaria() {
    const anoNascimento = parseInt(document.getElementById("anoNascimento").value);
    const anoAtual = new Date().getFullYear();

    if (isNaN(anoNascimento)) {
        window.alert("Por favor, insira um ano de nascimento válido.");
        return;
    }

    if (anoNascimento > anoAtual) {
        window.alert("O ano de nascimento não pode ser maior que o ano atual.");
        return;
    }

    const idade = anoAtual - anoNascimento;
    let faixaEtaria;

    if (idade  >= 0 && idade <= 17) {
        faixaEtaria = 'Criança / Adolescente';
    } else if (idade >= 18 && idade <= 64) {
        faixaEtaria = 'Adulto';
    } else {
        faixaEtaria = 'Idoso';
    }

    window.alert(`Você tem ${idade} anos. Faixa etária: ${faixaEtaria}`);
}