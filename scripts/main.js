function addtoWallet(){
   
    let amount = Number(document.getElementById("amount").value )+(Number(JSON.parse(localStorage.getItem("user"))) || 0)
   
    amount=+amount;

    localStorage.setItem("user",JSON.stringify(amount));

  }