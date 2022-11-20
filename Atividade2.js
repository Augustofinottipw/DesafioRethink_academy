function manipulaArray() {
    const pessoas = [
        { name:"Fabiana Araujo", age:33 },
        { name:"Gabriel Gomes", age:25 },
        { name:"Fernando Henrique", age:17 },
        { name:"Ana Luíza", age:2 },
        { name:"Geralda do Nascimento", age:93 },
        { name:"Miguel Souza", age:70 },
        { name:"Antonio Miguel", age:69 }
    ];

    console.log('=> ordem original')
    console.log(pessoas)
    
    const ordemReversa = pessoas.reverse()
    console.log('=> ordem reversa')
    console.log(ordemReversa)
    
    console.log('=> contém a palavra Miguel')
    console.log(pessoas.filter(p => (p.name).includes("Miguel")));
}
manipulaArray()