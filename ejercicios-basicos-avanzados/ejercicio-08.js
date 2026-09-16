const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {

    let palabraMasLarga = ""
    
    for (let i=0; i <stringList.length; i++){
        if(stringList[i].length>palabraMasLarga.length){
            palabraMasLarga=stringList[i];
        }
    }
    return palabraMasLarga;
}
console.log(findLongestWord(avengers));

function finestFindLonggestWord(stringList){
    return stringList.reduce((masLarga,palabraActual) => {
        return palabraActual.length>masLarga.length ? palabraActual : masLarga;
    }, "");
}

console.log(finestFindLonggestWord(avengers));