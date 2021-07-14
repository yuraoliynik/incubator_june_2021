// --створити масив з:
// - з 5 числових значень
let num = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
let str = ['a', 'b', 'c', 'd', 'e'];
// - з 5 значень стрічкового, числового та булевого типу
let all = ['a', 12, 'b', false, true];
// - та вивести його в консоль
console.log(num);
console.log(str);
console.log(all);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let newAll = []
newAll[0] = 1;
newAll[1] = 2;
newAll[2] = 3;
newAll[3] = 4;
newAll[4] = 'a';
newAll[5] = 'b';
newAll[6] = 'c';
newAll[7] = true;
newAll[8] = false;
newAll[9] = 'yes';
newAll[10] = 'no';

console.log(newAll);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`<div class="wrap">`);
for (let i = 1; i <= 10; i++) {
    document.write(`
        <div class = "post-card">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, quibusdam.</p>
        </div>
   `);
}
document.write(`</div>`);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<div class="wrap">`);
for (let i = 1; i <= 10; i++) {
    document.write(`
        <div class = "post-card">
            <h3>Index - ${i}</h3>
            <p>Beatae eaque iure magnam molestias perspiciatis saepe.</p>
        </div>
   `);
}
document.write(`</div>`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let x = 1;
document.write(`<div class="wrap">`);
while (x <= 20) {
    document.write(`
        <div class = "post-card">
            <h1>Lorem ipsum dolor sit amet</h1>
        </div>
   `);
    x += 1;
}
document.write(`</div>`);

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let y = 1;
document.write(`<div class="wrap">`);
while (y <= 20) {
    document.write(`
        <div class = "post-card">
            <h1>${y}. Lorem ipsum dolor sit amet</h1>
        </div>
   `);
    y += 1;
}
document.write(`</div>`);

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (const num of nums) {
    console.log(num);
}


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let strs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l'];

for (const str of strs) {
    console.log(str);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let alls = [1, 2, 3, 4, 'a', 'b','c', true, false, 'yes', 'no'];

for (const all of alls) {
    console.log(all);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let elements = [1, false, 3, true, 'a', false,'c', true, false, 'yes', 'no'];

for (const element of elements) {
    if (typeof(element) === 'boolean') {console.log(element);}
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let newElements = [1, false, 3, true, 'a', 6,'c', true, 7, 'yes', 8];

for (const newElement of newElements) {
    if (typeof(newElement) === 'number') {console.log(newElement);}
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let newNewElements = [1, 2, 3, 4, 'a', 'b','c', true, false, 'yes', 'no'];

for (const newNewElement of newNewElements) {
    if (typeof(newNewElement) === 'string') {console.log(newNewElement);}
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr = [1, 2, 3, 4, 'a', 'b','c', true, false, 'yes', 'no'];

for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(i);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(i);
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 1; i <= 100; i += 2) {
    console.log(i);
    document.write(i);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write(i);
    }
}

// - Дано 2 масиви з рівною кількістю об'єктів. Масиви:
let usersWithId = [
     {id: 1, name: 'vasya', age: 31, status: false},
     {id: 2, name: 'petya', age: 30, status: true},
     {id: 3, name: 'kolya', age: 29, status: true},
     {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id". Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

let usersWithCities = [];

for (let i = 0; i <= usersWithId.length - 1; i++) {
    for (let j = 0; j <= citiesWithId.length - 1; j++){
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithCities[i] = usersWithId[i];
            usersWithCities[i]["address"] = citiesWithId[j];
        }
    }
}

console.log(usersWithCities);