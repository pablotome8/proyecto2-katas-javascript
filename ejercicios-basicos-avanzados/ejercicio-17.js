//For in recorrer

const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const key in alien) {
    if (!Object.hasOwn(alien, key)) continue;
    
    const element = alien[key];

    console.log(`La propiedad ${key} tiene como valor:${element}`);
    
    
}