

 let purchasesItems = JSON.parse(localStorage.getItem("purchase")) || [];

 function appendpurchasesData(purchasesItems){
    document.querySelector("#purchases").innerHTML=null;

    purchasesItems.forEach((el,i)=>{

     let div = document.createElement("div");

     let img = document.createElement("img");
     img.src=el.image;

     let name = document.createElement("p");
     name.innerText=el.name;

     let price = document.createElement("p");
     price.innerText=el.price;

    

     div.append(img,name,price);
     document.querySelector("#purchase").append(div)
     })
    
 }

 appendpurchasesData(purchasesItems);
  
  function addtoWallet(){

    let amount = Number(document.getElementById("amount").value )+(Number(JSON.parse(localStorage.getItem("user"))) || 0)
    
    amount=+amount;

    localStorage.setItem("user",JSON.stringify(amount));

  }
