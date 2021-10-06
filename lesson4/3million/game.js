let cash = 0;
for (let i = 0; i <= million.length; i++) {
    let userAnswer = +prompt(million[i].question + "\nВарианты ответов:\n" + million[i].answer1 +
        million[i].answer2 + million[i].answer3 + million[i].answer4 + "Введите номер правильного варианта");
    if (userAnswer !== million[i].right) {
        alert("Вы проиграли! Это не верный ответ!\n Верный ответ - " + million[i].right + "\nВаш выйгрыш - " + cash);
        break;
    } else if (userAnswer == million[i].right) {
        cash += 100;
        alert("Это правильный Ответ! Выйгрыш - " + cash);

    }

}
