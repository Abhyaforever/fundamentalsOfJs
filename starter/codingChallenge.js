// // Coding Challenge #1
// // assigning variables of mass, height and bmi
// let massMark = 55;
// let heightMark = 1.82;

// let massJohn = 60;
// let heightJohn = 1.78;

// let bmiMark = massMark/heightMark**2;
// console.log(bmiMark);
// let bmiJohn = massJohn/heightJohn**2;
// console.log(bmiJohn);

// let markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// // test data 1
// massMark = 78;
// heightMark = 1.69;
// bmiMark = massMark/heightMark**2;
// console.log(bmiMark);

// massJohn = 92;
// heightJohn = 1.95;
// bmiJohn = massJohn/heightJohn**2;
// console.log(bmiJohn);

// markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// // test data 2 

// massMark = 95;
// heightMark = 1.88;
// bmiMark = massMark/heightMark**2;
// console.log(bmiMark);

// massJohn = 85;
// heightJohn = 1.76;
// bmiJohn = massJohn/heightJohn**2;
// console.log(bmiJohn);

// markHigherBMI = bmiMark > bmiJohn ;
// console.log(markHigherBMI);

// // Coding challenge #2

// if (markHigherBMI===true) {
//     console.log("Mark's BMI is higher than John's!");
// }
// else {
//     console.log("John's BMI is higher than Mark's!");
// }

// if (markHigherBMI===true) {
//     console.log(`Mark's BMI (${bmiMark}) is Higher than John's(${bmiJohn})! `);
// }
// else {
//     console.log(`John's BMI (${bmiJohn}) is Higher than Mark's(${bmiMark})!`);
// }

// // Coding Challenge #3

// const scoreDolphins1 = 97;
// const scoreDolphins2 = 112; 
// const scoreDolphins3 = 101; 

// const avgScoreDolphins = (scoreDolphins1 + scoreDolphins2 + scoreDolphins3)/3;
// console.log(`Average Score of Dolphins is (${avgScoreDolphins})!`); 

// const scoreKoalas1 = 109;
// const scoreKoalas2 = 95;
// const scoreKoalas3 = 106;

// const avgScoreKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3)/3;
// console.log(`Average Score of Koalas is (${avgScoreKoalas})!`); 

// // condition of tie or win -- Dolphins win the have 97.67 and K have 96.34

// if (avgScoreDolphins > avgScoreKoalas ) {
//     console.log('Dolphins are the WINNERS !!! ');
// } 
// else if (avgScoreKoalas > avgScoreDolphins) {
//     console.log('Koalas are the WINNERS !!!');
// } else {
//     console.log('The match is TIE !!!');
// }

// // BONUS 1 -- koalas are winners

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >=100) {
//     console.log('Dolphins are the WINNERS as they have scored more than 100 as well as more than Koalas... ');
// }
// else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
//     console.log('Koalas are the WINNERS as they have scored more than 100 as well as more than Dolphins...');
// }
// else {
//     console.log('Match was tied due to insuffiecint score by both teams');
// }

// // BONUS 2 -- match is tied

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
//     console.log('Dolphins are Winners !!! ');
// }
// else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
//     console.log('Koalas are Winners !!!');
// }
// else if ( avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100) {
//     console.log('Match is Tie Due to Same score with minimum requirements');
// }
// else {
//     console.log('NO ONE WINS THE TROPHY!!!');
// }

// // Coding Challenge #4

// const bill = 430;
// // tip = 50-300=== 15% i.e. 0.15*bill else 0.20*bill
// const tip = 50 <= bill && bill <=300 ? 0.15*bill : 0.2*bill;
// console.log(tip);

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value
// ${bill+tip}`);
