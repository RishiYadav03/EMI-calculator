function simpleinterestcalculator(p,r,t){
    return p*r*t/100;
}

function emicalculator(p,n,r){
    n = n*12;
    r = r/12/100;
    var emi = p * r * (1+r)**n / ((1+r)**n-1);
    return emi;
}

function discountcalculator(price,discount){
    return price - (price * discount/100);
}

function tempreaturecalculator(temp){
    return (temp*9/5)+32;
}

function agecalculator(dob){
    // console.log(dob);
    // console.log(dob.split("-"));
    // console.log(dob.split("-")[0]);
    var obj = new Date();
    // console.log(obj.getFullYear());
    return obj.getFullYear() - dob.split("-")[0];  
}

function quantitycalculator(qty,price){
    return qty*price;
}

function powercalculator(num, pow){
    return num**pow;
}

function simplecalculator(no1,no2,type){
    switch(type){
        case '+':
            return no1 + no2;
        case '-':
            return no1 - no2;
        case '*':
            return no1 * no2;
        case '/':
            return no1 / no2;
        default:
            return null;
    }
}

export{
    powercalculator,
    simpleinterestcalculator,
    emicalculator,
    discountcalculator,
    tempreaturecalculator,
    agecalculator,
    quantitycalculator,
    simplecalculator
}