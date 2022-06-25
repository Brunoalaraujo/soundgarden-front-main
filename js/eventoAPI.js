function fazPots (url, evento) {
    let request = new XMLHttpRequest()
    request.open("POTS", url)
    request.setRequestHeader("Content-Type", "application/json")
    request.send(JSON.stringify(evento))
}

function novoEvento() {
   let url = "https://xp41-soundgarden-api.herokuapp.com/events"
   let nome = document.getElementById("nome").value
   let atracao = document.getElementById("atracoes").value
   let descricao = document.getElementById("descricao").value
   let data = document.getElementById("data").value
   let lotacao = document.getElementById("lotacao").value

   evento = {
    "name": nome,
    "attractions": [atracao],
    "description": descricao,
    "scheduled": data,
    "number_tickets": lotacao
   }
   fazPots(url, evento)
}