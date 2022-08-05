function armazenaTarefa() {
    const novaTarefa = document.querySelector('#texto-tarefa')
    const textoTarefa = novaTarefa.value;
    const pegaOl = document.getElementById('lista-tarefas');
    const criaLi = document.createElement('li');
    criaLi.innerText = textoTarefa;
    pegaOl.appendChild(criaLi);
}

const btnNovaTarefa = document.getElementById('criar-tarefa');
btnNovaTarefa.addEventListener('click', armazenaTarefa);


// function pegaTexto() {
//     const pegarTextoTarefa = document.querySelector('#texto-tarefa');
//     const textoTarefa = pegarTextoTarefa.value;
//     const novaTarefaBtn = document.getElementById('criar-tarefa')
//     // novaTarefaBtn.addEventListener('click')
    
// }
// // pegaTexto();

