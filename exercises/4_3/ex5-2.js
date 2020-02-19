function comaparaArray (array){
    let arrayContador = [];
    let repetido = 0;
    for (let x in array) {
        let contador = 0;
        for (y in array){
            if (x!=y){
                if (array[x]==array[y]){
                    contador += 1;
                }
            }   
        }
        arrayContador[x] = contador;
    }

    let pretender = 0;
    let maior = 0;
    for (let x in arrayContador) {
        for (y in arrayContador){
            if (arrayContador[x]>arrayContador[y]){
                pretender = arrayContador[x];
                    if (pretender>maior){
                    maior = pretender;
                    repetido = array[x];
                }
            }
        }
    }
    console.log(repetido);
}