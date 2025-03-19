const handleAddtoCart = () => {
 const productName=document.getElementById("productName") 

  const productQuantity = document.getElementById("productquantity")

  
  const name = productName.value;
  const quantity = productQuantity.value;
  savproductFromlocalstorage(name,quantity)
  displayProduct(name, quantity)
 
  productName.value=""
  productQuantity.value = ""
  

}
const displayProduct = (productName ,quantity) => {
  const productContainer = document.getElementById("productcontainer")
  const li = document.createElement("li")
  li.innerText = `${productName} : ${quantity}`;

  productContainer.appendChild(li)



  
}

const getProductFromLocalstorage = ()=>{
  let cart = {};
  const getproduct = localStorage.getItem("cart");
  if (getproduct) {
    cart=JSON.parse(getproduct)
  }
  return cart;

}
const displayproductfromlocalstorage = () => {
  const products = getProductFromLocalstorage()
  for (const prduct in products) {
    displayProduct(prduct,products[prduct])
      

  }
}

const savproductFromlocalstorage = (productName, quantity) => {
  const cart=getProductFromLocalstorage()
  cart[productName] = quantity;
  const cartstring=JSON.stringify(cart)
  localStorage.setItem("cart",cartstring)
}
