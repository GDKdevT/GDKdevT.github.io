function even (a, b, c){
    if ((a%2==0 && b%2 != 0 && c%2 !=0) || (b%2==0 && a%2 != 0 && c%2 !=0) || (c%2==0 && a%2 != 0 && c%2 !=0)){
        return true;
    } else{
        return false;
    }

}