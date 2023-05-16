// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let movie=document.getElementById("movie");
let wallet=document.getElementById("wallet");
wallet.innerText=localStorage.getItem("amount")
let w=+localStorage.getItem("amount")
console.log('w:',typeof(w) )

let seats=+document.getElementById("number_of_seats").value;
console.log('seats:',typeof(seats) )

let data=JSON.parse(localStorage.getItem("movie"))

function check(){
if((seats*100)>w){
    alert("Insufficient Balance !")
}else{
    alert("Booking Successful!")
}

}