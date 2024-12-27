// Mi simulador es un e-commerce donde se venden accesos para festivales de musica electronica 


let moneda = parseInt (prompt ("Seleccione el numero del tipo de moneda a utilizar \n 1.- Mxn \n 2.- Dolares \n 3.- Euros"))
let cantidad = 0
let seleccionarFestival = 0
let nombreCompleto = ""
let iva = 0
let total = 0

const nombre = () => {
    nombreCompleto = prompt ("Ingrese su nombre completo")
    alert ( `Hola ${nombreCompleto}, bienvenido a ElectronicLife`)
}

const festival = () => {
    alert ("Cada paquete incluye: \n - Un acceso general al evento \n - Vuelo \n - 3 noches de hotel (A excepción de Burning Man)")
    seleccionarFestival = parseInt (prompt("Ingrese el numero del festival al que desea asistir \n 1.- EDC México \n 2.- Tomorrowland \n 3.- Burning Man \n 4.- EDC Las Vegas"))
}

class Boletos {
    constructor(festival, costo){
        this.festival = festival
        this.costo = costo
    }
}

const boleto1 = new Boletos ("EDC Mexico", 15000)
const boleto2 = new Boletos ("Tomorroland", 50000)
const boleto3 = new Boletos ("Burning Man", 61000)
const boleto4 = new Boletos ("EDC Las Vegas", 40000)
const boleto5 = new Boletos ("EDC Mexico", 777.73)
const boleto6 = new Boletos ("Tomorroland", 2592.42)
const boleto7 = new Boletos ("Burning Man", 3162.75)
const boleto8 = new Boletos ("EDC Las Vegas", 2073.94)
const boleto9 = new Boletos ("EDC Mexico", 708.20)
const boleto10 = new Boletos ("Tomorroland", 2362.67)
const boleto11 = new Boletos ("Burning Man", 2882.46)
const boleto12 = new Boletos ("EDC Las Vegas", 1890.14)


