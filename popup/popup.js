const elementoCor = document.getElementById("cor-escolhida");
const botaoTrocar = document.getElementById("trocar-cor");

let cor = localStorage.getItem("cor");
elementoCor.value = cor;

elementoCor.addEventListener("change", (event) => {
  cor = event.target.value;
  localStorage.setItem("cor", cor);
})

botaoTrocar.addEventListener("click", () => {
  enviarScript({cor});
})

function enviarScript(script) {
  chrome.tabs.query({active:true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, script)
  })
}



