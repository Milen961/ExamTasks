function calculator(number, operator, number2){
    let sum;
    switch(operator){
        case '+':
             sum = number + number2;
            console.log(sum.toFixed(2));
            break;
            
            case '-':
             sum = number - number2;
            console.log(sum.toFixed(2));
            break;

            case '*':
                 sum = number * number2;
                console.log(sum.toFixed(2));
                break;

                case '/':
                 sum = number / number2;
                console.log(sum.toFixed(2));
                break;


    }

}
calculator(5,'+',10)
