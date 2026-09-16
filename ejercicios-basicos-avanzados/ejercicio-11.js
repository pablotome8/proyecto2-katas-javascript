//Calcula Promedio Mezclado
const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];
function averageWord(list){
    let total = 0
    for (let i = 0; i < list.length; i++) {
      if(typeof list[i]==="string"){
        total+=list[i].length;
      }else if(typeof list[i]==="number"){
        total+=list[i];
      }
    }
   let promedio = total /list.length;   
   return promedio
}
console.log(averageWord(mixedElements));

function finestaverageWord(list) {
    const total = list.reduce((acc, el) => {
        return acc + (typeof el === "string" ? el.length : el);
    }, 0);
    
    return total / list.length;
}
console.log(finestaverageWord(mixedElements));
