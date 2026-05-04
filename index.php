<?php
$pageTitle = "Sistema Inventario Ventas Harold";
include __DIR__ . "/partials/header.php";
?>

<section class="hero">
  <div>
    <p class="tag">Actividad Integradora 2</p>
    <h1>Sistema Inventario Ventas Harold</h1>
    <p>
      Sistema desarrollado como parte de mi formación en programación web, orientado a la gestión
      de productos y control de ventas de manera simple, ordenada y eficiente.
    </p>

    <div class="actions">
      <a class="btn primary" href="productos.php">Gestionar productos</a>
      <a class="btn secondary" href="ventas.php">Registrar ventas</a>
    </div>
  </div>
</section>

<section class="cards">
  <article class="card">
    <h2>Inventario</h2>
    <p>Permite crear, listar, editar y eliminar productos aplicando validaciones básicas.</p>
  </article>

  <article class="card">
    <h2>Control de ventas</h2>
    <p>Registra ventas, calcula totales y descuenta automáticamente el stock disponible.</p>
  </article>

  <article class="card">
    <h2>Almacenamiento local</h2>
    <p>Los datos se guardan en el navegador mediante localStorage para mantener la información.</p>
  </article>
</section>

<?php include __DIR__ . "/partials/footer.php"; ?>
