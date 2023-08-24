var form = document.getElementById("form")
var text = document.getElementById("text")
var amount = document.getElementById("amount")


const dataTransaction=[
    {data:1,text:"ค่าขนม",amount:-100},
    {data:2,text:"ค่าห้อง",amount:-3000},
    {data:3,text:"เงินเดือน",amount:18000},
    {data:4,text:"ถูกหวย",amount:20000}

]

const transaction=dataTransaction;

function init(){
    transaction.forEach(adddataTolist);
    CalculateMoney(transaction);
}

function adddataTolist(transaction){
    const symbol = transaction.amount<0 ? "-":"+"
    const status = transaction.amount<0 ? "minus":"plus"
    
    document.addEventListener("DOMContentLoaded", function() {
        var List = document.getElementById("list");  
        if (List !== null) {
          var Item = document.createElement("li");
          Item.classList.add(status)
          Item.innerHTML = `${transaction.text}<span>${symbol}${formatNumber(Math.abs(transaction.amount))}</span><button class="delete-btn">x</button>`;
            List.appendChild(Item);
        } else {
          console.error("Error Element with ID 'list' not found.");
        }
      });
      
}

//filter comma
function formatNumber(num){
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

}

function CalculateMoney(transaction){
    const amounts = transaction.map(transaction=>transaction.amount)
    //คำนวนยอดคงเหลือ
    const total = amounts.reduce((resuft,item)=>(resuft+=item),0).toFixed(2);
    //คำนวณรายรับ
    const income = amounts.filter(item=>item>0).reduce((resuft,item)=>(resuft+=item),0).toFixed(2);
    //คำนวณรายจ่าย
    const expense = amounts.filter(item=>item<0).reduce((resuft,item)=>(resuft+=item),0).toFixed(2);
    
    //แสดงผลทางหน้าจอ
    document.addEventListener("DOMContentLoaded", function() {
    var balance = document.getElementById("balance")
    var money_plus = document.getElementById("money-plus")
    var money_minus = document.getElementById("money-minus")
    balance.innerText=`฿`+formatNumber(total);
    money_plus.innerText=`฿`+formatNumber(income);
    money_minus.innerText=`฿`+formatNumber(expense);
    })
}

init();
