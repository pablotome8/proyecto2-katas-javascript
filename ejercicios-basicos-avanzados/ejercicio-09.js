//Calcular suma
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  // Completar código
  let suma = 0
  for (let i = 0; i<numberList.length; i++){
    suma +=numberList[i];
  }
  return suma
}

console.log(sumNumbers(numbers));

function finestSumNumbers(numberList){
    return numberList.reduce((suma,numeroActual)=>suma+numeroActual,0);
}
console.log(finestSumNumbers(numbers));