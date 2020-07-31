//start code
//31-July-2020
//Al Nahian | https://alnahian.xyz

let qrData = document.getElementById("qr-data"),
    qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "Al Nahian",
        width: 200,
        height: 200,
        colorDark: "#8880ff",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    }),
    generateButton = document.getElementById("generate-button");

generateButton.addEventListener("click", function (e) {
    e.preventDefault();

    let data = qrData.value;
    qrcode.makeCode(data);

    if (data == "") {
        alert("You Cannot Leave Fields Empty!");
    }

});