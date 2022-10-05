'use strict';

// Validates required form fields are not empty
function validateForm(field) {
    var list = ["rate", "years", "pv", "fv", "contribution"];
    var prefix = field.slice(0, 3);
    var suffix = field.slice(3);

    for (let i = 0; i < list.length; i++) {
        if (list[i] !== suffix) {
            var val = document.getElementById(prefix + list[i]).value;
            if (val === null || val === "") {
                return false;
            }
        }
    }

    return true;
}


// Calculates ending balance
function calcFV() {
    if (!validateForm("fv-fv")) {
        alert("Fill in all required fields.");
        return false;
    } 
 
    let rate = document.getElementById("fv-rate").value;
    rate /= 100;
    let years = document.getElementById('fv-years').value;
    let contribution = document.getElementById("fv-contribution").value;
    let pv = document.getElementById('fv-pv').value;
    let fv = contribution * (Math.pow((1+rate), years) - 1)/rate + pv * Math.pow((1+rate), years);
    let num = Number(fv.toFixed(2)).toLocaleString();
    document.getElementById("fv-fv").placeholder = num;
    return false;
}

// calculates contribution amount
function calcContri() {
    if (!validateForm("co-contribution")) {
        alert("Fill in all required fields.");
        return false;
    } 

    let rate = document.getElementById("co-rate").value;
    rate /= 100;
    let years = document.getElementById('co-years').value;
    let pv = document.getElementById('co-pv').value;
    let fv = document.getElementById('co-fv').value;
    let contribution = (fv - pv * Math.pow((1 + rate), years)) * rate/(Math.pow((1 + rate), years) - 1);
    let num = Number(contribution.toFixed(2)).toLocaleString();
    document.getElementById("co-contribution").placeholder = num;
    return false;
}


// Resets form and associated not required field
function resetForm(formName, formField) {
    document.getElementById(formName).reset();
    document.getElementById(formField).placeholder = "Not required";
}