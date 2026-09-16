//Comprueba  y elimina duplicados 
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
    let listaUnica=[];
    for (let i=0; i<list.length; i++){
        if(!listaUnica.includes(list[i])){
            listaUnica.push(list[i]);
        }
    }
    return listaUnica;
}
console.log(removeDuplicates(duplicates));
