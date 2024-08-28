let inventario = {
    ciudades:{
        0:'Medellin',
        1:'Cali',
        2:'Barranquilla',
        3:'Bogota',
        4:'Pasto',
        5:'Cartagena'
    },
    precios:{
        0:100000,
        1:90000,
        2:150000,
        3:80000,
        4:250000,
        5:160000
    },

    sillas:{
        normal:{
            nombre:'Silla Normal',
            precio:0
        },
        ejecutiva:{
            nombre:'Silla Ejecutiva',
            precio:20000
        },
        vip:{
            nombre:'Silla VIP',
            precio:40000
        }
    }
}



const inpPasajeros = document.getElementById('inpPasajeros')
const seleccionCiudades = document.getElementById('seleccionCiudades')
const showPrice = document.getElementById('showPrice')
const btnLiquidar = document.getElementById('btnLiquidar')
const seleccionSillas = document.getElementById('seleccionSillas')
//let sillaSeleccionada;
const inpEquipaje = document.getElementById('inpEquipaje')
const footer = document.getElementById('footer')

placeFooter()

function placeFooter(){
    let hasVScroll = document.body.offsetHeight> window.innerHeight;

if (hasVScroll) {
    footer.classList.remove("absoluto")
}else{
    footer.classList.toggle("absoluto")
}
}

window.addEventListener('resize', placeFooter)

inpPasajeros.value = 1

for(let element in inventario.ciudades){
    seleccionCiudades.innerHTML += `<option value="${element}">${inventario.ciudades[element]}</option>`
}

for(let element in inventario.sillas){
    seleccionSillas.innerHTML += `<option value="${element}">${inventario.sillas[element].nombre}</option>`
}

btnLiquidar.addEventListener('click',() =>{
    
    showPrice.innerHTML = `
    <p>Precio destino: <b>$${calcularPrecios().precioCiudad}</b></p>
    <p>Precio Equipaje: <b>$${calcularPrecios().precioEquipaje}</b></p>
    <p>Precio Silla: <b>$${calcularPrecios().precioSilla}</b></p>
    <p class="precioTotal"><b>TOTAL: $${calcularPrecios().total}</b></p>
    `
    console.log(calcularPrecios())
})

function calcularPrecios(){
    let precioEquipaje = 0
    let total = 0
    let precioCiudad = inventario.precios[seleccionCiudades.value]
    let precioSilla = inventario.sillas[seleccionSillas.value].precio
    let cantidadPasajeros
    let resultado

    if (inpEquipaje.value > 50) {
        precioEquipaje = 15000 * (inpEquipaje.value - 50)
        console.log(precioEquipaje)
    }
    total = (precioCiudad + precioEquipaje + precioSilla) * inpPasajeros.value

    return resultado = {
        precioCiudad,precioEquipaje,precioSilla, total
    }
}