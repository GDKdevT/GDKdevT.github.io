function comaparaArray (array){
    let maior = 0;
    for (let x in array) {
        for (y in array){
            if (array[x]>array[y]){
                maior = x;
            }
        }
    }
    console.log(maior);
}