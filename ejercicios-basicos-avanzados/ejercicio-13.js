//Buscador de nombres

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList,name) {
  for (let index = 0; index < nameList.length; index++) {
    if(name===nameList[index]){
        return (true,[index]);
    }
    
  }
  return false;
}
console.log(nameFinder(names,'Peter'));