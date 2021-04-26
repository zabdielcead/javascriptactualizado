const heroes = ['Batman', 'Spiderman', 'superman'];


console.log('For in');

for (let i in heroes) {
    console.log(heroes[i]);
}


console.log('For of');

for (let i of heroes) {
    console.log(i);
}