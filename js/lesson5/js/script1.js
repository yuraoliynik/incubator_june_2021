// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
console.log(document.getElementById('content').textContent);

// -- отримує текст з блоку з id "rules"
console.log(document.getElementById('rules').textContent);

// -- замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = 'lorem lorem lorem';

// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = 'haw are you?';

// -- змініть кожному елементу колір фону на червоний
let bodyCollection = document.body.children;
console.log(bodyCollection);

for (const element of bodyCollection) {
    element.style.background = 'tomato';
}

// -- змініть кожному елементу колір тексту на синій
for (const element of bodyCollection) {
    element.style.color = '#3f51b5';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(document.getElementById('rules').classList);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
let fcRulesCollection = document.getElementsByClassName('fc_rules');
console.log(fcRulesCollection);

for (let i = 0; i < fcRulesCollection.length; i++) {
    fcRulesCollection[i].addEventListener('click', function () {
        console.log(fcRulesCollection[i].textContent);
    });

    fcRulesCollection[i].addEventListener('click', function () {
        alert(`Element ${fcRulesCollection[i].tagName.toLowerCase()}_${i} says hello!`);
    });
}

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
for (const element of fcRulesCollection) {
    element.style.color = '#e91e63';
}