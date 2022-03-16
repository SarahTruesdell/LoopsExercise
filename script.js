for (i = 1; i <= 7; i++){
    console.log(i);
};

for (i=5; i <= 25; i += 4){
    console.log(i);
};

const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];

for (kids of wizards) {
    console.log(kids);
};

let harryPotterMovies = 0;

while (harryPotterMovies < 8){
    harryPotterMovies++;
};

console.log(harryPotterMovies);

//Bonus

const hogwartsHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
];

for (group of hogwartsHouses) {
    for (letters of group) {
        console.log(letters);
    }
};

const hagrid = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
];

console.log(hagrid);

//inspired by FizzBuzz

for (i=1; i<=25; i++){
    if (i% 3 === 0 && i % 5 === 0){
        console.log(`Expecto Patronum`);
    } else if( i % 3 === 0){
        console.log(`Expecto`);
    } else if ( i % 5 === 0){
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
};


