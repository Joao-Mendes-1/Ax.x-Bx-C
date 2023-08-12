const button = document.getElementById('button')

function calcular (resultado){
    const a = (document.getElementById('a')).value
    const b = (document.getElementById('b')).value
    const c = (document.getElementById('c')).value
    if(a>0||a<0){
        if(c==0){
            alert('C precisa ser maior que zero')
            return
        }
        const delta = (b) * (b) - (4) * a * c

        if(delta < 0 ){
            alert('Delta negativo, não existem raizes S= [ ]')
            return
        }
        const raizDelta = (delta)** (1/2)
        const raiz1 = (-(b) + (raizDelta))/((a)*(2))
        const raiz2 = (-(b) - (raizDelta))/((a)*(2))
        console.log(delta)
        console.log(raizDelta)
        console.log(raiz1)
        console.log(raiz2)
        //button.style.display=('none')
        document.getElementById('resultado-conteiner').style.display=('flex')
        document.getElementById('resultado').innerHTML=('S = ['+raiz1 +  '; ' + raiz2 + ']')

    }else{
        alert("Não é possível realizar o calculo")
    }
    //console.log(raiz1, raiz2)
}

button.addEventListener('click', calcular)
