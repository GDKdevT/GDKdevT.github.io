function grading (grade){
    if (grade>=0 && grade<50){
        return 'F';
    } if (grade>=50 && grade<60){
        return 'E';
    } if (grade>=60 && grade<70){
        return 'D';
    } if (grade>=70 && grade<80){
        return 'C';
    } if (grade>=80 && grade<90){
        return 'B';
    } if (grade>=90 && grade<=100){
        return 'A';
    } else {
        return 'Invalid grade';
    }
}