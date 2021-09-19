/*Thông tin liên hệ */
function Submit() {
    var fullName = document.getElementById("fullName").value;
    var phoneNumber = document.getElementById("phone").value;
    var describe = document.getElementById("describe").value;
    if (fullName && phoneNumber && describe) {
        document.getElementById('modal').style.display = "block";
        document.getElementById('validation').style.display = "block";
        document.getElementById('check-validation').style.display = "none";
    }
    else {
        document.getElementById('check-validation').style.display = "inline";
    }
}

function goHome() {
    document.getElementById('modal').style.display = "none";
    document.getElementById('validation').style.display = "none";
}