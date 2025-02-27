/**
 * Processo de renderização
 * Tela Principal 
**/

console.log("Processo de renderização")

// Envio de uma mensagem para o main abrir a janela
function cliente() {
    //console.log("teste do botão cliente")
    //uso da api(autoriada no preload.js)
    api.clientWindow()
}

// Envio de uma mensagem para o main abrir a janela
function os() {
    //console.log("teste do botão os")
    //uso da api(autoriada no preload.js)
    api.osWindow()
}
