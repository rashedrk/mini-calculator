function getHistory() {
    return document.getElementById("cal-history").innerText;
}
function printHistory(num) {
    document.getElementById("cal-history").innerText=num;
}
function getOutput() {
        return document.getElementById("cal-result").innerText;
}
function getFormattedNum(num) {
    var n=Number(num)
    var value = n.toLocaleString("en");
    return value;
}
function getNumber(num) {
    return Number(num.replace(/,/g,''));
}
function printOutput(num) {
    document.getElementById("cal-result").innerText=getFormattedNum(num);
}

var number= document.getElementsByClassName("number")
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click",function() {
        var output=getNumber(getOutput());
        if (output != NaN) {
            output=output+this.value;
            printOutput(output);
        }
        
    })   
}
var operator= document.getElementsByClassName("operator")
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click",function() {
        if (this.id=="clear") {
            printHistory("");
            printOutput("");
        }
        else if (this.id=="backspace") {
            var output=getNumber(getOutput()).toString();
            if (output!="") {
                output=output.substr(0,output.length-1
                    );
                printOutput(output);
            }
        }

    })   
}
