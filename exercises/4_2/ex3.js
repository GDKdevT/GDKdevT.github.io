function imprimaTrianguloInvertido(n) {
    let i=n-1;
    for (let linha = 0; linha < n; linha ++){
        let linhaAsterisco = '';
        let rn=n-i;
            for (let ri=0; ri<i; ri++){
                linhaAsterisco += ' ';
            }
            for(let nAsteriscos = 0; nAsteriscos < rn; nAsteriscos++){
            linhaAsterisco += '*';
            }
            console.log(linhaAsterisco);
        i--;    
    }
}
