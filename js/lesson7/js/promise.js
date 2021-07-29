function action(actionNumber, actionDescribe, actionDuringTime, actionKey = 'yes') {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                if (actionKey === 'yes') {
                    resolve(`Дія № ${actionNumber}: ${actionDescribe} - час: ${actionDuringTime}`);
                }
                if (actionKey === 'no') {
                    reject(`Дія № ${actionNumber}: ${actionDescribe}: НЕВИКОНАНО`);
                }
            },
            actionDuringTime
        );
    });
}

function actionDay(dayNumber) {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(`ДЕНЬ № ${dayNumber} : НОВИЙ ДЕНЬ - НОВІ МОЖЛИВОСТІ`),
            100
        );
    });
}

actionDay(1)
    .then(value => {
        console.log(value);
        return action(1, 'я прокидаюсь', 200);
    })
    .then(value => {
        console.log(value);
        return action(2, 'я чищу зуби', 300);
    })
    .then(value => {
        console.log(value);
        return action(3, 'я снідаю', 400);
    })
    .then(value => {
        console.log(value);
        return action(4, 'я йду на зупинку маршрутки', 300);
    })
    .then(value => {
        console.log(value);
        return action(5, 'я їду на роботу', 800);
    })
    .then(value => {
        console.log(value);
        return action(6, 'я на роботі', 1200);
    })
    .then(value => {
        console.log(value);
        return action(7, 'я повертаюсь до дому', 600);
    })
    .then(value => {
        console.log(value);
        return action(8, 'я вечеряю', 300);
    })
    .then(value => {
        console.log(value);
        return action(9, 'я прямую в спортзал', 200);
    })
    .then(value => {
        console.log(value);
        return action(10, 'я виконую вправи в залі', 700);
    })
    .then(value => {
        console.log(value);
        return action(11, 'я топаю до дому', 400);
    })
    .then(value => {
        console.log(value);
        return action(12, 'я йду спати', 150);
    })
    .then(value => {
        console.log(value);
        console.log('');
        console.log('');
        return actionDay(2);
    })
    .then(value => {
        console.log(value);
        return action(1, 'я прокидаюсь', 200);
    })
    .then(value => {
        console.log(value);
        return action(2, 'я чищу зуби', 150);
    })
    .then(value => {
        console.log(value);
        return action(3, 'я снідаю', 300);
    })
    .then(value => {
        console.log(value);
        return action(4, 'я йду на зупинку маршрутки', 200);
    })
    .then(value => {
        console.log(value);
        return action(5, 'я їду на роботу', 600);
    })
    .then(value => {
        console.log(value);
        return action(6, 'я на роботі', 900);
    })
    .then(value => {
        console.log(value);
        return action(7, 'я повертаюсь до дому', 1000);
    })
    .then(value => {
        console.log(value);
        return action(8, 'я вечеряю', 300);
    })
    .then(value => {
        console.log(value);
        return action(9, 'я прямую в спортзал', 400);
    })
    .then(value => {
        console.log(value);
        return action(10, 'я виконую вправи в залі', 350, 'no');
    })
    .then(value => {
        console.log(value);
        return action(11, 'я топаю до дому', 400);
    })
    .then(value => {
        console.log(value);
        return action(12, 'я йду спати', 150);
    })
    .then(value => {
        console.log(value);
    })
    .catch(reason => {
        console.error(reason);
        console.error('Розклад дня порушено!!!');
    });