export default class Pantalla {
    constructor(data) {
        this.data = data;
    }

    pintar(data) {
        let texto = `
        <h4 class='fs-5 '>Listado de Usuarios</h4>
        <table class="table">
            <thead class="table-light text-center">
                <td>Nombre</td>
                <td>Monto Bruto</td>
                <td>Deducible</td>
                <td>Impuesto ($)</td>
            </thead>
            <tbody>
        `
        for(let i in data){
            texto+= `
            <tr class='text-center'> 
            <td> ${data[i].nombre} </td>
            <td> ${data[i].impuesto._montoBrutoAnual} </td>
            <td> ${data[i].impuesto._deducible} </td>
            <td> ${data[i].calcularImpuesto()} </td>
            
            </tr> `
            console.log(data[i]._nombre);
            console.log(data[i].impuesto._montoBrutoAnual);
        }
    
        texto+= `</tbody> </table>`
    
        return texto
    }
}












