document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("product-form");
  const idInput = document.getElementById("product-id");
  const nameInput = document.getElementById("product-name");
  const stockInput = document.getElementById("product-stock");
  const priceInput = document.getElementById("product-price");
  const tableBody = document.getElementById("product-table-body");
  const message = document.getElementById("product-message");
  const formTitle = document.getElementById("form-title");
  const cancelEditButton = document.getElementById("cancel-edit");

  function showMessage(text, type) {
    message.textContent = text;
    message.className = "message " + type;
  }

  function clearForm() {
    idInput.value = "";
    nameInput.value = "";
    stockInput.value = "";
    priceInput.value = "";
    formTitle.textContent = "Nuevo producto";
    cancelEditButton.classList.add("hidden");
    message.textContent = "";
    message.className = "message";
  }

  function validateProduct(name, stock, price) {
    if (name.trim() === "") {
      return "El nombre del producto no puede estar vacío.";
    }

    if (Number.isNaN(stock) || stock < 0) {
      return "El stock debe ser mayor o igual a 0. No se permite stock negativo.";
    }

    if (Number.isNaN(price) || price <= 0) {
      return "El precio debe ser mayor a 0.";
    }

    return "";
  }

  function renderProducts() {
    const products = getProducts();
    tableBody.innerHTML = "";

    if (products.length === 0) {
      tableBody.innerHTML = "<tr><td colspan='4'>No existen productos registrados.</td></tr>";
      return;
    }

    products.forEach((product) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.stock}</td>
        <td>${formatCurrency(product.price)}</td>
        <td>
          <button class="action-button edit" data-id="${product.id}">Editar</button>
          <button class="action-button delete" data-id="${product.id}">Eliminar</button>
        </td>
      `;

      tableBody.appendChild(row);
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const stock = Number(stockInput.value);
    const price = Number(priceInput.value);
    const validationError = validateProduct(name, stock, price);

    if (validationError) {
      showMessage(validationError, "error");
      return;
    }

    const products = getProducts();
    const productId = idInput.value;

    if (productId) {
      const updatedProducts = products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            name: name.trim(),
            stock,
            price
          };
        }

        return product;
      });

      saveProducts(updatedProducts);
      showMessage("Producto actualizado correctamente.", "success");
    } else {
      const newProduct = {
        id: createId(),
        name: name.trim(),
        stock,
        price
      };

      products.push(newProduct);
      saveProducts(products);
      showMessage("Producto creado correctamente.", "success");
    }

    renderProducts();
    clearForm();
  });

  tableBody.addEventListener("click", (event) => {
    const button = event.target;
    const productId = button.dataset.id;

    if (!productId) {
      return;
    }

    const products = getProducts();
    const product = products.find((item) => item.id === productId);

    if (button.classList.contains("edit") && product) {
      idInput.value = product.id;
      nameInput.value = product.name;
      stockInput.value = product.stock;
      priceInput.value = product.price;
      formTitle.textContent = "Editar producto";
      cancelEditButton.classList.remove("hidden");
      showMessage("Editando producto seleccionado.", "success");
    }

    if (button.classList.contains("delete")) {
      const confirmDelete = confirm("¿Está seguro de eliminar este producto?");

      if (confirmDelete) {
        const filteredProducts = products.filter((item) => item.id !== productId);
        saveProducts(filteredProducts);
        renderProducts();
        clearForm();
        showMessage("Producto eliminado correctamente.", "success");
      }
    }
  });

  cancelEditButton.addEventListener("click", clearForm);

  renderProducts();
});
