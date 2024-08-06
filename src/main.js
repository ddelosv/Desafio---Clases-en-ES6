import Cliente from "./cliente.js"; //importar clase
import Impuestos from "./impuestos.js";

//instanciar clases
let impuesto1 = new Impuestos(156800, 23500);
let impuesto2 = new Impuestos(222000, 65783);
let cliente1 = new Cliente("Pedro Perez", impuesto1);
let cliente2 = new Cliente("Juan Lopez", impuesto2);

let resultadoImpuestroAnualCliente = cliente1.CalcularImpuesto();

//imprimir informacion de los clientes
console.log(
  `Informacion del primer cliente: ${cliente1.nombre},su impuesto bruto son: ${impuesto1.montoBrutoAnual} y deducciones son: 
    ${impuesto1.deducciones}, por lo tanto el impuesto anual que debe pagar es de: ${resultadoImpuestroAnualCliente}` //muestra resultaldo por la variable de resultadoImpuestroAnualCliente
);

console.log(
  `Informacion del segundo cliente: ${
    cliente2.nombre
  }, su impuesto bruto son: ${impuesto2.montoBrutoAnual} y deducciones son: ${
    impuesto2.deducciones
  }, por lo tanto el impuesto anual que debe pagar es de: ${cliente2.CalcularImpuesto()}` //muestra resultado por la variable de cliente2.CalcularImpuesto
);
