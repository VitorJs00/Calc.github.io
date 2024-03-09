function calcular(){
    var nome= document.getElementById('txtn')
    var altura= document.getElementById('txta')
    var peso= document.getElementById('txtp')
    var res = document.getElementById('res')

    if(nome.value.length == 0 ||altura.value.length == 0 ||peso.value.length==0 ){
        window.alert('ERROR_ Informe os Dados corretamente')
    }else{
        var a = Number(altura.value)
        var p = Number(peso.value)
        var n = String(nome.value)
        var text = ''
        var imc = p/(a*a)
        if( imc <18 ){
            var text = ' Abaixo do Peso'
        }else if(imc>18 && imc <25){
            var text = 'Peso Normal'
        }else if(imc>=25 && imc <30){
            var text = 'Acima do Peso'
        }else if(imc>30 && imc <35){
            var text = 'Obesidade grau 1'
        }else if(imc>=35 && imc <40){
            var text = 'Obesidade grau 2'
        }else{
            var text = 'Obesidade grau 3'
        }
        res.innerHTML=`${n} seu IMC é ${imc} e voce esta ${text}`
    }


}