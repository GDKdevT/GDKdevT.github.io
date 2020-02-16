function netSalary (grossSalary){
    if (grossSalary<1556.95){
        inss=grossSalary*0.08;
    }  if (grossSalary>=1556.95 && grossSalary<2594.93){
        inss=grossSalary*0.09;
    } if (grossSalary>=2594.93 && grossSalary<5189.93){
        inss=grossSalary*0.11;
    } if (grossSalary>=5189.93){
        inss=570.88
    }

    grossSalary-=inss;

    if(grossSalary<1903.99){
        ir=0;
    } if (grossSalary>=1903.99 && grossSalary<2826.66){
        pir=0.075;
        parcel=142.8;
        ir=(grossSalary*pir-parcel);
    } if (grossSalary>=2826.66 && grossSalary<3751.06){
        pir=0.15;
        parcel=354.8;
        ir=(grossSalary*pir-parcel);
    } if (grossSalary>=3751.06 && grossSalary<4664.69){
        pir=0.225;
        parcel=636,13;
        ir=(grossSalary*pir-parcel);
    } if (grossSalary>=4664.69){
        pir=0.275;
        parcel=354.8;
        ir=(grossSalary*pir-parcel);
    }

    grossSalary-=ir;

    return grossSalary;
}