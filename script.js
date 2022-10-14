//MÚSICAS

const musica1 = {
    titulo: "um dia após o outro",
    artista: "Tiago Iorc",
    anoLancamento: 2013,
    genero: [" Folk-pop", " Pop", " MPB", " Rock Alternativo"],
    estrofe: "'Pra começa / Cada coisa em seu lugar / E nada como um dia após o outro'",
    autoral: true,
    imagem: "./tiagoiorc.jpg",
    link: "https://youtu.be/YXJUiWzxJwM"
}

const musica2 = {
    titulo: "pra lá de bagdá",
    artista: "Lagum",
    anoLancamento: 2016,
    genero: [" Pop", " Pop-rock", " Reggae"],
    estrofe: "'Sempre me imaginei assim / Livre pra fazer o que eu tiver a fim / Vamos lá e seja o que eu quiser / E o futuro só pertence à mim'",
    autoral: false,
    imagem: "./lagum.jpg",
    link: "https://youtu.be/NR_rqF-BuLE"
}

const musica3 = {
    titulo: "linda de morrer",
    artista: "Marcello Gugu",
    anoLancamento: 2013,
    genero: ["Rap", "Hip-Hop"],
    estrofe: "'Agradeça cada amanhecer, sorria mais / Se preocupe menos / Afinal o que tem solução se solucionará / O que não tem, solucionado está'",
    autoral: true,
    imagem: "./marcellogugu.jpg",
    link: "https://youtu.be/eOP6Z9J5930"
}

const mediaLancento = ((musica1.anoLancamento+musica2.anoLancamento+musica3.anoLancamento)/3)
console.log("A média do ano de lançamentos é igual a", mediaLancento)

const verificaAutoral = musica1.autoral && musica2.autoral && musica3.autoral;
console.log("Todas as músicas são autorais?", verificaAutoral)

// const musicas = []

// if (musica1.autoral === true){
//     musicas.push (musica1) 
// } else {
//     alert("A MÚSICA " + musica1.titulo + " NÃO É AUTORAL E NÃO PODE SER INCLUSA.")
// }

// if (musica2.autoral === true){
//     musicas.push (musica2)
// } else {
//     alert("A MÚSICA " + musica2.titulo + " NÃO É AUTORAL E NÃO PODE SER INCLUSA.")
// }

// if (musica3.autoral === true){
//     musicas.push (musica3)
// } else {
//     alert("A MÚSICA " + musica3.titulo + " NÃO É AUTORAL E NÃO PODE SER INCLUSA." )
// }*/

// console.log(musicas)

let musicas = []
let musicasString1 = ''

for(i in musica1.genero){
    musicasString1 += `${musica1.genero[i]} - `
}

let musicasString2 = ''
for(i in musica2.genero){
    musicasString2 += `${musica2.genero[i]} - `
}

let musicasString3 = ''
for(i in musica3.genero){
    musicasString3 += `${musica3.genero[i]} - `
}

for (let i in musicas){
    console.log(musicas[i])
}

console.log(`${musica1.titulo.toUpperCase()} \n ${musica1.artista} \n ${musicasString1} \n ${musica1.genero} \n ${musica1.estrofe}`)
console.log(`${musica2.titulo.toUpperCase()} \n ${musica2.artista} \n ${musicasString2} \n ${musica2.genero} \n ${musica2.estrofe}`)
console.log(`${musica3.titulo.toUpperCase()} \n ${musica3.artista} \n ${musicasString3} \n ${musica3.genero} \n ${musica3.estrofe}`)

// function imprimeMusica(musicaObjeto){
//     let musicString = ''
//     musicString = musicaObjeto
//     console.log(musicString)
// }
// imprimeMusica(musica2)

const retornaInfo = (array, input) => {
    for (let i in array) {
        for (let j in array[i]) {
            if (array[i][j] === input) {
                let main = document.getElementById("main")
                let div = document.createElement("div")
                let section = document.createElement("section")
                let imagem = document.createElement("img")
                let ul = document.createElement("ul")
                let li1 = document.createElement("li")
                let li2 = document.createElement("li")
                let li3 = document.createElement("li")
                let li4 = document.createElement("li")
                let li5 = document.createElement("li")
                let a = document.createElement("a")

                div.setAttribute("id", "div-elementos")
                section.setAttribute("id", "section1")
                imagem.src = musicas[i].imagem
                a.setAttribute("href", musicas[i].link)
                a.setAttribute("target", "_blank")
                a.innerHTML = musicas[i].titulo.toUpperCase()
                li1.innerHTML = "Título: "
                li2.innerHTML = "Artista: " + musicas[i].artista
                li3.innerHTML = "Ano de Lançamento: " + musicas[i].anoLancamento
                li4.innerHTML = "Gênero musical: " + musicas[i].genero
                li5.innerHTML = "Estrofe: " + musicas[i].estrofe

                main.appendChild(div)
                div.appendChild(section)
                section.appendChild(imagem)
                section.appendChild(ul)
                ul.appendChild(li1)
                ul.appendChild(li2)
                ul.appendChild(li3)
                ul.appendChild(li4)
                ul.appendChild(li4)
                ul.appendChild(li5)
                li1.appendChild(a)
            }
        }
    }
    //return retornaMusica
    //console.log(retornaMusica)
}

musicas.push(musica1, musica2, musica3)

for (i in musicas) {
    let div = document.getElementById("div-elementos")
    let section = document.createElement("section")
    let imagem = document.createElement("img")
    let ul = document.createElement("ul")
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let li4 = document.createElement("li")
    let li5 = document.createElement("li")
    let a = document.createElement("a")

    section.setAttribute("id", "section1")
    imagem.src = musicas[i].imagem

    a.setAttribute("href", musicas[i].link)
    a.setAttribute("target", "_blank")
    a.innerHTML = musicas[i].titulo.toUpperCase()
    li1.innerHTML = "Título: "
    li2.innerHTML = "Artista: " + musicas[i].artista
    li3.innerHTML = "Ano de Lançamento: " + musicas[i].anoLancamento
    li4.innerHTML = "Gênero musical: " + musicas[i].genero
    li5.innerHTML = "Estrofe: " + musicas[i].estrofe


    div.appendChild(section)
    section.appendChild(imagem)
    section.appendChild(ul)
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    ul.appendChild(li4)
    ul.appendChild(li4)
    ul.appendChild(li5)
    li1.appendChild(a)
}

function busca(event) {
    event.preventDefault()
    let input = document.getElementById("input").value.toLowerCase()

    if (input === "") {
        alert("Por favor, digite novamente. Item não encontrado!")
    } else {
        document.getElementById("div-elementos").remove()
        retornaInfo(musicas, input)
    }
}

