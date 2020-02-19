function somaRegressiva(n){
    soma=n;
    for(let i=1; i<n; i+=1){
        soma=soma + (n-i);
    }
    
    return soma;
}