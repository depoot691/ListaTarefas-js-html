let titulo = document.getElementById("titulo");
titulo.innerText = "Lista Dinamica com javaScript";


let tarefas = [];

function adicionarTarefa(){
    let input = document.getElementById("InputTarefa");
    
    tarefas.push(input.value);
    console.log(tarefas)

    if(input.value === ""){
    alert("Campo de adicionar tarefas vazio! Adicione uma tarefa valida")
     return
    }
    
   input.value = "";
   renderizarLista();
}

function renderizarLista(){
    let listas = document.getElementById("listaTarefas");
    listas.innerHTML = "";

    for(let i = 0; i < tarefas.length; i++){
        let item = document.getElementById("listaTarefas");
        item.innerText = tarefas[i];
        listas.appendChild(item);
        
        item.onclick = function(){
            tarefas.splice(i,1);
            renderizarLista();
        }
        listas.appendChild(item)
        
    } 
    atualizadorContador();    

}

function limparLista(){
    tarefas = [];
    renderizarLista();
    console.log("lista foi limpa")
    
}

function atualizadorContador(){
    let contador = document.getElementById("contador")
    contador.innerText = tarefas.length;
}
