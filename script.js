var input = document.querySelector('textarea#campo');
var input2 = document.querySelector('textarea#campo2');
input.focus();

// (CODIFICAR)
function codificar() {
    if (input.value.length == 0) {
        alert('Digite algum texto no campo abaixo');
        input.focus();
    } else {
        // LIMPA O CAMPO TODA A VEZ QUE A FUNÇÃO É CHAMADA
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';
    

        var texto = input.value
        var txt = texto.replace(/e/igm, 'enter');
        var txt = txt.replace(/i/igm, 'imes');
        var txt = txt.replace(/a/igm, 'ai');
        var txt = txt.replace(/o/igm, 'ober');
        var txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('campo2').innerHTML = `${txt}`;
        input.value='';

        document.getElementById('copy').innerHTML = '<button class="botao3" onclick="copy()"><b>Copiar</b></button>';
    }
}
function decodificar() {
    if (input.value.length == 0) {
        alert('Digite algum texto no campo abaixo');
        input.focus();
        
    } else {
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';
        document.getElementById('campo').innerHTML = '';

        var texto = input.value
        var txt =  texto.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');
    
        document.getElementById('campo2').innerHTML = `${txt}`;
        input.value='';
        

        document.getElementById('copy').innerHTML = '<button class="botao3" onclick="copy()"><b>Copiar</b></button>';
    }
}
function copy() {
    document.querySelector('#campo2').select();
    document.execCommand('copy');
    alert('Texto Copiado!');
    input.focus();
}

var botao1 = document.querySelector('button.botao1');
botao1.onclick = codificar;

var botao2 = document.querySelector('button.botao2');
botao2.onclick = decodificar;