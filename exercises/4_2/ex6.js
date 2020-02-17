function ehPrimo (n) {
    if (n==1){
    return false
    }  
    else {
        let divisores=0;
        for (let numeroDiv = 2; numeroDiv < n; numeroDiv++){
            if (n%numeroDiv == 0){
            divisores++;
            }            
        }
        if (divisores == 0){
            return true
        } 
        else {
            return false
        }
    }
}    
