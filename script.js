//MÚSICAS E SUAS HISTÓRIAS

const musica1 = "Um Dia Após o Outro";
const artista1 = "Tiago Iorc";
const anoLancamento1 = "2013";
const genero1 = ["Folk-pop", "Pop", "MPB", "Rock Alternativo"]
const estrofe1 = "Pra começar \n Cada coisa em seu lugar \n E nada como um dia após o outro";
const autoral1 = true;
console.log("Música:", musica1.toUpperCase(), "\n Artista:", artista1, "\n Ano de Lançamento:", 
anoLancamento1, "\n Gênero musical:", genero1, "\n", estrofe1);

const musica2 = "Pra Lá de Bagdá";
const artista2 = "Lagum";
const anoLancamento2 = "2016";
const genero2 = ["Pop", "Pop-rock", "Raggae"]
const estrofe2 = "Sempre me imaginei assim \n Livre pra fazer o que eu 'tiver a fim \n Vamos lá e seja o que eu quiser \n E o futuro só pertence à mim";
const autoral2 = false;
console.log("Música:", musica2.toUpperCase(), "\n Artista:", artista2, "\n Ano de Lançamento:", 
anoLancamento2, "\n Gênero musical:", genero2, "\n", estrofe2);

const musica3 = "Linda de Morrer";
const artista3 = "Marcello Gugu";
const anoLancamento3 = "2013";
const genero3 = ["Rap", "Hip-Hop"]
const estrofe3 = "Agradeça cada amanhecer, sorria mais \n Se preocupe menos \n Afinal o que tem solução se solucionará \n O que não tem, solucionado está";
const autoral3 = true;
console.log("Música:", musica3.toUpperCase(), "\n Artista:", artista3, "\n Ano de Lançamento:", 
anoLancamento3, "\n Gênero musical:", genero3, "\n", estrofe3);

const mediaLancento = Math.round((anoLancamento1+anoLancamento2+anoLancamento3)/3)
console.log("A média de ano de lançamentos é igual a", mediaLancento)

const verificaAutoral = autoral1 && autoral2 && autoral3;
console.log("Todas as músicas são autorais?", verificaAutoral)