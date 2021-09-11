
import Cliente   from './cliente.js'
import Impuestos from './impuestos.js'
import Pantalla from './pantalla.js'

// testings instancias
let imp_01 = new Impuestos(100, 500)            // instanciar impuestos
let cli_01 = new Cliente('Don Leo',imp_01)      // instanciar cliente

// console.log(imp_01);                            // impuestos por consola
// imp_01.montoBrutoAnual = 900                    // modificar impuestos
// console.log(imp_01)                             // impuestos por consola
// console.log(cli_01);                            // cliente por consola
// cli_01.calcularImpuesto()                       // ejecutar metodo desde instancia cliente

let usuarios = []
let calcular = document.getElementById('calcular');

calcular.addEventListener('click',() => {
    
    let nombre = document.getElementById('nombre').value;
    let montoBrutoAnual = document.getElementById('montoAnual').value || 0;
    let deducible = document.getElementById('deducible').value || 0;

    let imp = new Impuestos(+montoBrutoAnual,+deducible)    
    let cli = new Cliente(nombre,imp)
    
    document.getElementById('resultado').value = cli.calcularImpuesto()

    usuarios.push(cli)

    // test consola
    console.log("valor nombre:" + nombre);
    console.log("valor montobruto:" + montoBrutoAnual);
    console.log("valor deducible :" + deducible);
    console.log("valor impuesto  : " + cli.calcularImpuesto());


    let pantalla = new Pantalla()
    // document.getElementById('usuarios').innerHTML = pantalla(usuarios) // pintar desde el main
    document.getElementById('usuarios').innerHTML = pantalla.pintar(usuarios)
    limpiar()
})

let limpiar = () => {
    document.getElementById('nombre').value = ""
    document.getElementById('montoAnual').value = ""
    document.getElementById('deducible').value = ""
    document.getElementById('resultado').value = ""
}




// Pintar desde el main
let pantalla = data => {
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