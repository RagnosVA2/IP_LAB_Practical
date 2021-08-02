function add() {
    document.getElementById("addAns").innerHTML = "Answer : " + (Number(document.getElementById("addx").value) + Number(document.getElementById("addy").value));
}
function sub() {
    document.getElementById("subAns").innerHTML = "Answer : " + (Number(document.getElementById("subx").value) - Number(document.getElementById("suby").value));
}
function evenOdd() {
    let x = Number(document.getElementById("evenOddx").value);
    if (x % 2 === 0) {
        document.getElementById("evenOddAns").innerHTML = "Answer : Number is Even";
    }
    else {
        document.getElementById("evenOddAns").innerHTML = "Answer : Number is Odd";
    }
}
function factCal(n) {
    if (n == 1 || n == 0) return 1;
    else return n * factCal(n - 1);
}
function fact() {
    const num = Number(document.getElementById("factx").value);
    document.getElementById("factAns").innerHTML = "Answer : " + factCal(num);
}