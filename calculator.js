function add(a, b){
    
    return parseFloat(a) + parseFloat(b);
}
function subtract(a,b){
    return parseFloat(a) - parseFloat(b);
}
function multiply(a,b){
    return parseFloat(a) * parseFloat(b);
}
function divide(a,b){
    return parseFloat(a) / parseFloat(b);
}

function operate(operator,num1,num2){

    switch(operator){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*': 
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
        default:
            break;
    }
}