const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
    let oldestXmen =xMen[0];

    for (const men of xMen) {
        if (men.year<oldestXmen.year) {
            oldestXmen=men;
        }  
    }
console.log(`El Xmen mas viejo es ${oldestXmen.name}`)
};
findOldestXMen(xMen);