"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//importar clase

//instanciar clases
var impuesto1 = new _impuestos["default"](156800, 23500);
var impuesto2 = new _impuestos["default"](222000, 65783);
var cliente1 = new _cliente["default"]("Pedro Perez", impuesto1);
var cliente2 = new _cliente["default"]("Juan Lopez", impuesto2);
var resultadoImpuestroAnualCliente = cliente1.CalcularImpuesto();

//imprimir informacion de los clientes
console.log("Informacion del primer cliente: ".concat(cliente1.nombre, ",su impuesto bruto son: ").concat(impuesto1.montoBrutoAnual, " y deducciones son: ").concat(impuesto1.deducciones, ", por lo tanto el impuesto anual que debe pagar es de: ").concat(resultadoImpuestroAnualCliente));
console.log("Informacion del segundo cliente: ".concat(cliente2.nombre, ", su impuesto bruto son: ").concat(impuesto2.montoBrutoAnual, " y deducciones son: ").concat(impuesto2.deducciones, ", por lo tanto el impuesto anual que debe pagar es de: ").concat(cliente2.CalcularImpuesto()));