const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) =>{
    evento.preventDefault()

    criaElemento(evento.target.elements('nome').value, evento.target,elements('quantidade').value)
})

function criaElemento(nome, quantidade){

    //<li class="item"><strong>"quantidade"</strong>item</li>
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    novoItem.innerHTML = quantidade

    novoItem.appendChild(numeroItem)
    novoItem.innerText += nome

    lista.appendChild(novoItem)
}
