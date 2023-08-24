const balance = document.getElementById("balance")
const money_plus = document.getElementById("money-plus")
const money_minus = document.getElementById("money-minus")
const form = document.getElementById("form")
const text = document.getElementById("text")
const amount = document.getElementById("amount")


const dataTransaction=[
    {data:1,text:"ค่าขนม",amount:-100},
    {data:2,text:"ค่าห้อง",amount:-3000},
    {data:3,text:"เงินเดือน",amount:18000},
    {data:4,text:"ถูกหวย",amount:20000}

]

const transaction=dataTransaction;

function init(){
    transaction.forEach(adddataTolist);
}

function adddataTolist(transaction){
    const symbol = transaction.amount<0 ? "-":"+"
    const status = transaction.amount<0 ? "minus":"plus"
    
    document.addEventListener("DOMContentLoaded", function() {
        var List = document.getElementById("list");  
        if (List !== null) {
          var Item = document.createElement("li");
          Item.classList.add(status)
          Item.innerHTML = `${transaction.text}<span>${symbol}${Math.abs(transaction.amount)}</span><button class="delete-btn">x</button>`;
            List.appendChild(Item);
        } else {
          console.error("Error Element with ID 'list' not found.");
        }
      });
      
}

init();
