function borrar(){
    document.getElementById('calculadora').reset();
}

function opcion(){
    let value = document.getElementById('select_ope').value;

    if(value == 'vacio'){
        document.getElementById('op_basic').style.display = 'none';
        document.getElementById('log').style.display = 'none';
        document.getElementById('pot').style.display = 'none';
        document.getElementById('por').style.display = 'none';
        document.getElementById('raiz').style.display = 'none';
        document.getElementById('raiz').style.display = 'none';
        document.getElementById('resultado').style.display = 'none';
    }else if(value == 'op_basic'){
        document.getElementById('op_basic').style.display = 'block';
        document.getElementById('log').style.display = 'none';
        document.getElementById('pot').style.display = 'none';
        document.getElementById('por').style.display = 'none';
        document.getElementById('raiz').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
    }else if(value == 'log'){
        document.getElementById('op_basic').style.display = 'none';
        document.getElementById('log').style.display = 'block';
        document.getElementById('pot').style.display = 'none';
        document.getElementById('por').style.display = 'none';
        document.getElementById('raiz').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
    }else if(value == 'pot'){
        document.getElementById('op_basic').style.display = 'none';
        document.getElementById('log').style.display = 'none';
        document.getElementById('pot').style.display = 'block';
        document.getElementById('por').style.display = 'none';
        document.getElementById('raiz').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
    }else if(value == 'por'){
        document.getElementById('op_basic').style.display = 'none';
        document.getElementById('log').style.display = 'none';
        document.getElementById('pot').style.display = 'none';
        document.getElementById('por').style.display = 'block';
        document.getElementById('raiz').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
    }else{
        document.getElementById('op_basic').style.display = 'none';
        document.getElementById('log').style.display = 'none';
        document.getElementById('pot').style.display = 'none';
        document.getElementById('por').style.display = 'none';
        document.getElementById('raiz').style.display = 'block';
        document.getElementById('resultado').style.display = 'block';
    }
}

function suma(){
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);
    document.getElementById('resul').innerHTML = num1+num2;
}

function resta(){
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;
    document.getElementById('resul').innerHTML = num1-num2;
}

function multiplicar(){
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;
    document.getElementById('resul').innerHTML = num1*num2;
}

function dividir(){
    let num1 = document.getElementById('n1').value;
    let num2 = document.getElementById('n2').value;
    document.getElementById('resul').innerHTML = num1/num2;
}

function logaritmo(){
    let num1 = document.getElementById('nlog1').value;
    let num2 = document.getElementById('nlog2').value;
    document.getElementById('resul').innerHTML = Math.log(num2) / Math.log(num1);
} 

function potencia(){
    let num1 = document.getElementById('npot1').value;
    let num2 = document.getElementById('npot2').value;
    document.getElementById('resul').innerHTML = Math.pow(num1, num2);
}

function porcentaje(){
    let num1 = document.getElementById('npor1').value;
    let num2 = document.getElementById('npor2').value;
    document.getElementById('resul').innerHTML = (num1/100)*num2;    
}

function raiz_2(){
    let nr = document.getElementById('nr').value;
    document.getElementById('resul').innerHTML = Math.sqrt(nr); 
}

function raiz_3(){
    let nr = document.getElementById('nr').value;
    document.getElementById('resul').innerHTML = Math.cbrt(nr); 
}
