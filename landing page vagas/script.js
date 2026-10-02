```javascript
const formulario = document.getElementById("vagaForm");

const tabela = document.getElementById("tabelaVagas");

const mensagem = document.getElementById("mensagem");


formulario.addEventListener("submit", function(event) {

    // Impede o formulário de atualizar a página
    event.preventDefault();


    // Pega os dados digitados
    const empresa = document.getElementById("empresa").value;

    const vaga = document.getElementById("vaga").value;

    const area = document.getElementById("area").value;

    const cidade = document.getElementById("cidade").value;

    const descricao = document.getElementById("descricao").value;


    // Cria uma nova linha na tabela
    const linha = document.createElement("tr");


    linha.innerHTML = `
        <td>${empresa}</td>
        <td>${vaga}</td>
        <td>${area}</td>
        <td>${cidade}</td>
        <td>${descricao}</td>
    `;


    // Coloca a nova vaga na tabela
    tabela.appendChild(linha);


    // Mostra mensagem
    mensagem.textContent = "Vaga cadastrada com sucesso!";


    // Limpa o formulário
    formulario.reset();

});

