function verificaPalindrome(string) {
    let splitString = string.split('');
    let reverseString = splitString.reverse();
    let joinReverse = reverseString.join ("");
    if (joinReverse === string){
        return true;
    } else {
        return false;
    }
}