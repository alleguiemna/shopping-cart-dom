var btnsAdd = document.getElementsByClassName("add");
var btnsDelete = document.getElementsByClassName("delete");
var faHeart = document.getElementsByClassName("fa-heart");
var checkTags = document.getElementsByClassName("check");
var btnsRemove = document.getElementsByClassName("remove");
for(var i=0 ; i < btnsAdd.length ; i++){
    btnsAdd[i].addEventListener("click",add);
    btnsDelete[i].addEventListener("click",delet);
    btnsRemove[i].addEventListener("click",remov);
}
for(var j=0 ; j < checkTags.length ; j++)
{
    checkTags[j].addEventListener("click",totalPrice);
}
for(var k=0 ; k < faHeart.length ; k++)
{
    faHeart[k].addEventListener("click",changeColor); 
}
function add (event){
    var btnAdd = event.target;
    var tdElt = btnAdd.parentElement;
    var quantityTag = tdElt.querySelector("#quantity");
    var quantity = Number(quantityTag.innerHTML);
    quantity++;
    quantityTag.innerHTML = quantity;
    var trElt = quantityTag.parentElement.parentElement;
    var priceTag = trElt.querySelector("#price");
    var price = Number(priceTag.innerHTML);
    priceTag.innerHTML = price;
    var amountTag = trElt.querySelector(".amount");
    var amount = Number(amountTag.innerHTML);
    amount = quantity*price;
    amountTag.innerHTML = amount;
}
function delet (event){
    var btnDelete = event.target;
    var tdElt = btnDelete.parentElement;
    var quantityTag = tdElt.querySelector("#quantity");
    var quantity = Number(quantityTag.innerHTML);
    if(quantity > 0)
    {
        quantity--; 
    }
    quantityTag.innerHTML = quantity;
    var trElt = quantityTag.parentElement.parentElement;
    var priceTag = trElt.querySelector("#price");
    var price = Number(priceTag.innerHTML);
    priceTag.innerHTML = price;
    var amountTag = trElt.querySelector(".amount");
    var amount = Number(amountTag.innerHTML);
    amount = quantity*price;
    var btnDelete = trElt.querySelector(".delete")
    amountTag.innerHTML = amount;
}
function totalPrice(event){
    var check = event.target;
    var totalTag = document.getElementById("total");
    var total = Number(totalTag.innerHTML);
    totalTag.innerHTML = total;
    var trElt = check.parentElement.parentElement;
    var amountTag = trElt.querySelector(".amount");
    var amount = Number(amountTag.innerHTML);
    var btnAdd = trElt.querySelector(".add");
    var btnDelete = trElt.querySelector(".delete")
    if(check.checked)
    {
       total+=amount;
       btnAdd.setAttribute("disabled",true);
       btnDelete.setAttribute("disabled",true);
   }
    else{
       total-=amount;
       btnAdd.removeAttribute("disabled",true);
       btnDelete.removeAttribute("disabled",true);
    }
  totalTag.innerHTML = total;
}
function changeColor(event){
    //"#F60B8A"
    // "#868E96"
    var faHeart = event.target;
    if(faHeart.style.color !== "red")
    {
        faHeart.style.color = "red";
   }
    else
    {
    faHeart.style.color = "#868E96";
}
}
function remov (event){
    var btnRemove = event.target;
    var trElt = btnRemove.parentElement.parentElement
    trElt.remove()
}