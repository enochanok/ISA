
function compute()
{
    
    var principal = parseInt(document.getElementById("principal").value);
    if (principal <= 0) {
        alert("Please enter a positive number");
        return; 
      }
    var rate = parseFloat(document.getElementById("rate").value);
    var year = parseInt(document.getElementById("years").value);
    var future = (new Date().getFullYear()) + year;
    var interest = parseFloat((principal * rate * year) / 100);
    let amount  = principal + interest;
    document.getElementById("result").innerHTML = 
        "If you deposit <mark>$" 
       + principal + "</mark> at an interest rate of <mark>" 
       + rate + "%</mark>, <br> You will receive an amount of <mark>$" 
       + amount + " </mark> in the year<mark> " 
       + future +" </mark>.";

 
    }


function updateRate()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_val").textContent = rate;
}  
   