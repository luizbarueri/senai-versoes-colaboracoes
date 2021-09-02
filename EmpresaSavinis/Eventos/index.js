var dataAtual,  dataEvento, idade
var participantes = [];
var palestrantes = ["Antonio", "Luiz"];
dataAtual = new Date("02/09/2021");
dataEvento = new Date("10/09/2021");

var txt
idade = 18;
console.log("Data Atual  : " + dataAtual);
console.log("Idade       : " + idade);
console.log("Data Evento : " + dataEvento);
if (dataEvento >= dataAtual) {
    if (idade < 18) {
        console.log("Idade não permitida para este Evento!");
    }
    else {
        console.log("Permitir Cadastro");
        //cadastrar novo
        for(let i=0; i<=5;i++){
            participantes.push("Novo - " + i);
            console.log(participantes[participantes.length-1])
        }
    }
} else {
    console.log("Negar Cadastro, Data Incorreta!");
}
console.log("");
console.log("Total Palestrantes:  " + palestrantes.length); 
console.log("Total Participantes: " + participantes.length);