switch (moneda) {
    case 1:
        nombre()
        festival()
        if (seleccionarFestival == 1){
            console.log(boleto1);
            alert(`El festival elegido es: ${boleto1.festival} y el costo del paquete es de ${boleto1.costo} pesos Mxn c/u`)
           cantidad = parseInt( prompt(`Ingrese la cantidad de boletos que desea comprar`));
           iva = (boleto1.costo * cantidad) * 0.16
           total = (boleto1.costo * cantidad) + iva
           alert (`El total de su compra por ${cantidad} paquetes para ${boleto1.festival} es de: $${total} Mxn, iva incluido`)
           alert(`Muchas gracias por tu compra ${nombreCompleto}`)
           
        }
        else if (seleccionarFestival == 2){
            console.log(boleto2);
            alert(`El festival elegido es: ${boleto2.festival} y el costo del paquete es de ${boleto2.costo} pesos Mxn c/u`)
           cantidad = parseInt( prompt(`Ingrese la cantidad de boletos que desea comprar`));
           iva = (boleto2.costo * cantidad) * 0.16
           total = (boleto2.costo * cantidad) + iva
           alert (`El total de su compra por ${cantidad} paquetes para ${boleto2.festival} es de: $${total} Mxn, iva incluido`)
           alert(`Muchas gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 3){
            console.log(boleto3);
            alert(`El festival elegido es: ${boleto3.festival} y el costo del paquete es de ${boleto3.costo} pesos Mxn c/u`)
           cantidad = parseInt( prompt(`Ingrese la cantidad de boletos que desea comprar`));
           iva = (boleto3.costo * cantidad) * 0.16
           total = (boleto3.costo * cantidad) + iva
           alert (`El total de su compra por ${cantidad} paquetes para ${boleto3.festival} es de: $${total} Mxn, iva incluido`)
           alert(`Muchas gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 4){
            console.log(boleto4);
            alert(`El festival elegido es: ${boleto4.festival} y el costo del paquete es de ${boleto4.costo} pesos Mxn c/u`)
           cantidad = parseInt( prompt(`Ingrese la cantidad de boletos que desea comprar`));
           iva = (boleto4.costo * cantidad) * 0.16
           total = (boleto4.costo * cantidad) + iva
           alert (`El total de su compra por ${cantidad} paquetes para ${boleto4.festival} es de: $${total} Mxn, iva incluido`)
           alert(`Muchas gracias por tu compra ${nombreCompleto}`)
        }
        else{
            alert("Ingrese un numero de la lista")
        }
        break;

    case 2:
        nombre()
        festival() 
        if (seleccionarFestival == 1){
            console.log(boleto5);
            alert(`El festival elegido es: ${boleto5.festival} y el costo del paquete es de ${boleto5.costo} Dolares c/u`)
           cantidad = parseInt( prompt(`Ingrese la cantidad de boletos que desea comprar`));
           iva = (boleto5.costo * cantidad) * 0.16
           total = (boleto5.costo * cantidad) + iva
           alert (`El total de su compra por ${cantidad} paquetes para ${boleto5.festival} es de: $${total.toFixed(2)} Dolares, iva incluido`)
           alert(`Muchas gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 2){
            console.log(boleto6);
            alert(`El festival elegido es: ${boleto6.festival} y el costo del paquete es de ${boleto6.costo} Dolares c/u`)
           cantidad = parseInt( prompt(`Ingrese la cantidad de boletos que desea comprar`));
           iva = (boleto6.costo * cantidad) * 0.16
           total = (boleto6.costo * cantidad) + iva
           alert (`El total de su compra por ${cantidad} paquetes para ${boleto6.festival} es de: $${total.toFixed(2)} Dolares, iva incluido`)
           alert(`Muchas gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 3){
            console.log(boleto7);
            alert(`El festival elegido es: ${boleto7.festival} y el costo del paquete es de ${boleto7.costo} Dolares c/u`)
           cantidad = parseInt( prompt(`Ingrese la cantidad de boletos que desea comprar`));
           iva = (boleto7.costo * cantidad) * 0.16
           total = (boleto7.costo * cantidad) + iva
           alert (`El total de su compra por ${cantidad} paquetes para ${boleto7.festival} es de: $${total.toFixed(2)} Dolares, iva incluido`)
           alert(`Muchas gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 4){
            console.log(boleto8);
            alert(`El festival elegido es: ${boleto8.festival} y el costo del paquete es de ${boleto8.costo} Dolares c/u`)
           cantidad = parseInt( prompt(`Ingrese la cantidad de boletos que desea comprar`));
           iva = (boleto8.costo * cantidad) * 0.16
           total = (boleto8.costo * cantidad) + iva
           alert (`El total de su compra por ${cantidad} paquetes para ${boleto8.festival} es de: $${total.toFixed(2)} Dolares, iva incluido`)
           alert(`Muchas gracias por tu compra ${nombreCompleto}`)
        }
        else{
            alert("Ingrese un numero de la lista")
        }
        break;

    case 3:
        nombre()
        festival() 
        if (seleccionarFestival == 1){
            console.log(boleto9);
            alert(`El festival elegido es: ${boleto9.festival} y el costo del paquete es de ${boleto9.costo} Euros c/u`)
           cantidad = parseInt( prompt(`Ingrese la cantidad de boletos que desea comprar`));
           iva = (boleto9.costo * cantidad) * 0.16
           total = (boleto9.costo * cantidad) + iva
           alert (`El total de su compra por ${cantidad} paquetes para ${boleto9.festival} es de: $${total.toFixed(2)} Euros, iva incluido`)
           alert(`Muchas gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 2){
            console.log(boleto10);
            alert(`El festival elegido es: ${boleto10.festival} y el costo del paquete es de ${boleto10.costo} Euros c/u`)
           cantidad = parseInt( prompt(`Ingrese la cantidad de boletos que desea comprar`));
           iva = (boleto10.costo * cantidad) * 0.16
           total = (boleto10.costo * cantidad) + iva
           alert (`El total de su compra por ${cantidad} paquetes para ${boleto10.festival} es de: $${total.toFixed(2)} Euros, iva incluido`)
           alert(`Muchas gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 3){
            console.log(boleto11);
            alert(`El festival elegido es: ${boleto11.festival} y el costo del paquete es de ${boleto11.costo} Euros c/u`)
           cantidad = parseInt( prompt(`Ingrese la cantidad de boletos que desea comprar`));
           iva = (boleto11.costo * cantidad) * 0.16
           total = (boleto11.costo * cantidad) + iva
           alert (`El total de su compra por ${cantidad} paquetes para ${boleto11.festival} es de: $${total.toFixed(2)} Euros, iva incluido`)
           alert(`Muchas gracias por tu compra ${nombreCompleto}`)
        }
        else if (seleccionarFestival == 4){
            console.log(boleto12);
            alert(`El festival elegido es: ${boleto12.festival} y el costo del paquete es de ${boleto12.costo} Euros c/u`)
           cantidad = parseInt( prompt(`Ingrese la cantidad de boletos que desea comprar`));
           iva = (boleto12.costo * cantidad) * 0.16
           total = (boleto12.costo * cantidad) + iva
           alert (`El total de su compra por ${cantidad} paquetes para ${boleto12.festival} es de: $${total.toFixed(2)} Euros, iva incluido`)
           alert(`Muchas gracias por tu compra ${nombreCompleto}`)
        }
        else{
            alert("Ingrese un numero de la lista")
        }
        break;

    default:
        break;
}