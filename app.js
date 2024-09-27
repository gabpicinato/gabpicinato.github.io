const projetos = [
    {
        titulo: "Projeto 3",
        descricao: "Descrição do terceiro projeto. Tecnologia usada e desafios.",
        imagens: ["imagens/projeto3-1.jpg", "imagens/projeto3-2.jpg"]
    },
    {
        titulo: "Projeto 4",
        descricao: "Descrição do quarto projeto. Foco nas funcionalidades criadas.",
        imagens: ["imagens/projeto4-1.jpg", "imagens/projeto4-2.jpg"]
    }
];

function carregarProjetos() {
    const containerProjetos = document.querySelector('.projetos');

    projetos.forEach(projeto => {
        const projetoDiv = document.createElement('div');
        projetoDiv.classList.add('projeto');

        const textoDiv = document.createElement('div');
        textoDiv.classList.add('texto-projeto');
        textoDiv.innerHTML = `<h3>${projeto.titulo}</h3><p>${projeto.descricao}</p>`;

        const imagensDiv = document.createElement('div');
        imagensDiv.classList.add('imagens-projeto');
        projeto.imagens.forEach(imagem => {
            const imgElement = document.createElement('img');
            imgElement.src = imagem;
            imgElement.alt = `Imagem de ${projeto.titulo}`;
            imagensDiv.appendChild(imgElement);
        });

        projetoDiv.appendChild(textoDiv);
        projetoDiv.appendChild(imagensDiv);

        containerProjetos.appendChild(projetoDiv);
    });
}
