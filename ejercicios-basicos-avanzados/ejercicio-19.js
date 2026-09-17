// Mixed forOf e includes

const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

let noCoinciden =[];
for (let index = toys.length - 1;index>=0; index--) {
    if (toys[index].name.toLocaleLowerCase().includes('gato'.toLocaleLowerCase())) {
        toys.splice(index,1);
    }else{
        noCoinciden.push(toys[index]);
    }
    
}
noCoinciden.reverse();
console.log(noCoinciden);
