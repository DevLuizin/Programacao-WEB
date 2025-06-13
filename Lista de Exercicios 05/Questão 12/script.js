let paises = [
    "Argentina",
    "Brasil",
    "Chile",
    "Colombia",
    "Equador",
    "Guiana",
    "Paraguai",
    "Peru",
    "Suriname",
    "Uruguai",
    "Venezuela"
]

function loadOpcoesPaises() {
    let campoSelecao = document.getElementById("pais");

    let opcaoDefault = document.createElement("option");
    opcaoDefault.setAttribute("value", -1);
    opcaoDefault.append(document.createTextNode(""));

    campoSelecao.appendChild(opcaoDefault);

    for (let i = 0; i < paises.length; i++) {
        let opcaoPais = document.createElement("option");
        opcaoPais.setAttribute("value", i);
        opcaoPais.append(document.createTextNode(paises[i]));

        campoSelecao.appendChild(opcaoPais);
    }
}

function loadBandeira() {
    let pais = document.getElementById("pais").value;

    if (pais != -1) {
        let nomePais = paises[parseInt(pais)].toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "");

        let imagem = document.querySelector("img");

        if (!imagem) {
            imagem = document.createElement("img");
            document.body.appendChild(imagem);
        }

        imagem.setAttribute("src", `imagens/${nomePais}.png`);
    }
}

let campoSelecao = document.querySelector("select");

campoSelecao.addEventListener("change", loadBandeira);
window.addEventListener("load", loadOpcoesPaises);