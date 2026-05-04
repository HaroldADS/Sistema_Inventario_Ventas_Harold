<?php
$pageTitle = "Productos - Sistema Inventario Ventas Harold";
include __DIR__ . "/partials/header.php";
?>

<section class="page-header">
  <h1>Gestión de productos</h1>
  <p>Registra y administra los productos disponibles en el inventario.</p>
</section>

<section class="layout">
  <article class="panel">
    <h2 id="form-title">Nuevo producto</h2>

    <form id="product-form">
      <input type="hidden" id="product-id">

      <label for="product-name">Nombre del producto</label>
      <input type="text" id="product-name" placeholder="Ej: Camiseta running">

      <label for="product-stock">Stock disponible</label>
      <input type="number" id="product-stock" min="0" placeholder="Ej: 10">

      <label for="product-price">Precio unitario</label>
      <input type="number" id="product-price" min="0.01" step="0.01" placeholder="Ej: 25.50">

      <div class="form-actions">
        <button type="submit" class="btn primary">Guardar producto</button>
        <button type="button" id="cancel-edit" class="btn secondary hidden">Cancelar edición</button>
      </div>

      <p id="product-message" class="message"></p>
    </form>
  </article>

  <article class="panel">
    <h2>Listado de productos</h2>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="product-table-body"></tbody>
      </table>
    </div>
  </article>
</section>

<script src="assets/js/storage.js"></script>
<script src="assets/js/products.js"></script>

<?php include __DIR__ . "/partials/footer.php"; ?>
