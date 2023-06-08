const frm = document.querySelector("#frm");
const output = document.querySelector(".output");
const spinner = document.querySelector("#loading");
const qrcodeElement = document.querySelector("#qrcode"); // Updated selector
const btnSave = document.querySelector("#btn-save");

function generateQrCode(e) {
  e.preventDefault();
  const url = document.querySelector("#url").value;
  const size = document.querySelector("#size").value;
  const clrdark = document.querySelector("#colorDark").value;
  const clrWhite = document.querySelector("#colorLight").value;

  if (url === "") {
    alert("Please enter the URL");
  } else {
    // Display spinner
    spinner.style.display = "flex";
    // Hide spinner
    setTimeout(() => {
      spinner.style.display = "none";
      qrcodeElement.innerHTML = "";
      const qrcode = new QRCode(qrcodeElement, {
        text: url,
        width: parseInt(size),
        height: parseInt(size),
        colorDark: clrdark,
        colorLight: clrWhite,
        correctLevel: QRCode.CorrectLevel.H,
      });
    }, 1000);
  }
}

frm.addEventListener("submit", generateQrCode);

btnSave.addEventListener("click", () => {
  const imgsrc = qrcodeElement.querySelector("canvas").toDataURL("image/png");
  const link = document.createElement("a");
  link.href = imgsrc;
  link.download = "qrcode.png";
  link.click();
});
