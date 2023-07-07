//logica para implementar o link de afiliação

function afiliar() {
    const afiliado = document.getElementById('afiliado').value;

    window.location.href = "http://127.0.0.1:5500/index.html?" + afiliado;

    console.log(linkNew)
    
}




