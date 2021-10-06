// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
// десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function fragment(num){
    let frag = {};
    let number = String(num);
    if(num > 999 || num < 0){
        console.log("Не балуйтесь");
    }else if (num < 100){
        frag.еденицы = number[1];
        frag.десятки = number[0];
    }else{
        frag.еденицы = number[2];
        frag.десятки = number[1];
        frag.сотни = number[0];
    }
    return frag;
}    
console.log(fragment(12)); 
console.log(fragment(123)); 
console.log(fragment(1234));      
   
    