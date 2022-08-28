let filmes = ["star wars","totoro","Motoqueiro fantasma","torre negra","todo mundo em panico"]
let animacao = ["Toy Story", "Princesa Mononoke", "Kung-fu Panda", "Túmulo dos Vagalumes", "Homem-Aranha no Aranhaverso"];

for(let i = 0; i < filmes.length; i++){
    filmes[i] = filmes[i].toUpperCase();
};

console.log(filmes);

let arrayJunto = null;
function juntarArray (arr0, arr1){
    for (let i = 0; i < arr1.length; i++) {
        arr0.push(arr1[i].toUpperCase());
    }
    return arrayJunto = arr0;
};
juntarArray(filmes,animacao);
console.log(arrayJunto);

let tiraJogo = arrayJunto.pop();
console.log(tiraJogo);
console.log(arrayJunto);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparar_medias(array0,array1) {
    let resultado = [];
    for(let i = 0; i < array1.length; i++){
        resultado[i] = array0[i] === array1[i];
    };
    return resultado
}
console.log(comparar_medias(asiaScores,euroScores));