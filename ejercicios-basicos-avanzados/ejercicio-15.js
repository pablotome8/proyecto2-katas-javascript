//Includes 

const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];
function buscadorDeCoincidencias(list,palabra){
    let coincidencias=[];
    for (const producto of list) {
        if (producto.toLowerCase().includes(palabra.toLowerCase())) {
            coincidencias.push(producto);
        }
}
    return coincidencias;
}
console.log(buscadorDeCoincidencias(products,'camiseta'));