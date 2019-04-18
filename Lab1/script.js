
let students = [' Tyler', ' Macee',' Jason', ' Mark', ' Justin', ' Landon', ' Kynlee', ' Paxton', ' Melissa', ' Charles'];

console.log(students);
alert(students)
// 


//Tyler grades
let tylergrades = [82, 76, 93, 91, 80];
let tylersum = tylergrades.reduce((previous, current) => current += previous);
let tyleravg = tylersum / tylergrades.length;

 //Macee Grades
let maceegrades = [92, 86, 93, 81, 90];
let maceesum = maceegrades.reduce((previous, current) => current += previous);
let maceeavg = maceesum / maceegrades.length;

 //Jason Grades
let jasongrades = [88, 86, 94, 71, 80];
let jasonsum = jasongrades.reduce((previous, current) => current += previous);
let jasonavg = jasonsum / jasongrades.length;

 //Mark Grades
let markgrades = [82, 96, 63, 71, 80];
let marksum = markgrades.reduce((previous, current) => current += previous);
let markavg = marksum / markgrades.length;

 //Justing Grades
let justingrades = [85, 77, 73, 81, 80];
let justinsum = justingrades.reduce((previous, current) => current += previous);
let justinavg = justinsum / justingrades.length;

//Landon Grades
 let landongrades = [89, 78, 93, 91, 90];
 let landonsum = landongrades.reduce((previous, current) => current += previous);
 let landonavg = landonsum / landongrades.length;

 //Kynlee Grades
let kynleegrades = [95, 86, 93, 91, 90];
let kynleesum = kynleegrades.reduce((previous, current) => current += previous);
let kynleeavg = kynleesum / kynleegrades.length;

//Paxton Grades
let paxtongrades = [85, 96, 92, 96, 80];
let paxtonsum = paxtongrades.reduce((previous, current) => current += previous);
let paxtonavg = paxtonsum / paxtongrades.length;

//Melissa Grades
let melissagrades = [82, 95, 90, 91, 90];
let melissasum = melissagrades.reduce((previous, current) => current += previous);
let melissaavg = melissasum / melissagrades.length;

//Charles Grades
let charlesgrades = [81, 73, 93, 91, 90];
let charlessum = charlesgrades.reduce((previous, current) => current += previous);
let charlesavg = charlessum / charlesgrades.length;


 console.log(tyleravg, maceeavg, jasonavg, markavg,justinavg,landonavg,kynleeavg, paxtonavg, melissaavg,charlesavg,);

 console.log(tyleravg)
 console.log(maceeavg)
 console.log(jasonavg)
 console.log(markavg)
 console.log(justinavg)
 console.log(landonavg)
 console.log(kynleeavg)
 console.log(paxtonavg)
 console.log(melissaavg)
 console.log(charlesavg)
