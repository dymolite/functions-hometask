calc(prompt(),prompt(),prompt());

function calc(a,b,c) {
    switch (c) {
        case "+":
            alert(a+b)
            break;
        case "-":
            alert(a-b)
            break;
        case "*":
            alert(a*b)
            break;
        case "/":
            alert(a/b)
            break;
        default:
            alert("Input right arithmetic operator")
            break;
    }
}

