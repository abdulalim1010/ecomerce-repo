const handleAddtoCart = () => {
 const productName=document.getElementById("productName") 

  const productQuantity = document.getElementById("productquantity")
  const name = productName.value;
  const quantity = productQuantity.value;
   handleSetlocalStorage(name,quantity)
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
const handleSetlocalStorage = (productName, quantity) => {
  
  const newProduct = {
    name, quantity
  };
  localStorage.setItem("cart", JSON.stringify(newProduct))
}