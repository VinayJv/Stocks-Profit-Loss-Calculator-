var initialPrice = document.getElementById("initialPrice");
var numberOfShare = document.getElementById("numberOfShare");
var finalPrice = document.getElementById("finalPrice");
document.getElementById("Calculate").addEventListener("click", clickHandler);
function clickHandler() {
    const result= (finalPrice.value-initialPrice.value)*numberOfShare.value;
    var perCent = result/initialPrice.value;
    if(result>0) {
        document.getElementById("ans").innerHTML = "The Profit is "+result+" and the percent is "+perCent*100+"%"; 
    }
    else if(result<0) {
        document.getElementById("ans").innerHTML = "The Loss is "+result+ " and the percentage is "+perCent*100+"%";
    }
    else if (result===0)
    {
        document.getElementById("ans").innerHTML = "Enter some value";
    }
}