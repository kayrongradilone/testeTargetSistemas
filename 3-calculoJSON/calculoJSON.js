
const calculoJSON = () => {
    fetch("dados.json").then(response => response.json())
        .then(dados => {
            console.log(dados)
        })


}
calculoJSON()