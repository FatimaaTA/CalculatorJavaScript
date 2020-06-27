function getNumber(num){
    var result = document.getElementById("result");
    result.value +=num;

}

function clearResult(){
    var result = document.getElementById("result");
    result.value ="";

}

function getResult(){
    var result = document.getElementById("result");
    result.value =eval(result.value);

}

function back() {
    var result = document.getElementById("result");
    var value = document.getElementById("result").value;
    result.value = value.substr(0, value.length - 1);
}

function squareRoot() {
    var result = document.getElementById("result");
    result.value =Math.sqrt(result.value);
}

function square() {
    var result = document.getElementById("result");
    result.value =Math.pow(result.value,2);
}

function cube() {
    var result = document.getElementById("result");
    result.value =Math.pow(result.value,3);
}

function cubeRoot() {
    var result = document.getElementById("result");
    result.value =Math.pow(result.value,1/3);
}