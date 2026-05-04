<?php
$pageTitle = "Ventas - Sistema Inventario Ventas Harold";
include __DIR__ . "/partials/header.php";
?>

<section class="page-header">
  <h1>Registro de ventas</h1>
  <p>Selecciona un producto y registra la cantidad vendida para actualizar el inventario.</p>
</section>

<section class="layout">
  <article class="panel">
    <h2>Nueva venta</h2>

    <form id="sale-form">
      <label for="sale-product">Producto</label>
      <select id="sale-product"></select>

      <label for="sale-quantity">Cantidad vendida</label>
      <input type="number" id="sale-quantity" min="1" placeholder="Ej: 2">

      <button type="submit" class="btn primary">Registrar venta</button>

      <p id="sale-message" class="message"></p>
    </form>
  </article>

  <article class="panel">
    <h2>Historial de ventas</h2>

    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody id="sales-table-body"></tbody>
      </table>
    </div>
  </article>
</section>

<script src="assets/js/storage.js"></script>
<script src="assets/js/sales.js"></script>

<?php include __DIR__ . "/partials/footer.php"; ?>
