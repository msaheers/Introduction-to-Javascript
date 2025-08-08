function adicionarPropriedade(objeto, chave, valor) {
    objeto[chave] = valor;
    return objeto;
}

let person = {name: "Joao" };
console.log(adicionarPropriedade(person, "idade", 28));

