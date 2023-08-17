const getTextFromInput = document.getElementById('texto-tarefa');
const makeTask = document.getElementById('criar-tarefa');
const btnRemove = document.getElementById('remover-selecionado');
const upsideBtn = document.getElementById('mover-cima');
const upsideDownBtn = document.getElementById('mover-baixo');
const cleanBtn = document.getElementById('remover-finalizados');
const listCacheBtn = document.getElementById('salvar-tarefas');
const allCleanBtn = document.getElementById('apaga-tudo');
const listLi = document.getElementById('lista-tarefas');
const itemWithSlected = document.getElementsByClassName('selected');
const itenInList = document.getElementsByClassName('list-item');

function makeSelected(input) {
  if (itemWithSlected.length > 0) {
    itemWithSlected[0].classList.remove('selected');
    input.target.classList.add('selected');
  } else {
    input.target.classList.add('selected');
  }
}

function rmvOrAddCompleted(input) {
  if (input.target.classList.contains('completed') === true) {
    input.target.classList.remove('completed');
  } else {
    input.target.classList.add('completed');
  }
}

function makeListLi() {
  const newLi = document.createElement('li');
  newLi.innerText = getTextFromInput.value;
  newLi.classList.add('list-item');
  newLi.addEventListener('click', makeSelected);
  newLi.addEventListener('dblclick', rmvOrAddCompleted);
  listLi.appendChild(newLi);
  getTextFromInput.value = '';
}

makeTask.addEventListener('click', makeListLi);

function moveUpside() {
  if (itemWithSlected[0] === undefined) {
    console.log('Nenhum ítem selecionado');
  } else if (itemWithSlected[0].previousElementSibling !== null) {
    listLi.insertBefore(itemWithSlected[0], itemWithSlected[0].previousElementSibling);
  }
  console.log('Item selecionado já está to topo da lista.');
}

upsideBtn.addEventListener('click', moveUpside);

function moveDownside() {
  if (itemWithSlected[0] === undefined) {
    console.log('Nenhum ítem selecionado');
  } else if (itemWithSlected[0].nextSibling !== null) {
    listLi.insertBefore(itemWithSlected[0], itemWithSlected[0].nextSibling.nextSibling);
  }
  console.log('Item selecionado já está no fim da lista.');
}

upsideDownBtn.addEventListener('click', moveDownside);

function selectedRmv() {
  if (itemWithSlected[0] !== null) {
    listLi.removeChild(itemWithSlected[0]);
  }
}

btnRemove.addEventListener('click', selectedRmv);

function completedClean() {
  for (let index = listLi.children.length - 1; index >= 0; index -= 1) {
    if (listLi.children[index].classList.contains('completed') === true) {
      listLi.removeChild(listLi.children[index]);
    }
  }
}

cleanBtn.addEventListener('click', completedClean);
function allClean() {
  listLi.innerHTML = '';
}

allCleanBtn.addEventListener('click', allClean);
function saveListCache() {
  const wrapList = listLi.innerHTML;
  localStorage.clear();
  localStorage.setItem('savedList', JSON.stringify(wrapList));
}

listCacheBtn.addEventListener('click', saveListCache);
function recoverList() {
  if (localStorage.getItem('savedList') === null) {
    console.log('No previous list');
  }
  listLi.innerHTML = JSON.parse(localStorage.getItem('savedList'));
  for (let index = 0; index < itenInList.length; index += 1) {
    itenInList[index].addEventListener('click', makeSelected);
    itenInList[index].addEventListener('dblclick', rmvOrAddCompleted);
  }
}

window.onload = recoverList;
