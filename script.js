function CalculateMaturityAmount(){

//Get input
const principle=parseFloat(document.getElementById('principle').value);
const interestrate=parseFloat(document.getElementById('interestrate').value);
const tenure=parseFloat(document.getElementById('tenure').value);

const maturityamount=principle+(principle*interestrate*tenure)/100;

document.getElementById('result').innerText=`Maturity Amount: ${maturityamount.toFixed(2)}`;




}

document.getElementById('calculatebtn').addEventListener('keydown',function(event){
    if(event.key=='Enter'){
        CalculateMaturityAmount();
    }
});