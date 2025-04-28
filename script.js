const mensagem = document.querySelector('.mensagem')
const botao = document.querySelector('.botao')
const resultado = document.querySelector('.resultado')


botao.addEventListener('click', () => {
    const texto = mensagem.value
    const deslocamento = 3 
    let textoCifrado = ''

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i]

        if (letra >= 'A' && letra <= 'Z') {
            let codigo = letra.charCodeAt(0)
            letra = String.fromCharCode(((codigo - 65 + deslocamento) % 26) + 65)
        }
        else if (letra >= 'a' && letra <= 'z') {
            let codigo = letra.charCodeAt(0)
            letra = String.fromCharCode(((codigo - 97 + deslocamento) % 26) + 97)
        }
        
        textoCifrado += letra
    }

    resultado.textContent = textoCifrado
})
