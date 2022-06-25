const form = document.getElementById('newEventForm');

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = form.elements['nome']
    const attraction = form.elements['atracoes']
    const description = form.elements['descricao']
    const date = form.elements['data']
    const quantity = form.elements['lotacao']

    let nome = name.value
    let atracao = attraction.value
    let descricao = description.value
    let data = date.value
    let lotacao = quantity.value

   let novoEvento = {
        "name": nome,
        "poster": "link da imagem",
        "attractions": [
            atracao
        ],
        "description": descricao,
        "scheduled": data,
        "number_tickets": lotacao 
    }
    
    fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
        method: "POST",
        body: JSON.stringify(novoEvento),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err));

});