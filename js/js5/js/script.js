// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
function arrRandom100() {
    let arr = [];
    for (let i = 0; i < 100; i++) {
        arr[i] = Math.round(Math.random() * 100);
    }

    return arr;
}

console.log(arrRandom100());

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
function createArrayOfRandomNumbers(arrayLength, minRandomValue, maxRandomValue) {
    let arr = [];

    for (let i = 0; i < arrayLength; i++) {
        arr[i] = Math.round(Math.random() * (maxRandomValue - minRandomValue)) + minRandomValue;
    }

    return arr;
}

console.log(createArrayOfRandomNumbers(10, 50, 150));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let myArr = createArrayOfRandomNumbers(10, 50, 150);

myArr.sort(function (aValue, bValue) {
    return aValue - bValue;
});

console.log(myArr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
let myArr2 = myArr.filter(function (itemValue) {
    return itemValue % 2 === 0;
});

console.log(myArr2);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
let myArr3 = createArrayOfRandomNumbers(10, 0, 20);

let myArr4 = myArr3.map(function (value) {
    return value + '';
});

console.log(myArr4);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let myUser = new User(1, 'Petia', 'Subota', 'ps@gmail.com', '097450945');

console.log(User);
console.log(myUser);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];

users.push(new User(9, 'Petia', 'Subota', 'ps@gmail.com', '097236688'));
users.push(new User(10, 'Vasia', 'Tort', 'ps@gmail.com', '097658023'));
users.push(new User(3, 'Kolia', 'Stovp', 'ps@gmail.com', '097670345'));
users.push(new User(5, 'Yura', 'Ptah', 'ps@gmail.com', '097756866'));
users.push(new User(4, 'Semen', 'Chobit', 'ps@gmail.com', '097111123'));
users.push(new User(6, 'Gora', 'Sula', 'ps@gmail.com', '097111122'));
users.push(new User(2, 'Vova', 'Volia', 'ps@gmail.com', '097778856'));
users.push(new User(8, 'Vitia', 'Slow', 'ps@gmail.com', '097000087'));
users.push(new User(7, 'Sergey', 'Fast', 'ps@gmail.com', '097554446'));
users.push(new User(1, 'Ivan', 'Pover', 'ps@gmail.com', '0976688679'));


console.log(users);

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
let usersNew = users.filter(function (user) {
    return user.id % 2 === 0;
})

console.log(usersNew);

usersNew.sort(function (aUser, bUser) {
    return aUser.id - bUser.id;
})

console.log(usersNew);