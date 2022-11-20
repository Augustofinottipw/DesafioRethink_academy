function filtrarPorIdadeParaHabilitacao() {
    const pessoas = [{ name:"Fabiana Araujo", age:33 },
    { name:"Gabriel Gomes", age:25 },
    { name:"Fernando Henrique", age:17 },
    { name:"Ana Luíza", age:2 },
    { name:"Geralda do Nascimento", age:93 },
    { name:"Miguel Souza", age:70 },
    { name:"Antonio Miguel", age:69 }];
    return pessoas.filter( pessoa => pessoa.age >= 18);
}
console.log(filtrarPorIdadeParaHabilitacao());
