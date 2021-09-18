/*Thông tin liên hệ */
function Contact() {
    var image = document.getElementById("img-contact");
    image.className += "  animate__animated animate__zoomIn animate__delay-2s";
    var inputContact = document.getElementById("contact");
    inputContact.className += "  animate__animated animate__zoomIn animate__delay-2s";
}
function Submit() {
    var fullName = document.getElementById("fullName").value;
    var phoneNumber = document.getElementById("phone").value;
    var describe = document.getElementById("describe").value;
    if (fullName && phoneNumber && describe) {
        alert('Thông tin được gửi thành công!');
    }
    else {
        alert('Vui lòng kiểm tra lại thông tin!');
    }
}