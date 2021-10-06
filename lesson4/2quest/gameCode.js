//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];




switch (easyQuest(works.a00, works.a1, works.a2)) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        switch (easyQuest(works.b00, works.b1, works.b2)) {
            case 1: 
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                easyQuest(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        switch (easyQuest(works.c00, works.c1, works.c2)) {
            case 1:
            case 2: // Второе действие
                easyQuest(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}


let exam = +prompt("Введите номер вопроса - получите историю ответа.");
var stepExam = "Вопрос № " + exam + "\n" + answers[exam - 1][0] + "Ваш ответ:\n " + answers[exam - 1][1]+ '\nСпасибо за игру!';
alert(stepExam);

// switch(exam){ //пробник
//         case 1: 
//             alert("Вопрос №1\n" + answers[0][0] + "\nВаш ответ:\n" + answers[0][1] + '\nСпасибо за игру!');
//             break;
//         case 2:
//             alert("Вопрос №2\n" + answers[1][0] + "\nВаш ответ:\n" + answers[1][1] + '\nСпасибо за игру!');
//             break;
//         case 3:
//             alert("Вопрос №3\n" + answers[2][0] + "\nВаш ответ:\n" + answers[2][1] + '\nСпасибо за игру!'); 
//             break;
//         case -1:
//             alert("Спасибо за игру!")   
//             break; 
//     }


//------------------------------------------
function easyQuest(par1, par2, par3) {
    do {//Выводим первый вопрос
        ok = false;
        event = +prompt(par1 + par2 + par3 + '-1 - Выход из игры');

        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.b0, event);
        }
        
    } while (!ok);
    switch(event){
        case 1:
            answers.push([par1, par2]);
            break;
        case 2:
            answers.push([par1, par3]);
            break;
        case -1:
            answers.push([par1, 'Закончили.']); 
            break;         
    }
    return event;
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}


