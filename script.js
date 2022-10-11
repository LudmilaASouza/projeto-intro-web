//MÚSICAS

const musica1 = {
    titulo: "Um Dia Após o Outro",
    artista: "Tiago Iorc",
    anoLancamento: 2013,
    genero: ["Folk-pop", "Pop", "MPB", "Rock Alternativo"],
    estrofe: "Pra começar \n Cada coisa em seu lugar \n E nada como um dia após o outro",
    autoral: true
}

const musica2 = {
    titulo: "Pra Lá de Bagdá",
    artista: "Lagum",
    anoLancamento: 2016,
    genero: ["Pop", "Pop-rock", "Raggae"],
    estrofe: "Sempre me imaginei assim \n Livre pra fazer o que eu 'tiver a fim \n Vamos lá e seja o que eu quiser \n E o futuro só pertence à mim",
    autoral: false
}

const musica3 = {
    titulo: "Linda de Morrer",
    artista: "Marcello Gugu",
    anoLancamento: 2013,
    genero: ["Rap", "Hip-Hop"],
    estrofe: "Agradeça cada amanhecer, sorria mais \n Se preocupe menos \n Afinal o que tem solução se solucionará \n O que não tem, solucionado está",
    autoral: true
}

const mediaLancento = ((musica1.anoLancamento+musica2.anoLancamento+musica3.anoLancamento)/3)
console.log("A média do ano de lançamentos é igual a", mediaLancento)

const verificaAutoral = musica1.autoral && musica2.autoral && musica3.autoral;
console.log("Todas as músicas são autorais?", verificaAutoral)

const musicas = []

if (musica1.autoral === true){
    musicas.push (musica1) 
} else {
    alert("A MÚSICA " + musica1.titulo + " NÃO É AUTORAL E NÃO PODE SER INCLUSA.")
}

if (musica2.autoral === true){
    musicas.push (musica2)
} else {
    alert("A MÚSICA " + musica2.titulo + " NÃO É AUTORAL E NÃO PODE SER INCLUSA.")
}

if (musica3.autoral === true){
    musicas.push (musica3)
} else {
    alert("A MÚSICA " + musica3.titulo + " NÃO É AUTORAL E NÃO PODE SER INCLUSA." )
}

//console.log(musicas)

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
/*
console.log(`${musica1.titulo.toUpperCase()} \n ${musica1.artista} \n ${musicasString1} \n ${musica1.genero} \n ${musica1.estrofe}`)
console.log(`${musica2.titulo.toUpperCase()} \n ${musica2.artista} \n ${musicasString2} \n ${musica2.genero} \n ${musica2.estrofe}`)
console.log(`${musica3.titulo.toUpperCase()} \n ${musica3.artista} \n ${musicasString3} \n ${musica3.genero} \n ${musica3.estrofe}`)
*/

for (let i in musicas){
    console.log(musicas[i])
}

function imprimeMusica(musicaObjeto){
    let musicString = ''
    musicString = musicaObjeto
    console.log(musicString)
}
imprimeMusica(musica2)

function retornaInfo(arrayObjeto, string){
    let retornaMusica = {}

    for(let i in arrayObjeto){
        for (let j in arrayObjeto[i]){
            if(arrayObjeto[i][j] === string){
                retornaMusica = arrayObjeto[i]
            } else {
                console.log("Nenhum item foi encontrado.")
            }
        }
    }
    //return retornaMusica
    console.log(retornaMusica)
}
retornaInfo(musicas, "Pra Lá de Bagdá")


