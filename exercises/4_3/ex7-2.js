function stringVer(stringWord, stringEnding){
    final=stringEnding.length;
    compf=stringWord.length-final;
    answ = true
    for (let i = 0; i<stringEnding.length; i+=1){
        if(stringWord[compf] != stringEnding[i]){
            answ = false;
            break;
        }
        compf+=1;
    }

    return answ;
}

