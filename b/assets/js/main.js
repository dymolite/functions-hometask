
inputName(prompt("Please enter your name:"), prompt("Please enter your surname:"), prompt("Please enter your father's name:"));

function inputName(name, surname, fathersName) {

    if (surname === "" && fathersName === "") {
        alert(name);
    } else if (fathersName === "") {
        alert(surname + ' ' + name);
    } else {
        alert(name[0] + '.' + surname + ' ' + fathersName);
    }
}

