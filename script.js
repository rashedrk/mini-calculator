function getHistory() {
    return document.getElementById("history-value").innerText;
}
function printHistory(num) {
    document.getElementById("history-value").innerText=num;
}
function getOutput() {
        return document.getElementById("output-value").innerText;
}
function getFormattedNum(num) {
    if (num=="-") {
        return "";
    }
    var n=Number(num)
    var value = n.toLocaleString("en");
    return value;
}
function getNumber(num) {
    return Number(num.replace(/,/g,''));
}
function printOutput(num) {
    if (num=="") {
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNum(num);
    }
    
}

var number= document.getElementsByClassName("number")
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click",function() {
        var output=getNumber(getOutput());
        if (output != NaN) {
            output=output+this.value;
            printOutput(output);
        }
        
    })   
}
var operator= document.getElementsByClassName("operator")
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click",function() {
        if (this.id=="clear") {
            printHistory("");
            printOutput("");
        }
        else if (this.id=="backspace") {
            var output=getNumber(getOutput()).toString();
            if (output!="") {
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else {
            var output=getOutput();
            var history=getHistory();
            
             
                switch (this.value) {
                    case '+':
                        printHistory(output + '+');
                        printOutput("");
                        break;
                    case '-':
                        if(output!="")
                        {
                        printHistory(output + '-');
                        printOutput("");
                        }
                        else{
                            printOutput("-");
                        }
                        break;
                    case '/':
                        printHistory(output + '/');
                        printOutput("");
                        break;
                    case '*':
                        printHistory(output + '*');
                        printOutput("");
                        break;
                    case '%':
                            printHistory(output + '%');
                            printOutput("");
                            break;
                    case '=':
                        var result=eval(history + output);
                        printOutput(result);
                        printHistory("");
                            break;
                    
                }
            










/* 
           else if (output=="" || history!="") {
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1)
                }
            }
            if (output!="" || history!="") {
                output= output==""?
                output:getNumber(output);
                
                if (this.value="=") {
                    var result=eval(history+output);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.value;
                    printHistory(history);
                    printOutput("");
                }
            }*/
        } 
    })   
}
