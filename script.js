//MÚSICAS E SUAS HISTÓRIAS

let musicas = [
    {
    "titulo": "Um Dia Após o Outro", 
    "artista": "Tiago Iorc",
    "anoLancamento": 2013,
    "album": "Zeski",
    "genero": "Folk-pop, Pop, MPB, Rock Alternativo",
    "estrofe": "Pra começar  Cada coisa em seu lugar E nada como um dia após o outro",
    "autoral": true
    },
    {
    "titulo": "Pra Lá de Bagdá",
    "artista": "Lagum",
    "anoLancamento": "2016",
    "album": "Seja o Que Eu Quiser",
    "genero": "Pop, Pop-rock, Raggae",
    "estrofe": "Sempre me imaginei assim Livre pra fazer o que eu 'tiver a fim Vamos lá e seja o que eu quiser E o futuro só pertence à mim",
    "autoral": false
    },
    {
    "titulo": "Linda de Morrer",
    "artista": "Marcello Gugu",
    "anoLancamento": "2013",
    "album": "Até Que Enfim Gugu",
    "genero": "Rap, Hip-Hop",
    "estrofe": "Agradeça cada amanhecer, sorria mais  Se preocupe menos Afinal o que tem solução se solucionará  O que não tem, solucionado está",
    "autoral": true
    } 
]

for (musicas of musicas){
    for (itens in musicas){
        console.log(`${itens}: ${musicas[itens]}`)
    }
console.log("------x------")
}


/*const mediaLancento = Math.round((anoLancamento1+anoLancamento2+anoLancamento3)/3)
console.log("A média de ano de lançamentos é igual a", mediaLancento)

const verificaAutoral = autoral1 && autoral2 && autoral3;
console.log("Todas as músicas são autorais?", verificaAutoral)*/

