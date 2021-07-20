// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
class Client {
    constructor(id, name, username, email, addressStreet, addressSuite, addressCity, addressZipcode, addressGeoLat, addressGeoLng, phone, website, companyName, companyCatchPhrase, companyBs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;

        this.address = {
            street: addressStreet,
            suite: addressSuite,
            city: addressCity,
            zipcode: addressZipcode,

            geo: {
                lat: addressGeoLat,
                lng: addressGeoLng

            }
        }

        this.phone = phone;
        this.website = website;

        this.company = {
            name: companyName,
            catchPhrase: companyCatchPhrase,
            bs: companyBs
        }
    }
}

let clnt = new Client(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(clnt);

// console.log(clnt.address.geo.lat);


class Adress {
    constructor(street, suite, city, zipcode, geoLat, geoLng) {
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;

        this.geo = {
            lat: geoLat,
            lng: geoLng
        }
    }
}

class Company {
    constructor(name, catchPhrase, bs) {
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs
    }
}

class Client2 {
    constructor(id, name, username, email, addressStreet, addressSuite, addressCity, addressZipcode, addressGeoLat, addressGeoLng, phone, website, companyName, companyCatchPhrase, companyBs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;

        this.address = new Adress(addressStreet, addressSuite, addressCity, addressZipcode, addressGeoLat, addressGeoLng);

        this.phone = phone;
        this.website = website;

        this.company = new Company(companyName, companyCatchPhrase, companyBs);
    }
}

let clnt2 = new Client2(2, 'Leanne Graham 2', 'Bret 2', 'Sincere_2@april.biz', 'Kulas2 Light2', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
console.log(clnt2);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Attribute {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

}

class Teg {
    constructor(tagName, tagActionDescription, attributeName, attributeDescription, attributeName2, attributeDescription2) {
        this.name = tagName;
        this.actionDescription = tagActionDescription;
        this.attributes = [new Attribute(attributeName, attributeDescription), new Attribute(attributeName2, attributeDescription2)];
    }
}

let aTeg = new Teg('div', 'В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь', 'name', 'Устанавливает имя якоря внутри документа', 'href', 'Задает адрес документа, на который следует перейти');
console.log(aTeg);
// console.log(aTeg.attributes);
// console.log(aTeg.attributes[0].name);

let divTeg = new Teg('div', 'Является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.', 'align', 'Задает выравнивание содержимого тега <div>', 'title', 'Добавляет всплывающую подсказку к содержимому');
console.log(divTeg);

let h1Teg = new Teg('h1', 'Представляет собой наиболее важный заголовок первого уровня', 'align', 'Определяет выравнивание заголовка', 'style', 'Применяется для определения стиля элемента с помощью правил CSS');
console.log(h1Teg);

let spanTeg = new Teg('span', 'Предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль', 'title', 'Описывает содержимое элемента в виде всплывающей подсказки', 'accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш');
console.log(spanTeg);

let inputTeg = new Teg('input', 'Является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков', 'checked', 'Предварительно активированный переключатель или флажок', 'form', 'Связывает поле с формой по её идентификатору');
console.log(inputTeg);

let formTeg = new Teg('form', 'Устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению', 'action', 'Адрес программы или документа, который обрабатывает данные формы', 'autocomplete', 'Включает автозаполнение полей формы');
console.log(formTeg);

let optionTeg = new Teg('option', 'Определяет отдельные пункты списка, создаваемого с помощью контейнера <select>', 'selected', 'Заранее устанавливает определенный пункт списка выделенным', 'value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов');
console.log(optionTeg);

let selectTeg = new Teg('select', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', 'multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка', 'size', 'Количество отображаемых строк списка');
console.log(selectTeg);