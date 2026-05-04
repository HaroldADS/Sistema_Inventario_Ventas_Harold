# Sistema Inventario Ventas Harold

## Descripción del sistema

Este proyecto corresponde a la Actividad Integradora 2 de la materia Programación de Sistemas Web.

El sistema permite gestionar productos y registrar ventas de manera simple. La aplicación fue desarrollada con PHP para la estructura de páginas, HTML para el contenido, CSS para el diseño visual y JavaScript para la lógica funcional del inventario y ventas.

La información se almacena en `localStorage`, por lo que los datos quedan guardados en el navegador donde se utiliza el sistema.

## Funcionalidades principales

### Módulo de productos

* Crear producto.
* Listar productos.
* Editar producto.
* Eliminar producto.

### Validaciones implementadas

* El nombre del producto no puede estar vacío.
* El stock debe ser mayor o igual a 0.
* No se permite registrar stock negativo.
* El precio debe ser mayor a 0.

### Módulo de ventas

* Seleccionar producto existente.
* Registrar cantidad vendida.
* Validar stock disponible.
* Descontar automáticamente el stock luego de una venta.
* Consultar historial de ventas.

## Requisitos

Para ejecutar el proyecto se necesita:

* PHP 8 o superior.
* Navegador web actualizado.
* Servidor local como XAMPP, WAMP, Laragon o el servidor integrado de PHP.

## Pasos de instalación

### Opción 1: usando servidor integrado de PHP

1. Descargar o clonar el repositorio.
2. Abrir una terminal dentro de la carpeta del proyecto.
3. Ejecutar el siguiente comando:

```bash
php -S localhost:8000
```

4. Abrir el navegador e ingresar a:

```text
http://localhost:8000
```

### Opción 2: usando XAMPP

1. Copiar la carpeta del proyecto dentro de `htdocs`.
2. Iniciar Apache desde el panel de XAMPP.
3. Abrir el navegador e ingresar a:

```text
http://localhost/Sistema\_Inventario\_Ventas\_Harold\_Completo
```

## Estructura del proyecto

```text
Sistema\_Inventario\_Ventas\_Harold\_Completo/
│
├── index.php
├── productos.php
├── ventas.php
├── README.md
│
├── partials/
│   ├── header.php
│   └── footer.php
│
├── capturas/
│
└── assets/
    ├── css/
    │   └── styles.css
    │
    └── js/
        ├── storage.js
        ├── products.js
        └── sales.js
```

## Capturas del sistema

Se agrega carpeta con capture de las siguientes pantallas en correcto funcionamiento: 



* Pantalla principal.
* Pantalla de productos.
* Creación de producto.
* Edición de producto.
* Validación de stock o precio.
* Registro de venta.
* Historial de ventas.

## Usuario de prueba

No aplica, ya que el sistema no incluye módulo de autenticación.

## Consideraciones

* Los datos se almacenan en `localStorage`.
* Si se limpia el almacenamiento del navegador, los productos y ventas se eliminarán.
* El sistema no utiliza base de datos MySQL.
* Para una versión futura se podría incorporar login de usuarios, base de datos y reportes.
