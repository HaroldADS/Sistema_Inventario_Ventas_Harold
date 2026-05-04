document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sale-form");
  const productSelect = document.getElementById("sale-product");
  const quantityInput = document.getElementById("sale-quantity");
  const message = document.getElementById("sale-message");
  const tableBody = document.getElementById("sales-table-body");

  function showMessage(text, type) {
    message.textContent = text;
    message.className = "message " + type;
  }

  function renderProductOptions() {
    const products = getProducts();
    productSelect.innerHTML = "";

    if (products.length === 0) {
      productSelect.innerHTML = "<option value=''>No hay productos registrados</option>";
      return;
    }

    products.forEach((product) => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = `${product.name} - Stock: ${product.stock} - Precio: ${formatCurrency(product.price)}`;
      productSelect.appendChild(option);
    });
  }

  function renderSales() {
    const sales = getSales();
    tableBody.innerHTML = "";

    if (sales.length === 0) {
      tableBody.innerHTML = "<tr><td colspan='4'>No existen ventas registradas.</td></tr>";
      return;
    }

    sales.slice().reverse().forEach((sale) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${sale.date}</td>
        <td>${sale.productName}</td>
        <td>${sale.quantity}</td>
        <td>${formatCurrency(sale.total)}</td>
      `;

      tableBody.appendChild(row);
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const productId = productSelect.value;
    const quantity = Number(quantityInput.value);
    const products = getProducts();
    const product = products.find((item) => item.id === productId);

    if (!product) {
      showMessage("Debe seleccionar un producto válido.", "error");
      return;
    }

    if (Number.isNaN(quantity) || quantity <= 0) {
      showMessage("La cantidad vendida debe ser mayor a 0.", "error");
      return;
    }

    if (quantity > product.stock) {
      showMessage("No existe stock suficiente para registrar la venta.", "error");
      return;
    }

    product.stock -= quantity;

    const sale = {
      id: createId(),
      productId: product.id,
      productName: product.name,
      quantity,
      total: quantity * product.price,
      date: new Date().toLocaleString("es-EC")
    };

    const sales = getSales();
    sales.push(sale);

    saveProducts(products);
    saveSales(sales);

    quantityInput.value = "";
    showMessage("Venta registrada correctamente.", "success");

    renderProductOptions();
    renderSales();
  });

  renderProductOptions();
  renderSales();
});
