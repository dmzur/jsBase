
let a = +prompt("insert num");
let b = +prompt("insert num");

if (((a >= 0) && (b >= 0))) {
    console.log("результат " + (a - b));
} else if (((a < 0) && (b < 0))) {
    console.log("результат " + (a * b));
} else {
    console.log("результат " + (a + b));
}

