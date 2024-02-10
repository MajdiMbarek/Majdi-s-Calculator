function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function deleteLast() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);

        if (typeof result !== 'undefined') {
            document.getElementById("display").value = result;
        } else {
            document.getElementById("display").value = "You have to calc a number";
        }
    } catch (error) {
        document.getElementById("display").value = "None!";
    }
}
