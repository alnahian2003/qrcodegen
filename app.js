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

//Downloading QR Code

let downloadButton = document.getElementById("download-button"),
    qrCanvas = document.querySelector("canvas"),
    generatedQrCode = document.querySelector("img");

downloadButton.addEventListener("click", function (e) {
    e.preventDefault();
    let data = qrData.value;

    if (data == "") {
        alert("Please Generate a QR Code To Download !");
    } else {
        const dataURI = qrCanvas.toDataURL("image / png");
        generatedQrCode.src = dataURI;
        // For Microsoft Edge or Old Browser Only
        if (window.navigator.msSaveBlob) {
            window.navigator.msSaveBlob(qrCanvas.msToBlob(), "qr-code.png")
        } else {
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.href = qrCanvas.toDataURL();
            a.download = "qr-code.png";
            a.click();
            document.body.removeChild(a);
        }
    }
});
