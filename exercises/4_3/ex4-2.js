function comaparaString (array){
    let maior='';
    let pretender='';
    for (let x in array) {
        for (y in array){
            if (array[x].length>array[y].length){
                pretender = array[x];
                    if (pretender.length>maior.length){
                        maior=pretender;
                    }
            }
        }
    }
    console.log(maior);
}