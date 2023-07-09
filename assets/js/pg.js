

//funçãos das cotas


const valorDaQtd = 3.99;
function addCotas(valor) {

    
    let valorDoCampo = document.getElementById('campo-cotas').value;
    

    if(valor === '-' && valorDoCampo > 1) {
        document.getElementById('campo-cotas').value = valorDoCampo - 1;

    } else if (valor > 0) {
        let a = parseInt(valor);
        let b = parseInt(valorDoCampo);

        document.getElementById('campo-cotas').value = a + b;
    }   /*else if (valor < 0 ) {
        document.querySelector('#campo-cotas').value = 1;
    }*/

//multiplicador das cotas pelo valor

    const cotaQtd = document.querySelector('#campo-cotas');

    const value = cotaQtd.value;

    let valorT = value * valorDaQtd;

    //console.log(valorT);

    let cotasTotal = document.querySelector('#qtdDasCotas');
    cotasTotal.innerHTML = value;

    let multiplicarValor = document.querySelector('#valorDasCotas');
    multiplicarValor.innerHTML = valorT.toFixed(2);

}

//recuperar quantidade das cotas e valor para o envio
function recuperarCotas () {
    let enviarCotas = document.querySelector('#campoEnvioCotas').value;
    const qtdCotasEnvio = document.querySelector('#campo-cotas').value;
    const valorDasCotas = 3.99 * parseInt(qtdCotasEnvio);

    let cotas = parseInt(enviarCotas) + parseInt(qtdCotasEnvio);

    cotas = document.querySelector('#campoEnvioCotas').value = qtdCotasEnvio;

    //recuperar afiliado

    let indicado = window.location.search;
    indicado = indicado.replace('?', '');
    indicado = indicado.replace('%20', ' ');

    document.querySelector('#enviarAfiliado').value = indicado;

    console.log(cotas);

}


const btnCotas = document.getElementById('btnPopup');


//fechar e abrir popup de compra

const buttonOpen = document.getElementById('btnPopup');

const modal = document.getElementById("popupFinalizar");

const buttonClose = document.getElementById('btnClose');

buttonOpen.onclick = function () {
    modal.showModal();
}

buttonClose.onclick = function () {
    modal.close();
}  


//controle de telefone e cpf

function ValidaCPF(){	
    let cpfCampo = document.getElementById("cpfCampo").value; 
    let cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;	 
    if (cpfValido.test(cpfCampo) == true)	{ 

    } else	{	 
        document.querySelector('#cpfCampo').value = '';
    }
}
function fMasc(objeto,mascara) {
    obj = objeto
    mask = mascara
    setTimeout("fMascEx()",1)
}

function fMascEx() {
    obj.value = mask(obj.value)
}

function mCPF(cpf){
    cpf = cpf.replace(/\D/g,"")
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}

//telefone

function mascaraTelefone( campo ) {
      
    function trata( valor,  isOnBlur ) {		
       valor = valor.replace(/\D/g,"");                      
       valor = valor.replace(/^(\d{2})(\d)/g,"($1)$2");      
       if( isOnBlur ) {		   
          valor = valor.replace(/(\d)(\d{4})$/,"$1-$2");   
       } else {
          valor = valor.replace(/(\d)(\d{3})$/,"$1-$2"); 
       }
       return valor;
    }
    
    campo.onkeypress = function (evt) {		 
       var code = (window.Event)? window.Event.keyCode : evt.which;   
       var valor = this.value		
       if(code > 57 || (code < 48 && code != 8 ))  {
          return false;
       } else {
          this.value = trata(valor, false);
       }
    }
    
    campo.onblur = function() {
       const num1 = document.getElementById('telefone').value;
       const num2 = document.getElementById('confTelefone').value;
    let valor = this.value;
       if( valor.length < 13) {
          this.value = ""
       } else if (num1 != num2) {
            document.getElementById('confTelefone').value = '';
       }else {      
          this.value = trata( this.value, true );
       }
    }
    
    campo.maxLength = 14;
}

//validar a igualdade dos numeros
    mascaraTelefone( document.getElementById('telefone') );
    mascaraTelefone(document.getElementById('confTelefone'));


//carrossel 

const imgs = document.querySelector('.containerPhoto');
const img = document.querySelectorAll('#r-photo img');

let idx = 0;

function carrossel() {
    idx++;

    if(idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 340}px)`
}

setInterval(carrossel, 3000);


//recuperar a queryString link de afiliado



