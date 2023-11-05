var NUMERO = document.getElementById('Numero');
var RESUL = document.getElementById('Resultado');
var Errou = 0;
var Errar = document.getElementById('Erros');

function Enviar(){
    var Numero_1 = Number(NUMERO.value);
    var Numero_aleatorio = Math.floor(Math.random() * 11);
    if(Numero_1 != ''){
        if(Numero_1 < 0 || Numero_1 > 10){
            alert("Número errado, digite novamente de 0 ao 10");
        }else{
            if(Numero_1 == Numero_aleatorio){
                RESUL.innerHTML = `Vendedor: ` + Numero_aleatorio;
                Errar.innerHTML = `Números de erros: ` + Errou;
}
            else{
                RESUL.innerHTML = Numero_aleatorio;
                Errou++;
            }
        }
    }else{
        alert("ERRO, digite algo para que possa proseguir");            
    }
}

