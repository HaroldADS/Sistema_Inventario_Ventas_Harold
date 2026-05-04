const PRODUCT_KEY = "harold_inventory_products";
const SALES_KEY = "harold_inventory_sales";

function getProducts() {
  return JSON.parse(localStorage.getItem(PRODUCT_KEY)) || [];
}

function saveProducts(products) {
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(products));
}

function getSales() {
  return JSON.parse(localStorage.getItem(SALES_KEY)) || [];
}

function saveSales(sales) {
  localStorage.setItem(SALES_KEY, JSON.stringify(sales));
}

function formatCurrency(value) {
  return "$" + Number(value).toFixed(2);
}

function createId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
}
