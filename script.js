// ստեղծում եք 20 օրինակ Destructuring-ի, այսինքն 10 հատ զանգված 10 հատ օբջեքթ, 
// կեսը  պետք է լինեն ճյուղավորված գոնե 1 աստիճան, այսինքն զանգվածի մեջ զանգված, 
// օբջեքթի մեջ օբջեքթ, բայց պետք է լինեն նաև չճյուղավորվածները

// array Destructuring

const x = [10, 21, 58, 23, 13];
const [s, z, n, m, p] = x;
console.log(`s: ${s}, z: ${z}, n: ${n}, m: ${m}, p: ${p}`);


const arr = [["Aaron"], ["Leila"], ["Alison"], ["Angelina"]];
const [[firstName], [secondName], [thirdName], [fourthName]] = arr;
console.log(`This is ${firstName}, ${secondName}, ${thirdName}, ${fourthName}`);


const y = [0, 20, 40, 60, 80, 100];
const [zero, twenty, forty, sixty, eighty, hundred] = y;
console.log(zero, twenty, forty, sixty, eighty, hundred);


const o = [true, [["Jack"], ["Ann"]], 58, false];
const [isTrue, [[person1], [person2]], years, isFalse] = o;
console.log(`${person1} is ${years} years old, in this case he is ${isTrue} but ${person2} was ${isFalse}`);


const t = ["Hello", "my", "name is", "Maria"];
const [hi, whom, what, whatIs] = t;
console.log(hi, whom, what, whatIs);


const v = [{ a: 1, b: 2, c: 3}, {d: 4, e: 5, f: 6}, [7, 8, 9, 10], "many", "numbers"];
const [{a, b, c}, {d, e, f}, [seven, eight, nine, ten], many, numbers ] = v;
console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}, e: ${e}, f: ${f}`, seven, eight, nine, ten, many, numbers);


const l = [0.1, 0.2, 0.3, 0.4, 0.5];
const [first, second, third, fourth, fifth] = l;
console.log(first, second, third, fourth, fifth);


const age1 = [{Jack: "17 years old", Ann: "16 years old"},
             {Joe: "25 years old", Angel: "20 years old"}, 
             {Lea: "17 years old", Max: "18 years old"}];
const [{Jack, Ann}, {Joe, Angel}, {Lea, Max}] = age1;
console.log(Jack, Ann, Joe, Angel, Lea, Max);


const cols = ["purple", "brown", "orange", "white", "pink"];
const [purple, brown, orange, white, pink] = cols;
console.log(purple, brown, orange, white, pink);


const count = [{day1: 20, day2: 15, day3: 24}, {day4: 18, day5: 19, day6: 4}, [96]];
const [{firstDay, secondDay, thirdDay}, {fourthDay, fifthDay, sixthDay}, [allDays]] = count;
console.log(allDays);


// object destructuring

const obj = {
  pName: "Joe",
  pLastName: "Jackson",
  personAge: 15
};
const {pName, pLastName, personAge} = obj;
console.log(`${pName} ${pLastName} is ${personAge} years old`);


const building = {
  height: 850,
  width: 550
};
const {height, width} = building;
console.log(`The height is ${height}, width ${width}`);


const colors = {
  armenia : {
    firstColor: "red",
    secondColor: "blue",
    thirdColor: "orange"
  },
  brazil: [
    "green",
    "yellow",
    "blue"
  ]
};
const {firstColor, secondColor, thirdColor} = colors.armenia;
console.log(`Armenia's flag colors are ${firstColor}, ${secondColor}, ${thirdColor}`);
const [green, yellow, blue] = colors.brazil;
console.log(`Brazil's flag colors are ${green}, ${yellow}, ${blue}`);


const songs = {
  duaLipa : [
    "One Kiss",
    "Levitating",
    "New Rules"
  ],
  theWeeknd : [
    "Try Me",
    "Call Out My Name",
    "Blinding Lights"
  ]
};
const [favSong1, favSong2, favSong3] = songs.duaLipa;
console.log(`my favourite songs of Dua Lipa are ${favSong1}, ${favSong2}, ${favSong3}`);
const [fSong1, fSong2, fSong3] = songs.theWeeknd;
console.log(`my favourite songs of The Weeknd are ${fSong1}, ${fSong1}, ${fSong1}`);


const allDay = {
  workers: 5,
  created: 22,
  result: "75%"
};
const {workers, created, result} = allDay;
console.log(`${workers} workers have craeted ${created} items, ${result} of 100%`);


const person = {
  personName: "Albert",
  lastName: "Jackson",
  age: 19,
  friends: [
      ["Alice Brown", "Jane Michaels"],
      ["Jack McCuin", "Ben Haron"]
  ],
  exams: {
    subjects: ["math", "literature", "english", "biolog"],
    grade: [18, 19, 20, 17]
  }
};

const {personName, lastName, age} = person;
console.log(`${personName} ${lastName} is ${age} years old`);

const [girl1, girl2] = person.friends[0];
console.log(girl1, girl2);

const [boy1, boy2] = person.friends[1];
console.log(boy1, boy2);

const [math, literature, english, biolog] = person.exams.subjects;
const [mathgr, literaturegr, englishgr, biologygr] = person.exams.grade;
console.log(`${math}: ${mathgr}, ${literature}: ${literaturegr}, ${english}: ${englishgr}, ${biolog}: ${biologygr}`);


const films = {
  tomHardy : {
    fav1: "Legend",
    fav2: "The Warrior",
    fav3: "Venom"
  },
  willSmith : {
    f1 : "Bad Boys",
    f2 : "The Pursuit Of Happiness"
  }
};

const {fav1, fav2, fav3} = films.tomHardy;
console.log(`My favourite films of Tom Hardy are ${fav1}, ${fav2}, ${fav3}.`);

const {f1, f2, f3} = films.willSmith;
console.log(`My favourite films of Will Smith are ${f1} and ${f2}.`);


const members = {
  armenians : 58,
  russians: 40,
  americans: 38
};

const {armenians, russians, americans} = members;
console.log(`Armenians : ${armenians}, Russians : ${russians}, Americans : ${americans}`);


const animals = {
  pets : ["dog", "cat", "rabbit", "fish"],
  wild : ["lion", "wolf", "elephant"]
};

const [dog, cat, rabbit, fish] = animals.pets;
console.log(dog, cat, rabbit, fish);
const [lion, wolf, elephant] = animals.wild;
console.log(lion, wolf, elephant);


const students = {
  exams : ["chemistry", "biology", "physics"],
  quetions : {
    "chemistry" : 90,
    "biology" : 80,
    "physics" : 60
  }
};

const [chem, Biol, phy] = students.exams;
const {chemistry, biology, physics} = students.quetions;
console.log(`Studetns have to know ${chemistry} question from ${chem}, 
${biology} questions from ${Biol}, ${physics} questions from ${phy}`);