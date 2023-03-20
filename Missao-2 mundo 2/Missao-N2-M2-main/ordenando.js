
//______________________________________________________________________________
//Função que serve para gerar um numero aleatorio

const gerarNumero = (min,max) => {
  let r = Math.random(); return Math.floor(r * (max - min + 1)) + min;}

//______________________________________________________________________________
//Função Swap

const swap = (vetor, p1, p2) => {
  [vetor[p1], vetor[p2]] = [vetor[p2],vetor[p1]] }

//______________________________________________________________________________
//Função Shuffle

const shuffle = (vetor, q_trocas) => {
  for (let i = 0; i < q_trocas; i++) {
    let n1 = gerarNumero(0,(vetor.length -1));
    let n2 = gerarNumero(0,(vetor.length -1));
    swap(vetor,n1,n2)
  }
}

//______________________________________________________________________________
//Função Bubble Sort

const bubble_sort = (vetor) => {
  let len = vetor.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (vetor[j] > vetor[j+1]) {
        swap(vetor,j,j+1)
      }
    }
  }
}

//______________________________________________________________________________
//Função Selection Sort

const selection_sort = (vetor) => {
  let len = vetor.length
  for (let i = 0; i < len-1; i++) {
    let min = i
    for (let j = i+1; j < len; j++){
      if (vetor[j] < vetor[min]){
        min = j
      }
    }
    swap(vetor,min,i)
  }
}

//______________________________________________________________________________
//Função Quick Sort

const quick_sort = (vetor, left = 0, right = vetor.length -1 ) => {
  if (left >= right) return;
  const pivot = vetor[Math.floor((left + right) / 2)];
  const index = partition(vetor, left, right, pivot);
  quick_sort(vetor, left, index -1);
  quick_sort(vetor, index, right);
}

//Função Partition para auxiliar a função Quick Sort

const partition = (vetor, left, right, pivot) => {
  while (left <= right) {
    while (vetor[left] < pivot) { left++; }
    while (vetor[right] > pivot) { right--; }
    if (left <= right) {
      [vetor[left],vetor[right]] = [vetor[right],vetor[left]];
      left++;
      right--;
    }
  }
  return left;
}

//______________________________________________________________________________

function add() {
  let campo = document.getElementById("valor");
  let lista = document.getElementById("valores");
  let valor = campo.value;

  let li = document.createElement('li'); li.innerText = valor;

  lista.appendChild(li)
  campo.value = '';
}

function ordenar() {
  let lista = document.getElementById("valores");
  let select = document.getElementById("select_ord");
  let items = lista.children;
  let vetor = []

  for ( let i = 0; i < items.length; i++ ) {
    if ( !(isNaN(Number(items[i].textContent))) ) {
      vetor.push(Number(items[i].textContent))
    }
  }
  
  if (select.value === 'bubble_s') {
    bubble_sort(vetor)
  }
  if (select.value === 'selection_s') {
    selection_sort(vetor)
  }
  if (select.value === 'quick_s') {
    quick_sort(vetor)
  }

  vetor.map( (valor, index) => {
    items[index].innerText = valor;
  })

}

function misturar() {
  let lista = document.getElementById("valores");
  let items = lista.children;
  let vetor = []

  for ( let i = 0; i < items.length; i++ ) {
    if ( !(isNaN(Number(items[i].textContent))) ) {
      vetor.push(Number(items[i].textContent))
    }
  }

  shuffle(vetor,vetor.length)

  vetor.map( (valor, index) => {
    items[index].innerText = valor;
  })
}
