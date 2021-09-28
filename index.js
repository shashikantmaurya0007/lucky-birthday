//here we are hiding the privacy notes by keeping the display property none
function removePrivacyNotes() {
    let element = document.getElementById("privacy-notes");
    element.style.display = "none";
}

//calculating the sum of date value
function returnTheSum(date) {
    // console.log(date);

    const dmy = date.split("-");

    let sum = 0;
    dmy.map((a) => {
        a.split("").map((c) => {
            sum += parseInt(c);
        });
    });
    return sum;
}

function checkLucky(sum, luckyNumber) {
    console.log(sum, luckyNumber);
    if (sum % luckyNumber == 0) return true;

    return false;
}

function validate(event) {
    event.preventDefault();
    let date_value = document.getElementById("date").value;
    if (date_value == "" || date_value == undefined) {
        alert("enter the birthdate");
        return;
    }

    let luckyNumber_value = parseInt(
        document.getElementById("luckyNumber").value
    );

    if (
        luckyNumber_value == undefined ||
        document.getElementById("luckyNumber").value == ""
    ) {
        alert("enter the lucky number");
        return;
    }
    if (Number(document.getElementById("luckyNumber").value) < 0) {
        alert("please enter the positive lucky number");
        return;
    }
    if (luckyNumber_value < 0) {
        alert("enter the positive lucky number");
        return;
    }

    let sum = returnTheSum(date_value);

    if (!checkLucky(sum, luckyNumber_value)) {
        // console.log("true");
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("result").style.display = "block";
        document.getElementById("happy").style.visibility = "hidden";
    } else {
        document.getElementById("result").style.display = "none";
        document.getElementById("happy").style.visibility = "visible";
        console.log("false");
    }
}

document.getElementById("happy").style.visibility = "hidden";
document.getElementById("result").style.visibility = "hidden";