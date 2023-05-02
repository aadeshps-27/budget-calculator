
function register(){
  user = username.value
  acco = acno.value 
  pasz = pass.value

  acdetails={
      user ,
      acco  ,
      pasz ,
  }
  if( user ==="" || acco ==="" || pasz ===""){
      alert("Fill Input Field")
  }
 else if(acco in localStorage){
      alert("Existing Account!")
  }
  else{
      localStorage.setItem(acco,JSON.stringify(acdetails));
      alert("Register Successfully")
      window.location.href="login1.html"
  }

}
function login(){
  aac1 = acc.value
  pasz = pswd.value
  

  if(aac1 in localStorage){
      details=JSON.parse(localStorage.getItem(aac1))
 
  if(pswd.value == details.pasz){
      alert("Login Successfully:)")
      window.location.href="index.html"
  }
  if(acc.value ===""|| pswd.value ===""){
      alert("Please Fill Your Inputs :(")

  }
  else if(pswd.value !== details.pasz){
  alert("Incorrect Password")
  }
}
else{
  alert("Invalid Acccount no:")
}

}
//_________________________________________________


var budget_btn = document.getElementById("buttonbudget")
var budget  = document.getElementById("setinput1")
var t_budget = document.getElementById("result")
var product_btn =document.getElementById("setxpence")
var title = document.getElementById("title")
var cost =document.getElementById("expences")
var expence = document.getElementById("result1")
var balance = document.getElementById("result2")
var clear = document.getElementById("final")
var logout  = document.getElementById("login")



budget_btn.onclick = function(){
 
    if(budget.value != ""){
localStorage.setItem("budget",budget.value);


    }
    else{
        alert(" Add Your Budget! ")
    }
    
   
}

clear.onclick = function(){
    localStorage.clear()  
}
product_btn.onclick = function()
{
    
if(title.value != "" && cost.value!="")
{
    var p_title = title.value;
    var p_cost = cost.value;
    var data = { p_cost:p_cost, p_title:p_title}
    var string =JSON.stringify(data)
    localStorage.setItem("budget_"+title.value,string)
    location.href = location.href
}
else{
    alert("Add Title & Expences!")
   
}
}



function all_data(){

    var i;
    for(i=0;i<localStorage.length;i++){
       var all_keys = localStorage.key(i);
      if(all_keys.match("budget_")){
        var json_data =localStorage.getItem(all_keys)
        var json_prase=JSON.parse(json_data)
        document.querySelector('#result5').innerHTML+=`
        <div class="container text-center bg-black">
      <div class="row" style="border: 2px solid red; box-shadow: 2px 3px 5px black;">
        <div class="col text-light text-uppercase ">
          Name & expences =>
        </div>
        <div class="col text-light text-uppercase">
        ${json_prase.p_title}
        </div>
        <div class="col text-light price">
         ${json_prase.p_cost}
        </div>
      </div>
    </div>`

      }
    }
    var price_tag =document.getElementsByClassName("price")
    var price = [];
    for(i=0;i<price_tag.length++;i++){
       price[i] = price_tag[i].innerHTML;
      
    }
    var price_int =[];

    for(i=0;i<price.length;i++){
        price_int.push(parseInt(price[i]))
    }
    
    var final_price = 0;
    for(i=0;i<price_int.length;i++){
       final_price += price_int[i]

    }
    expence.innerHTML = final_price;
    t_budget.innerHTML = localStorage.getItem('budget')
    var t_bgt = t_budget.innerHTML;
   var t_expences  = expence.innerHTML
   balance.innerHTML = `<p style="color:yellow;text-shadow: 2px 3px 5px black;"> ${t_bgt-t_expences}</p> `
    
    
    document.querySelector('#result1').innerHTML=`<h1 style="color:red; text-shadow: 2px 3px 5px black;"> ▼${final_price}</h1>`
t_budget.innerHTML=`<h1 style="color:green; text-shadow: 2px 3px 5px black;">▲${localStorage.getItem("budget")}</h1>`


}
all_data()
function final(){
    localStorage.clear()
}
logout.onclick =function(e){
    e.preventDefault()
    const response = confirm("Are you sure you want to Logout?");
    if(response){
        window.location="./login1.html";
    }
}