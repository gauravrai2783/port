// Store the wallet amount to your local storage with key "amount"

let localAmount=JSON.parse(localStorage.getItem("amount"))

function paisa(){
   let amount=document.getElementById("amount").value;
   let wallet=document.getElementById("wallet").innerText=amount;
   localStorage.setItem("amount",amount)
}
