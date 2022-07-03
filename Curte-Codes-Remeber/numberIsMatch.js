var a = 5;
var b = 5;
var theNumberIsMatch;
// Verifica se os 2 nuemros são iguais se forem então theNumberIsMatch e true ! Se não e false
if (a == b) {
    theNumberIsMatch = true;
}else{
    theNumberIsMatch = false;
}

console.log(theNumberIsMatch);
document.body.innerHTML = "<h1>" + theNumberIsMatch + "</h1>";