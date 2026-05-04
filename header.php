<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo htmlspecialchars($pageTitle ?? "Sistema Inventario Ventas Harold", ENT_QUOTES, "UTF-8"); ?></title>
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
  <header class="site-header">
    <div class="brand">
      <span class="logo">HD</span>
      <div>
        <strong>Sistema Inventario Ventas Harold</strong>
        <small>Gestión de productos y ventas</small>
      </div>
    </div>

    <nav class="main-nav">
      <a href="index.php">Inicio</a>
      <a href="productos.php">Productos</a>
      <a href="ventas.php">Ventas</a>
    </nav>
  </header>

  <main class="container">
