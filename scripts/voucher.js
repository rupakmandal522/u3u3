
  document.getElementById("user").innerText=JSON.parse(localStorage.getItem("user"))

  let fetchData = async()=>{
    try{
        let res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);
        let data = await res.json();
        console.log(data[0].vouchers);
        appendData(data[0].vouchers);
    }
    catch(err){
      console.log(err)
    }
  }
  fetchData();

  let myArr = JSON.parse(localStorage.getItem("purchase")) || [];
 
  const appendData = (data)=>{
       document.querySelector("#voucher_list").innerHTML=null;

       data.map((el,i)=>{
         let div = document.createElement("div");

         let img = document.createElement("img");
         img.src=el.image;

         let name = document.createElement("p");
         name.innerText=el.name;

         let price = document.createElement("p");
         price.innerText=el.price;

         let Buy = document.createElement("button");
         Buy.className="buy_voucher";
         Buy.innerText="Buy";
         Buy.addEventListener("click",()=>{
           purchase(el);
         })

         div.append(img,name,price,Buy);
         document.querySelector("#voucher_list").append(div)
       })
  }

   

  function purchase(el){
 
    let abc = JSON.parse(localStorage.getItem("user"));
    abc = +abc;
  
      if(Number(el.price)<=abc){
          myArr.push(el);
          let reduce = abc-el.price;
          
          document.getElementById("user").innerText=JSON.parse(localStorage.getItem("user"))
          localStorage.setItem("user",JSON.stringify(reduce));
          localStorage.setItem("purchase",JSON.stringify(myArr));
      } 
      else{
        alert("Sorry! insufficient balance");
      }
  }