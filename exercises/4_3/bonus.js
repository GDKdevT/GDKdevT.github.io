// Lógica formada por : https://github.com/henriquerezende

function roman (str){

nstr =[];

str2 = str.split('');

    for (let letra of str2) {
        let refer ={
            I : 1,
            V : 5,
            X : 10,
            L : 50,
            C : 100,
            D : 500,
            M : 1000
        }
        for (let indice in refer){
            if (letra == indice){
                nstr.push(refer[indice])
            }
        }

    }
    somatotal=0;
    for (indice in nstr){
    
        if (nstr[indice] < nstr[parseInt(indice)+1] ){
            somatotal = somatotal - nstr[indice];
        }
        else {
            somatotal = somatotal + nstr[indice]
          
        }
    }


return somatotal;
}


