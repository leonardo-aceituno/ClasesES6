export default 
    class Impuestos {
        constructor(montoBrutoAnual, deducible) {
            this._montoBrutoAnual = montoBrutoAnual;
            this._deducible = deducible;
        }
    
        get montoBrutoAnual() {
            return this._montoBrutoAnual;
        }
        set montoBrutoAnual(montoBrutoAnual) {
            this._montoBrutoAnual = montoBrutoAnual;
        }
    
        get deducible() {
            return this._deducible
        }
        set deducible(deducible) {
            this._deducible = deducible;
        }
    }
    


