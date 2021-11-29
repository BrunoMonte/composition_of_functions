function composição(...funcoes) {
    return function(valor){                             //composição de funções
        return funcoes.reduce((acc , fn) => {
            return fn(acc)
        }, valor)
    }
}    
function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return  `${texto}!!!`
}

function tornarLento(texto){
    return texto.split('').join(' ')
}

const resultado = composição(
    gritar,
    enfatizar,
    tornarLento
)
console.log(resultado('composição de funções'))