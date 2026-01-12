/*Create a faulty calculator using javascript

This faulty calculator does following:
1.It take two numbers as input from the user
2.It performs wrong operations as follows:

+ -----> -
* -----> +
- -----> /
/ -----> **


And it performs wrong operations only 10% of the times
*/
var op1=Number(prompt("Please enter first number"));
var op2=Number(prompt("Please enter second number"));
var operand=prompt("enter the operation(+,*,-,/) that you wish to perform")

function calculator (op1,op2){
    if(Math.random()<=0.1){
        if(operand=='+'){
            return op1-op2
        }
        else if(operand=='*'){
            return op1+op2
        }
        else if(operand=="-"){
            return op1/op2
        }
        else if(operand=="/"){
            return op1**op2
        }
    }
    else{
         if(operand=='+'){
            return op1+op2
        }
        else if(operand=='*'){
            return op1*op2
        }
        else if(operand=="-"){
            return op1-op2
        }
        else if(operand=="/"){
            return op1/op2
        }
    }
}
console.log(`Your result is ${calculator(op1,op2)}`)