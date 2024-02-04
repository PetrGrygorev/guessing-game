alert(`Загадайте любое целое число от минимального значения до максимального, а я его угадаю`);
let minValue = parseInt(prompt('Минимальное значение числа для игры'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры'));

if (Number.isNaN(minValue) || Number.isNaN(maxValue)) {
    minValue = 0;
    maxValue = 100;
}

const min = -999;
const max = 999;

(minValue < min) ? minValue = min : minValue;
(maxValue > max) ? maxValue = max : maxValue;

let answerNumber = Math.floor((minValue + maxValue) / 2);


let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
let answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;

if (gameRun) {
    const phraseRandom = Math.round(Math.random() * 2);
    const answerPhrase1 = phraseRandom;
    switch (answerPhrase1) {
        case 0:
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
            break;
        case 1:
            answerField.innerText = `Да это легко! Вы загадали ${answerNumber}?`;
            break;
        case 2:
            answerField.innerText = `Наверное, это число ${answerNumber}?`;
            break;
    }
}

document.getElementById('btnRetry').addEventListener('click', function () {
    alert(`Загадайте любое целое число от минимального значения до максимального, а я его угадаю`);
    minValue = parseInt(prompt('Минимальное значение числа для игры'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры'));

    if (Number.isNaN(minValue) || Number.isNaN(maxValue)) {
        minValue = 0;
        maxValue = 100;
    }

    (minValue < min) ? minValue = min : minValue;
    (maxValue > max) ? maxValue = max : maxValue;

    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    if (gameRun) {
        const phraseRandom = Math.round(Math.random() * 2);
        const answerPhrase1 = phraseRandom;
        switch (answerPhrase1) {
            case 0:
                answerField.innerText = `Вы загадали число ${answerNumber}?`;
                break;
            case 1:
                answerField.innerText = `Да это легко! Вы загадали ${answerNumber}?`;
                break;
            case 2:
                answerField.innerText = `Наверное, это число ${answerNumber}?`;
                break;
        }
    }

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase1 = phraseRandom;
            let answerPhrase;
            switch (answerPhrase1) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 2:
                    answerPhrase = `Вы загадали неверное число...\n\u{1F920}`;
                    break;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase1 = phraseRandom;
            let answerPhrase;
            switch (answerPhrase1) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 2:
                    answerPhrase = `Вы загадали неверное число...\n\u{1F920}`;
                    break;
            }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber ;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        const phraseRandom = Math.round( Math.random() * 2);
        const answerPhrase1 = phraseRandom;
        let answerPhrase;
        switch (answerPhrase1) {
            case 0:
                answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
                break;
            case 1:
                answerPhrase = `Я угадал\n\u{1F913}`;
                break;
            case 2:
                answerPhrase = `Я опять угадал\n\u{1F607}`;
                break;
            }

            answerField.innerText = answerPhrase;

        gameRun = false;
    }
})
