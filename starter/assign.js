
// // lecture- values and variables
let country = 'India';
let continent = 'Asia';
let population = 1403.6e6;

// console.log(country);
// console.log(continent);
// console.log(population);

// //  lecture- Data type

// let isIsland = false;
// let language;


// console.log(country);
// console.log(isIsland);
// console.log(population);
// console.log(language);

// // lecture- let, const and var

// language = 'Hindi';

// const newCountry = 'america';
// const newContinent = 'north-america';
// const isNewIsland = false;

// // lecture- Basic Operators

// const halfPopulation = population / 2 ;
// console.log(halfPopulation); // half population will be divided equally

// population++;
// console.log(population);

// let finlandPopulation = 6e6;
// console.log(population > finlandPopulation);

let avgPopulation = 33e6;

// console.log(population < avgPopulation);

// let description = 'Portugal is in Europe, and its 11 million people speak portuguese.';
// console.log(description);

// description = `Portugal is in Europe, and its 11 million people speak portuguese.`;
// console.log(description);

// if (population > avgPopulation) {
//     console.log("India's population is above average");
// } else {
//     console.log(`India's population is ${avgPopulation-population} below the average. `);
// }

// console.log('9'-'5') ;
// console.log('19'-'13'+'17') ;
// console.log('19'-'13'+17) ;
// console.log('123'< 57) ;
// console.log(5+6+'4'+9-4-2) ;

// // const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// // if (numNeighbours===1) {
// //     console.log('Only one border!');
// // } else if (numNeighbours > 1) {
// //     console.log('More than one border!');
// // } else {
// //     console.log('NO BORDER !!! ')
// // }


// // sarah problem

// if (population<50e6 && isIsland===false && language=='English' ) {
//     console.log('You should Live in India 😊');
// } else {
//     console.log('India does not meet your criteria.😞 ');
// }

// const language = 'hindi';

// switch(language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place in number of native speakers');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :)');

// }

const quote= population > avgPopulation ? `${country}'s population is above the average.` : `${country}'s population is below the average`
console.log(quote)