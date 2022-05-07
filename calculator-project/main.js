const number = document.getElementsByName("btn");
const operar = document.getElementsByName("operation");
const result = document.getElementsByName("equal")[0];
const clean = document.getElementsByName("delete")[0];
let inputs = document.getElementById("date-input");
let current_operation = "";
let previous_operation = "";
let  operations = undefined;
number.forEach(function(btns){
      btns.addEventListener('click',function(){
           add_number(btns.innerText);
      })
});

operar.forEach(function(btns){
       btns.addEventListener('click',function(){
           select_operation(btns.innerText);
       })
})

result.addEventListener('click',function(){
    calculate();
    updatedInput();
});

clean.addEventListener('click', function(){
    clearInput();
    updatedInput();
})

function select_operation(op){
   if(current_operation == ""){
        return;
   }
   if (previous_operation !== ""){
        calculate();
   }
   operations = op.toString();
   previous_operation = current_operation;
   current_operation = "";
}

function calculate(){
    let cal;
    const previous= parseFloat(previous_operation);
    const current = parseFloat(current_operation);

    if(isNaN(previous) || isNaN(current)){
       return;
    }

    switch(operations){
           case "+" :
                  cal = previous + current;
                  break;
           case "-" :
                  cal = previous - current;
                  break;
           case "X" :
                   cal = previous * current;
                    break;
           case "/" : 
                    cal = previous / current;
                    break;
            default : 
                    return;                                          
    }
    current_operation = cal;
    operations = undefined;
    previous_operation = "";
}

function add_number(num){
   current_operation = current_operation.toString() + num.toString();
   updatedInput();
}

function clearInput(){
    current_operation = "";
    previous_operation = "";
    operations = undefined;
}

function updatedInput(){
    inputs.value = current_operation;
}

clearInput();