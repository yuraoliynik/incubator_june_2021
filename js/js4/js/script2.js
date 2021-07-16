// - створити функцію яка обчислює та повертає площу прямокутника висотою
function squareOfRectangle(sideA, sideB) {
    return sideA * sideB;
}

console.log(squareOfRectangle(10, 5));

// - створити функцію яка обчислює та повертає площу кола
function squareOfCircle(radius) {
    return 3.14 * radius * radius;
}

console.log(squareOfCircle(10));

// - створити функцію яка обчислює та повертає площу циліндру
function squareOfCylinder(radius, hight) {
    return squareOfCircle(radius) + 2 * 3.14 * radius * hight;
}

console.log(squareOfCylinder(10, 5));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function funFunction(numbers) {
    let arrayOfNumbers = [];
    if (Array.isArray(numbers)) {
        arrayOfNumbers = numbers
    } else {
        for (let i = 0; i < arguments.length; i++) {
            arrayOfNumbers.push(arguments[i]);
        }
    }

    let minNum = arrayOfNumbers[0], maxNum = arrayOfNumbers[0];

    for (const number of arrayOfNumbers) {
        if (minNum > number) {
            minNum = number;
        }

        if (maxNum < number) {
            maxNum = number;
        }
    }

    console.log(maxNum);

    return minNum;
}

// let arr = [4,5,6,7,8,9];
console.log(funFunction(4, 5, 6, 7, 8, 9));


// - створити функцію яка при створює блок з текстом. Текст задати через аргумент
function createDiv(someText) {
    document.write(`
        <div>
            <p>${someText}</p>
        </div>
    `);
}

createDiv('Hello!');

// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(someText) {
    document.write(`
        <ul>
            <li>${someText}</li>
            <li>${someText}</li>
            <li>${someText}</li>
        </ul>
    `);
}

createUl('Hello! 2');

// - створити функцію яка при створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createList(someText, countItem) {
    document.write(`<ul>`);
    for (let i = 0; i < countItem; i++) {
        document.write(`<li>${someText}</li>`);
    }
    document.write(`</ul>`);
}

createList('Hello! 3', 7);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function buildBlock(arrayOfElements) {
    document.write(`<ul>`);
    for (const element of arrayOfElements) {
        document.write(`<li>${element}</li>`);
    }
    document.write(`</ul>`);
}

let arrOfEl = [134, 1332, 24, 42, 2314, true,'tttrt','tytyt', true, false];
buildBlock(arrOfEl);