export default
class Cliente {
    constructor(nombre,impuesto) { 
        this._nombre = nombre;
        this._impuesto = impuesto;
        
    }

    get nombre() {
        return this._nombre
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get impuesto() {
        return this._impuesto;
    }

    calcularImpuesto() {
        let impuestoAnual = (this._impuesto._montoBrutoAnual - this._impuesto._deducible) * 0.21
        // console.log(`Nombre: ${this._nombre}`);
        // console.log(`Impuesto anual es ${impuestoAnual}`);
        return impuestoAnual;
    }
}