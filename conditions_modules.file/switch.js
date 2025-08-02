/* Exercicio 1: 
Verifica o dia da semana com base em um numero (1 a 3); 
1 -> mONDAY 
2 -> tUESDAY 
oUTRO numero -> Dia invalido

Resolve o exercicio 2 vezes. 
Primeiro a usar so if___else e depois so com switch__case */

/* The switch express */

/* switch(expression) {
    case x:
        // code block
        break;
    case y: 
        // code block
        break;
      default:
      // code block
}*/

/* How it works: 

     * The swtich expression is evaluated once. 
    * The value of the expression is compared with the value of each case. 
    *  If there is a match, the associated block of code is executed. 
    *  If there is no match,  the default code block is executed. */

/*let day = 1; 

if (dia === 1) {
    console.log("Monday");
} else if (dia === 2) {
    console.log("Tuesday"); 
} else if (dia === 3) {
    console.log("Wednesday"); 
} else if (dia === 4) {
    console.log("Thursday");
} else {
    console.log("Invalid day. Please try again");
}

//ou */

let day = 4;

switch(day) {
    case 1:
        console.log("Monday");
        break; 
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday"); 
        break;
    case 5 : 
        console.log("Friday"); 
        break;
    default : 
        console.log("Invalid day bro, Please try again");
}
