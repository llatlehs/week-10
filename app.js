function name() {
    var name = promt("waht is your name?")
    alert(`Hello ${name}!`)
    return name
}
name()

function ask() {
    var forc = prompt("what temp would you like to convert c or f?")
    return forc
}

function c() {
    var t  = prompt('enter your temp in f')
    return t
}

function f() {
    var t = prompt('enter temp in c')
    return t
}

function convert_f() {
    var total = ((c-32) * 5) / 9
    alert(`your temp in f is ${total}`)
}
function convert_c() {
    var total = ((f * 9) / 5) + 32
    alert(`your temp in f is ${total}`)
}

var ask = ask();
if (ask == "c"){
    var c = c()
    
    convert_f()
} else if (ask == "f") {
    var f = f()

    convert_c()
}else {
    alert(`you didnt enter c or f`)
}