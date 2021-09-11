"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

var _pantalla = _interopRequireDefault(require("./pantalla.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// testings instancias
var imp_01 = new _impuestos["default"](100, 500); // instanciar impuestos

var cli_01 = new _cliente["default"]('Don Leo', imp_01); // instanciar cliente
// console.log(imp_01);                            // impuestos por consola
// imp_01.montoBrutoAnual = 900                    // modificar impuestos
// console.log(imp_01)                             // impuestos por consola
// console.log(cli_01);                            // cliente por consola
// cli_01.calcularImpuesto()                       // ejecutar metodo desde instancia cliente

var usuarios = [];
var calcular = document.getElementById('calcular');
calcular.addEventListener('click', function () {
  var nombre = document.getElementById('nombre').value;
  var montoBrutoAnual = document.getElementById('montoAnual').value || 0;
  var deducible = document.getElementById('deducible').value || 0;
  var imp = new _impuestos["default"](+montoBrutoAnual, +deducible);
  var cli = new _cliente["default"](nombre, imp);
  document.getElementById('resultado').value = cli.calcularImpuesto();
  usuarios.push(cli); // test consola

  console.log("valor nombre:" + nombre);
  console.log("valor montobruto:" + montoBrutoAnual);
  console.log("valor deducible :" + deducible);
  console.log("valor impuesto  : " + cli.calcularImpuesto());
  var pantalla = new _pantalla["default"](); // document.getElementById('usuarios').innerHTML = pantalla(usuarios) // pintar desde el main

  document.getElementById('usuarios').innerHTML = pantalla.pintar(usuarios);
  limpiar();
});

var limpiar = function limpiar() {
  document.getElementById('nombre').value = "";
  document.getElementById('montoAnual').value = "";
  document.getElementById('deducible').value = "";
  document.getElementById('resultado').value = "";
}; // Pintar desde el main


var pantalla = function pantalla(data) {
  var texto = "\n    <h4 class='fs-5 '>Listado de Usuarios</h4>\n    <table class=\"table\">\n        <thead class=\"table-light text-center\">\n            <td>Nombre</td>\n            <td>Monto Bruto</td>\n            <td>Deducible</td>\n            <td>Impuesto ($)</td>\n        </thead>\n        <tbody>\n    ";

  for (var i in data) {
    texto += "\n        <tr class='text-center'> \n        <td> ".concat(data[i].nombre, " </td>\n        <td> ").concat(data[i].impuesto._montoBrutoAnual, " </td>\n        <td> ").concat(data[i].impuesto._deducible, " </td>\n        <td> ").concat(data[i].calcularImpuesto(), " </td>\n        \n        </tr> ");
    console.log(data[i]._nombre);
    console.log(data[i].impuesto._montoBrutoAnual);
  }

  texto += "</tbody> </table>";
  return texto;
};