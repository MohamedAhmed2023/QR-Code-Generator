let imgBox = document.getElementById("img-box");
let QrImg = document.getElementById("Qr-img");
let QrText = document.getElementById("QrText");

function GenerateQR() {
  if (QrText.value.length > 0) {
    QrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      QrText.value;
    imgBox.classList.add("show-img");
  }
}
