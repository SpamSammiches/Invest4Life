function calcFV() {
    if (!validateForm()) {
        alert("All fields must be filled in.")
        return false;
    }

    let rate = document.getElementById("rate").value;
    rate /= 100;
    let years = document.getElementById('years').value;
    let contribution = document.getElementById("contribution").value;
    let pv = document.getElementById('pv').value;
    var fv = contribution * (Math.pow((1+rate), years) - 1)/rate + pv * Math.pow((1+rate), years);

    document.getElementById("form-result").textContent = "";
    var newNode = document.createElement("h1");
    newNode.textContent = "Balance At Retirement";
    document.getElementById('form-result').append(newNode);
    newNode = document.createElement("h1")
    var num = "$" + Number(fv.toFixed(2)).toLocaleString();
    newNode.textContent = num;
    document.getElementById("form-result").append(newNode);
    return false;
}

function validateForm() {
    let rate = document.getElementById("rate").value;
    let years = document.getElementById('years').value;
    let contribution = document.getElementById("contribution").value;
    let pv = document.getElementById('pv').value;

    if (rate === null || rate === "" 
        || years === null || years ===""
        || contribution === null || contribution === ""
        || pv === null || pv === "") {
        return false;
    }

    return true;
}