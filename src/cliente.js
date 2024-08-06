class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevo_Nombre) {
    this._nombre = nuevo_Nombre;
  }

  // Metodo para calcular el impuesto
  CalcularImpuesto() {
    return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
  }
}

export default Cliente;
