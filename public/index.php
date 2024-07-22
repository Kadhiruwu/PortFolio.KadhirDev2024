<?php 

require_once __DIR__ . '/../includes/app.php';

use Controllers\indexControllers;
use MVC\Router;


$router = new Router();

// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->get("/", [indexControllers::class ,"index"]);
$router->get("/enlaces", [indexControllers::class ,"enlaces"]);
//SE AGREGA NUEVA VENTANA 

$router->comprobarRutas();



