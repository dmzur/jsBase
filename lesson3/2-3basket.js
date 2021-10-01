// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


var basket = [
        {item: 'item1', count: 1, price: 100},
        {item: 'item2', count: 2, price: 200},
        {item: 'item3', count: 3, price: 300}
    ];

    function countBasketPrice(arr){
        var s = 0;
        for(var items of basket){
            s += items.price * items.count;
           console.log("У вас в корзине: " + items.item + ", в количестве " + items.count + " шт. на сумму " + (items.price * items.count) + " руб.")
        }
        
         console.log("Стоимость всех товаров в корзине - " + s + " руб.")
    }

    countBasketPrice(basket);