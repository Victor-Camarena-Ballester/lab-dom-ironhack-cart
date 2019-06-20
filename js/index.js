function deleteItem(event) {
  let productLine = event.target.parentNode.parentNode;
  document.getElementById("chart").removeChild(productLine);
  getTotalPrice();
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  let productLines = document.getElementsByClassName("productwrapper");
  let totalimport = 0;
  for (let row of productLines) {
    let priceRow = row
      .getElementsByClassName("price")[0]
      .getElementsByTagName("span")[0];
    priceRow = priceRow.innerText.substring(1);

    let linetotal = row
      .getElementsByClassName("linetotal")[0]
      .getElementsByTagName("span")[0];

    let qty = row.getElementsByClassName("qtyinput")[0];

    let finalqty = priceRow * qty.value;

    linetotal.innerText = `$${finalqty}`;

    totalimport += finalqty;
  }
  document.getElementById("totalimport").innerText = `$${totalimport}`;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {
  let newProduct = document.createElement("div");
  newProduct.className = "productwrapper";
  newProduct.innerHTML =
    '<div class="name"><span>' +
    itemName +
    "</span></div>" +
    '<div class="price"><span>$' +
    itemUnitPrice +
    "</span></div>" +
    '<div class="qty">' +
    '<label>QTY</label><input class="qtyinput" type="text" />' +
    "</div>" +
    '<div class="linetotal"><span>$0</span></div>' +
    '<div class="removebutton">' +
    '<button class="btn btn-delete">Delete</button>' +
    "</div>";
  return newProduct;
}
function assignDeleteOnclick() {
  var deleteButtons = document.getElementsByClassName("btn-delete");

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
}

function createNewItem() {
  let chart = document.getElementById("chart");
  let newProductName = document.getElementById("newname").value;
  let newProductPrice = document.getElementById("newprice").value;

  newProductPrice = parseFloat(newProductPrice);
  if (isNaN(newProductPrice)) {
    document.getElementById("error").innerHTML =
      "Debes poner un precio correcto";
    return;
  }
  chart.appendChild(createNewItemRow(newProductName, newProductPrice));
  assignDeleteOnclick();
  clearFields();
}

function clearFields() {
  document.getElementById("newname").value = "";
  document.getElementById("newprice").value = "";
  document.getElementById("error").innerHTML = "";
}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  assignDeleteOnclick();
};
