function action(actionNumber, actionDescribe, actionDuringTime, actionKey, cb) {
    setTimeout(
        () => {
            if (actionKey === 'yes') {
                cb(`Дія № ${actionNumber}: ${actionDescribe} - час: ${actionDuringTime}`);
            }
            if (actionKey === 'no') {
                console.error(`Дія № ${actionNumber}: ${actionDescribe}: НЕВИКОНАНО`);
                console.error('Розклад дня порушено!!!');
            }
        },
        actionDuringTime
    );

}

function actionDay(dayNumber, cb) {
    setTimeout(
        () => {
            cb(`ДЕНЬ № ${dayNumber} : НОВИЙ ДЕНЬ - НОВІ МОЖЛИВОСТІ`);
        },
        100
    );
}


actionDay(1, (v) => {
    console.log(v);
    action(1, 'я прокидаюсь', 200, 'yes', v => {
        console.log(v);
        action(2, 'я чищу зуби', 300,'yes', v => {
            console.log(v);
            action(3, 'я снідаю', 250,'yes', v => {
                console.log(v);
                action(4, 'я йду на зупинку маршрутки', 300,'yes', v => {
                    console.log(v);
                    action(5, 'я їду на роботу', 800,'yes', v => {
                        console.log(v);
                        action(6, 'я на роботі', 1200,'yes', v => {
                            console.log(v);
                            action(7, 'я повертаюсь до дому', 600,'yes', v => {
                                console.log(v);
                                action(8, 'я вечеряю', 300,'yes', v => {
                                    console.log(v);
                                    action(9, 'я прямую в спортзал', 200,'yes', v => {
                                        console.log(v);
                                        action(10, 'я виконую вправи в залі', 700,'yes', v => {
                                            console.log(v);
                                            action(11, 'я топаю до дому', 400,'yes', v => {
                                                console.log(v);
                                                action(12, 'я йду спати', 150,'yes', v => {
                                                    console.log(v);
                                                    action(12, 'я йду спати', 150,'yes', v => {
                                                        console.log('');
                                                        console.log('');
                                                        console.log(v);
                                                        actionDay(2, v => {
                                                            console.log(v);
                                                            action(1, 'я прокидаюсь', 200,'yes', v => {
                                                                console.log(v);
                                                                action(2, 'я чищу зуби', 150,'yes', v => {
                                                                    console.log(v);
                                                                    action(3, 'я снідаю', 300,'yes', v => {
                                                                        console.log(v);
                                                                        action(4, 'я йду на зупинку маршрутки', 200,'yes', v => {
                                                                            console.log(v);
                                                                            action(5, 'я їду на роботу', 600,'yes', v => {
                                                                                console.log(v);
                                                                                action(6, 'я на роботі', 900,'yes', v => {
                                                                                    console.log(v);
                                                                                    action(7, 'я повертаюсь до дому', 1000,'yes', v => {
                                                                                        console.log(v);
                                                                                        action(8, 'я вечеряю', 300,'yes', v => {
                                                                                            console.log(v);
                                                                                            action(9, 'я прямую в спортзал', 400,'yes', v => {
                                                                                                console.log(v);
                                                                                                action(10, 'я виконую вправи в залі', 350,'no', v => {
                                                                                                    console.log(v);
                                                                                                    action(11, 'я топаю до дому', 400,'yes', v => {
                                                                                                        console.log(v);
                                                                                                        action(12, 'я йду спати', 150,'yes', v => {
                                                                                                            console.log(v);
                                                                                                        });
                                                                                                    });
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

// console.log(await actionDay(2));
// console.log(await action(1, 'я прокидаюсь', 200));
// console.log(await action(2, 'я чищу зуби', 150));
// console.log(await action(3, 'я снідаю', 300));
// console.log(await action(4, 'я йду на зупинку маршрутки', 200));
// console.log(await action(5, 'я їду на роботу', 600));
// console.log(await action(6, 'я на роботі', 900));
// console.log(await action(7, 'я повертаюсь до дому', 1000));
// console.log(await action(8, 'я вечеряю', 300));
// console.log(await action(9, 'я прямую в спортзал', 400));
// console.log(await action(10, 'я виконую вправи в залі', 350, 'no'));
// console.log(await action(11, 'я топаю до дому', 400));
// console.log(await action(12, 'я йду спати', 150));