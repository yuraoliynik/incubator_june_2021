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

async function mySchedule() {
    try {
        console.log(await actionDay(1));
        console.log(await action(1, 'я прокидаюсь', 200));
        console.log(await action(2, 'я чищу зуби', 300));
        console.log(await action(3, 'я снідаю', 400));
        console.log(await action(4, 'я йду на зупинку маршрутки', 300));
        console.log(await action(5, 'я їду на роботу', 800));
        console.log(await action(6, 'я на роботі', 1200));
        console.log(await action(7, 'я повертаюсь до дому', 600));
        console.log(await action(8, 'я вечеряю', 300));
        console.log(await action(9, 'я прямую в спортзал', 200));
        console.log(await action(10, 'я виконую вправи в залі', 700));
        console.log(await action(11, 'я топаю до дому', 400));
        console.log(await action(12, 'я йду спати', 150));
        console.log('');
        console.log('');
        console.log(await actionDay(2));
        console.log(await action(1, 'я прокидаюсь', 200));
        console.log(await action(2, 'я чищу зуби', 150));
        console.log(await action(3, 'я снідаю', 300));
        console.log(await action(4, 'я йду на зупинку маршрутки', 200));
        console.log(await action(5, 'я їду на роботу', 600));
        console.log(await action(6, 'я на роботі', 900));
        console.log(await action(7, 'я повертаюсь до дому', 1000));
        console.log(await action(8, 'я вечеряю', 300));
        console.log(await action(9, 'я прямую в спортзал', 400));
        console.log(await action(10, 'я виконую вправи в залі', 350, 'no'));
        console.log(await action(11, 'я топаю до дому', 400));
        console.log(await action(12, 'я йду спати', 150));

    } catch (e) {
        console.error(e);
        console.error('Розклад дня порушено!!!');
    }
}

mySchedule();