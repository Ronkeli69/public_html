/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */

function v01() {
    let year = Number(document.getElementById("year").value);
    let date = new Date();
    let currentYear = date.getFullYear();

    if (currentYear - year >= 18) {
        document.getElementById("allow").innerHTML = "Welcome!";
    }
    else {
        document.getElementById("allow").innerHTML = "too young";
    }
}

function v02() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    if (number1 < number2) {
        document.getElementById("smaller").innerHTML = number1;
    }
    else if (number1 > number2) {
        document.getElementById("smaller").innerHTML = number2;
    }
}

function v03() {
    const NEG = "One of the numbers is negative."
    const POS = "Both numbers are either positive or negative."

    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    if (number1 * number2 < 0) {
        document.getElementById("negative").innerHTML = NEG;
    }
    if (number1 * number2 >= 0) {
        document.getElementById("negative").innerHTML = POS;
    }
}

function v04() {
    const REC = "rectangle";
    const SQ = "square";

    let side1 = Number(document.getElementById("side1").value);
    let side2 = Number(document.getElementById("side2").value);

    if (side1 == side2) {
        document.getElementById("square").innerHTML = SQ;
    }
    else {
        document.getElementById("square").innerHTML = REC;
    }
}

function v05() {
    const EVEN = "even";
    const ODD = "odd";

    let number3 = Number(document.getElementById("number3").value);

    if (number3 % 2 == 0) {
        document.getElementById("even").innerHTML = EVEN;
    }
    else {
        document.getElementById("even").innerHTML = ODD;
    }
}

function v06() {
    let number3 = Number(document.getElementById("number3").value);
    if (2 * number3 > 0) {
        document.getElementById("positive").innerHTML = "positive";
    }
    else if (2 * number3 == 0) {
        document.getElementById("positive").innerHTML = "zero";
    }
    else {
        document.getElementById("positive").innerHTML = "negative";
    }
}

function v07() {
    let a = Number(document.getElementById("digit_a").value);
    let b = Number(document.getElementById("digit_b").value);
    let c = Number(document.getElementById("digit_c").value);
    let d = Number(document.getElementById("digit_d").value);

    let smallest = a;

    if (b < smallest) {
        smallest = b;
    }
    if (c < smallest) {
        smallest = c;
    }
    if (d < smallest) {
        smallest = d;
    }
    document.getElementById("smallest").innerHTML = smallest;

    let biggest = a;

    if (b > biggest) {
        biggest = b;
    }
    if (c > biggest) {
        biggest = c;
    }
    if (d > biggest) {
        biggest = d;
    }
    document.getElementById("biggest").innerHTML = biggest;
}
function v08() {
    let yearx = Number(document.getElementById("yearx").value);

    if ( yearx % 4 == 0 && yearx % 100 != 0) {
        document.getElementById("leap_year").innerHTML = "is leap year";
    }
    else if ( yearx % 4 == 0 && yearx % 100 == 0 && yearx % 400 == 0) {
        document.getElementById("leap_year").innerHTML = "is leap year";
    }
    else {
        document.getElementById("leap_year").innerHTML = "is not leap year";
    }
}

function v09() {
	const FLOWER1 = '<img alt="flower1" src="img/flower1.png">';
	const FLOWER2 = '<img alt="flower2" src="img/flower2.png">';
	const FLOWER3 = '<img alt="flower3" src="img/flower3.png">';
	const FLOWER4 = '<img alt="flower4" src="img/flower4.png">';  

    let number4 = Number(document.getElementById("number4").value);

    if (number4 % 3 == 0) {
        document.getElementById("flower").innerHTML = FLOWER1;
    }
    else {
        document.getElementById("flower").innerHTML = FLOWER2;
    }

    if (number4 > 10) {
        document.getElementById("flower").innerHTML += FLOWER3;
    }
    else {
        document.getElementById("flower").innerHTML += FLOWER4;
    }
}
