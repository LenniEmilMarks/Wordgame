

function timer (){
    var tens = document.getElementById("tens");
    var seconds = document.getElementById("seconds");

    if(timer === false) {
        tens.style.display = "none";
        seconds.style.display = "none";
    }
    else {
        tens.style.display = "block";
        seconds.style.display = "block";
    }

}

export default timer;