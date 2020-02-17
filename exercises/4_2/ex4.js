function imprimaPiramideAsterisco(n) {
    let i=n-1;
    for (let linha = 0; linha <=n; linha +=2){
        let linhaAsterisco = '';
        let rn=n-i;
        let y=i/2;
            for (let ri=0; ri<y; ri++){
                linhaAsterisco += ' ';
            }
            for(let nAsteriscos = 0; nAsteriscos < rn; nAsteriscos++){
            linhaAsterisco += '*';
            }
            console.log(linhaAsterisco);
        i-=2;
           
    }
}