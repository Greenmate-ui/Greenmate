// script.js
document.addEventListener("DOMContentLoaded", () => {
  const qrCanvases = document.querySelectorAll(".qr-code");

  qrCanvases.forEach(canvas => {
    const link = canvas.getAttribute("data-link");
    if (!link) return;
    // Build absolute URL using the currently loaded page as base:
    // works for personal site (username.github.io) or project site (username.github.io/repo/)
    let url;
    try {
      url = new URL(link, window.location.href).href;
    } catch (e) {
      url = window.location.origin + "/" + link;
    }

    // create QR using QRious (library loaded in head)
    new QRious({
      element: canvas,
      value: url,
      size: 160,
      level: "H"
    });
  });
});
