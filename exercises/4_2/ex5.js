function imprimaPiramideVazia(n) {
    let i=n-1;
    let j=1;
    for (let linha = 0; linha <n; linha +=2){
        let linhaAsterisco = '';
        let rn=n-i;
        let y=i/2;
        if(linha == 0 || linha == n-1){
            for (let ri=0; ri<y; ri++){
                linhaAsterisco += ' ';
            }
            for(let nAsteriscos = 0; nAsteriscos < rn; nAsteriscos++){
            linhaAsterisco += '*';
            }
            console.log(linhaAsterisco);
        } else {
            for (let ri=0; ri<y; ri++){
                linhaAsterisco += ' ';
            }
            linhaAsterisco += '*';
            for (k=1; k<=j; k+=1){
            linhaAsterisco += ' ';
            }
            linhaAsterisco += '*'
            console.log(linhaAsterisco)
            j+=2;
        }
        i-=2;
    }
}