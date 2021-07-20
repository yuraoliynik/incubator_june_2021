// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [];

clients.push(new Client(1, 'Igor', 'Groza', 'IG@gmail.com', '097456667', ['шина', 'диск', 'гайка', 'крило', 'дзеркало']));
clients.push(new Client(3, 'Vasia', 'Bliskavka', 'VB@gmail.com', '097555566', ['капот', 'очисник', 'паливний насос']));
clients.push(new Client(2, 'Petia', 'Piatka', 'PP@gmail.com', '097777444', ['фарба чорна', 'гайка', 'крило', 'дзеркало']));
clients.push(new Client(7, 'Georg', 'Velukuy', 'GV@gmail.com', '097447799', ['шина', 'диск', 'гайка', 'сайлент блок балки', 'захист']));
clients.push(new Client(4, 'Igor', 'Stupa', 'IS@gmail.com', '097000876', ['шина', 'диск', 'вд-40', 'крило', 'дзеркало', 'кришка багажника']));
clients.push(new Client(8, 'Misha', 'Voda', 'MV@gmail.com', '097332570', ['крило заднє', 'поріг', 'шпатель', 'крило переднє', 'наждак', 'фарба біла', 'грунтовка']));
clients.push(new Client(5, 'Vova', 'Ivanchuk', 'VI@gmail.com', '097096754', ['масло', 'фильтр масляний']));
clients.push(new Client(10, 'Ivan', 'Kum', 'IK@gmail.com', '097222110', ['антиржа', 'диск', 'гайка', 'крило', 'змазка', 'вд-40', 'сайлент блок', 'сайлент блок балки']));
clients.push(new Client(6, 'Stepan', 'Diduh', 'SD@gmail.com', '097469032', ['вода дистильована']));
clients.push(new Client(9, 'Tania', 'Kralia', 'TK@gmail.com', '097123456', ['фарба сіра', 'шпаклівка', 'грунтовка', 'антигравій', 'герметик']));

// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort(function (a, b) {
    return a.order.length - b.order.length;
});

console.log(clients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function Car(model, manufacture, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacture = manufacture;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = {};

    this.drive = function () {
        console.log('їдемо зі швидкістю', this.maxSpeed, 'км на годину');
    };

    this.info = function () {
        let info = [];
        Object.entries(this).slice(0, 5).forEach(([key, value]) => info.push(`${key}: ${value}`));
        Object.entries(this.driver).forEach(([key, value]) => info.push(`${key}: ${value}`));
        console.log(info.slice(0, 5).join('; ') + ((Object.keys(this.driver).length !== 0) ? '; driver {' + info.slice(5, info.length).join('; ') + '}' : '; Авто без водія'));
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    };

    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let bmw = new Car('5series', 'BMW', 2021, 320, 4.0,);

console.log(bmw);

bmw.drive();
bmw.info();

bmw.increaseMaxSpeed(370);
bmw.changeYear(2010);

bmw.addDriver({name: 'Ivan', secondName: 'Rubaha', skill: ['speed racer', 'traktorist'], yearOfBirth: 1990});
bmw.info();

console.log(bmw.driver);
console.log(bmw);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
class Car2 {
    constructor(model, manufacture, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacture = manufacture;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = {};
    }

    drive() {
        console.log('їдемо зі швидкістю', this.maxSpeed, 'км на годину');
    };

    info() {
        let info = [];
        Object.entries(this).slice(0, 5).forEach(([key, value]) => info.push(`${key}: ${value}`));
        Object.entries(this.driver).forEach(([key, value]) => info.push(`${key}: ${value}`));
        console.log(info.slice(0, 5).join('; ') + ((Object.keys(this.driver).length !== 0) ? '; driver {' + info.slice(5, info.length).join('; ') + '}' : '; Авто без водія'));
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    };
}

let mersedes = new Car2('s-class', 'Mersedes', 2018, 290, 3.5,);

console.log(mersedes);

mersedes.drive();
mersedes.info();

mersedes.increaseMaxSpeed(330);
mersedes.changeYear(2020);

mersedes.addDriver({name: 'Taras', secondName: 'Petlia', skill: ['speed racer', 'kombayner'], yearOfBirth: 1991});
mersedes.info();

console.log(mersedes.driver);
console.log(mersedes);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
class Popelushka {
    constructor(name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
    }
}

let popelushkas = [
    new Popelushka('Vika', 20, 37),
    new Popelushka('Lushka', 24, 38),
    new Popelushka('Lusha', 22, 35),
    new Popelushka('Ira', 18, 36),
    new Popelushka('Tania', 19, 34),
    new Popelushka('Marta', 31, 35),
    new Popelushka('Lesia', 17, 39),
    new Popelushka('Oksana', 18, 33),
    new Popelushka('Vira', 23, 36),
    new Popelushka('Nina', 25, 38)
];

console.log(popelushkas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Princ {
    constructor(name, age, sizeShoesFound) {
        this.name = name;
        this.age = age;
        this.sizeShoesFound = sizeShoesFound;
    }
}

let princ = new Princ('Gora', 25, 33);
console.log(princ);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const popelushka of popelushkas) {
    if (popelushka.sizeFoot === princ.sizeShoesFound) {
        console.log(popelushka);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let find = popelushkas.find(function (popelushka) {
    return popelushka.sizeFoot === princ.sizeShoesFound;
});

console.log(find);