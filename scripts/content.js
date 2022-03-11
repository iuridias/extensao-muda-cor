const corPagina = document.querySelector(".header-menu")

chrome.runtime.onMessage.addListener((request) => {
  trocaCor(request.cor);
})

function trocaCor(novaCor) {
  corPagina.style.backgroundColor = novaCor;
}