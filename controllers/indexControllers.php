<?php
namespace Controllers;
use MVC\Router;

class indexControllers{
    public static function index(Router $router){
        $router->render("web/index", []);
    }

    public static function enlaces(Router $router){
        $router->render("web/enlaces", []);
    }

//SE AGREGA NUEVA VENTANA 
// CREAR NODE_ MMODULS   npm i
}


