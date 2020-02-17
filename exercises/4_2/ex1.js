function imprimaQuadradoAsterisco(n) {
    for (let linha = 0; linha < n; linha ++){
        let linhaAsterisco = '';
        for(let nAsteriscos = 0; nAsteriscos < n; nAsteriscos++){
            linhaAsterisco += '*';
        }
        console.log(linhaAsterisco);
    }



}