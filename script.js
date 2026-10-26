const filmes = [];
let ordem = null;

const nomeInput = document.getElementById("nomeFilme");
const buscaInput = document.getElementById("busca");
const btnAdicionar = document.getElementById("btn-adicionar");
const btnAZ = document.getElementById("btn-az");
const btnZA = document.getElementById("btn-za");
const olLista = document.getElementById("lista");

const exibirFilmes = () => {
    const termo = buscaInput.value.trim().toUpperCase();


    let resultado = filmes.filter(filme => filme.toUpperCase().includes(termo));


    if (ordem === "az") resultado.sort((a, b) => a.localeCompare(b, "pt-BR"));
    if (ordem === "za") resultado.sort((a, b) => b.localeCompare(a, "pt-BR"));

    olLista.innerHTML = "";
    resultado.forEach(filme => {
        const li = document.createElement("li");
        li.textContent = filme.toUpperCase();
        olLista.appendChild(li);
    });
};

const adicionarFilme = () => {
    const nome = nomeInput.value.trim();
    if (nome === "") return;

    filmes.push(nome);
    nomeInput.value = "";
    nomeInput.focus();
    exibirFilmes();
};

const definirOrdem = novaOrdem => {
    ordem = novaOrdem;
    btnAZ.classList.toggle("selecionado", ordem === "az");
    btnZA.classList.toggle("selecionado", ordem === "za");
    exibirFilmes();
};

btnAdicionar.addEventListener("click", adicionarFilme);
nomeInput.addEventListener("keydown", evento => {
    if (evento.key === "Enter") adicionarFilme();
});

btnAZ.addEventListener("click", () => definirOrdem("az"));
btnZA.addEventListener("click", () => definirOrdem("za"));


buscaInput.addEventListener("input", exibirFilmes);

exibirFilmes();