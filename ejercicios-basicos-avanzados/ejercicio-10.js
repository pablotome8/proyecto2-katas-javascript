// Calcular promedio
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let total = 0
    for (let i = 0; i < numberList.length; i++) {
        total+=numberList[i];
    }
    let promedio = total/numberList.length;
    return promedio;
}
console.log(average(numbers));

function finestAverage (numberList){
    return numberList.reduce((acumulador,num) => acumulador+num,0)/numberList.length;
}
console.log(finestAverage(numbers));




