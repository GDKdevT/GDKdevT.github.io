let info ={
    personagem: "Margarida",
    origem:"Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
}

let info2 ={
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
}

console.log("Bem-vinda,", info.personagem)
console.log (info)

for (let x in info) {
    console.log(x);
};

for (let x in info) {
    console.log(info[x]);
};

for (let x in info) {
    if (x == "recorrente" && info[x] == "Sim"){
        console.log ("Ambos recorrentes");
        break;
    }
    console.log(info[x], "e", info2[x]);
};