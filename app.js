function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = "";
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}

function getSqr(){
    var result = document.getElementById("result");
    result.value = result.value*result.value
}

function getSqrt(){
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value)
}


function getCos(){
    var result = document.getElementById("result");
    result.value = Math.cos(result.value)
}

function getSin(){
    var result = document.getElementById("result");
    result.value = Math.sin(result.value)
}

function getTan(){
    var result = document.getElementById("result");
    result.value = Math.tan(result.value)
}

function getLog(){
    var result = document.getElementById("result");
    result.value = Math.log(result.value)
}

function getE(){
    var result = document.getElementById("result");
    result.value = Math.E* result.value;
}

function getPer(){
    var result = document.getElementById("result");
    result.value = result.value / 100
}

function getBack() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
} 