//Contador de repeticiones

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  let almacen = {};
  for (const palabra of list) {
    if (almacen[palabra]) {
        almacen[palabra]+=1;
    }else{
        almacen[palabra]=1;
    }
  }
  return almacen;
}

console.log(repeatCounter(words));
