var tall = Math.round(Math.random() * 100)
console.log(tall);
var i = 1;

document.getElementById("btn2").addEventListener("click", function () {
    var tall2 = Math.round(Math.random() * 100)
    document.getElementById('inp').value = tall2;
    if (tall > tall2) {
        i++;
        document.getElementById('txt').innerHTML = (tall2) + " is too small";
    } else if (tall < tall2) {
        i++;
        document.getElementById('txt').innerHTML = (tall2) + " is too big";
    } else {
        test();
    }
})

document.getElementById("btn1").addEventListener("click", function () {
    var mittTall = document.getElementById("inp").value;
    if (tall > mittTall) {
        i++;
        document.getElementById('txt').innerHTML = (mittTall) + " is too small";
    } else if (tall < mittTall) {
        i++;
        document.getElementById('txt').innerHTML = (mittTall) + " is too big";
    } else {
        test();
    }
})


function test() {
    alert("U did it the number was: " + (tall) + " You got it in " + (i) + " guesses")
    let text = `Do you want to play again?`
    if (confirm(text) == true) {
        location.reload();
    } else {
        window.close();
    }
}
