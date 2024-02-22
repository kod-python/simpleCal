function calculate(){
    let firstNumber = document.getElementById("num1")
    let firstNumberInput = parseFloat(firstNumber.value)


    let secondNumber = document.getElementById("num2")
    let secondNumberInput = parseFloat(secondNumber.value)


    let operation = document.getElementById("operation").value

   

    let result;




    switch (operation) {
        case "add":
            result = add(firstNumberInput,secondNumberInput)
            
            break;



        case "subtract":
            result = subtract(firstNumberInput,secondNumberInput)
                
            break;
                
                
        case "multiply":
            result = multiply(firstNumberInput,secondNumberInput)
                    
            break;


        case "divide":
            result = divide(firstNumberInput,secondNumberInput)
                
                break;      
    
        default:

           result = "invalid operations"
           
    }

    
    let resultDisplay = document.getElementById("result").innerHTML = `result ${result}`


}




function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}


function multiply(a,b){
    return a * b;
}


function divide(a,b){

    if(b == 0){
        return "can not divide by zero"
    }
    return a / b;
}