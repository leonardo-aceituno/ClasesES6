"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pantalla = /*#__PURE__*/function () {
  function Pantalla(data) {
    _classCallCheck(this, Pantalla);

    this.data = data;
  }

  _createClass(Pantalla, [{
    key: "pintar",
    value: function pintar(data) {
      var texto = "\n        <h4 class='fs-5 '>Listado de Usuarios</h4>\n        <table class=\"table\">\n            <thead class=\"table-light text-center\">\n                <td>Nombre</td>\n                <td>Monto Bruto</td>\n                <td>Deducible</td>\n                <td>Impuesto ($)</td>\n            </thead>\n            <tbody>\n        ";

      for (var i in data) {
        texto += "\n            <tr class='text-center'> \n            <td> ".concat(data[i].nombre, " </td>\n            <td> ").concat(data[i].impuesto._montoBrutoAnual, " </td>\n            <td> ").concat(data[i].impuesto._deducible, " </td>\n            <td> ").concat(data[i].calcularImpuesto(), " </td>\n            \n            </tr> ");
        console.log(data[i]._nombre);
        console.log(data[i].impuesto._montoBrutoAnual);
      }

      texto += "</tbody> </table>";
      return texto;
    }
  }]);

  return Pantalla;
}();

exports["default"] = Pantalla;