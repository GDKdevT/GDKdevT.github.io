function comaparaArray (array){
    let menor = 0;
    for (let x in array) {
        for (y in array){
            if (array[x]<array[y]){
                menor = x;
            }
        }
    }
    console.log(menor);
}