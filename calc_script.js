function getHistory(){
    return document.getElementById("history_value").innerText;
}

function printHistory(num){
    return document.getElementById("history_value").innerText = num;
}

function getOutput(){
    console.log("outputInFunc: ", document.getElementById("output_value").innerText)
    return document.getElementById("output_value").innerText;
}

function printOutput(num){
	document.getElementById("output_value").innerText=num;
}

let operator = document.getElementsByClassName("operator");
for(var i = 0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id =="ac"){
            printHistory("");
            printOutput("");
        }
        if(this.id == "reverse_sign"){

        }
        else{
			var output=getOutput();
			var history=getHistory();
            console.log("HISTORY1:", history);
            console.log("OUTPUT1:", output);
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
                    console.log("IS NAN");
					history= history.substr(history.length-1, history.length);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:Number(output);
				history=history+output;
				if(this.id=="op_="){
                    console.log("HISTORY:", history);
                    console.log("OUTPUT:", output);
					var result=eval(history);
                    console.log("RESULT:", result);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id.substr(this.id.length-1, this.id.length);
					printHistory(history);
					printOutput("");
				}
			}
		}
    }
    );
}

let num = document.getElementsByClassName('num_key');
for(var i = 0; i<num.length; i++){
    num[i].addEventListener('click', function(){
        var output = getOutput();
        var history = getHistory();
        output = output + Number(this.id.substr(this.id.length-1, this.id.length));
        printOutput(output);
    });
}