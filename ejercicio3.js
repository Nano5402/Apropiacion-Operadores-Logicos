// Le pedimos al usuario que escriba el número del mes (del 1 al 12)
let mes = parseInt(prompt("Ingrese el número del mes que desee conocer"))

// Usamos switch para revisar qué número puso el usuario
switch (mes) {
    case 1:
        // Si puso 1, mostramos "Enero"
        console.log("Enero");
        alert("Enero")    
        break;
    case 2:
        // Si puso 2, mostramos "Febrero"
        console.log("Febrero");
        alert("Febrero")    
        break;
    case 3:
        // Si puso 3, mostramos "Marzo"
        console.log("Marzo");
        alert("Marzo")    
        break;
    case 4:
        // Si puso 4, mostramos "Abril" (con cariño porque en este mes nacio este bebe)
        console.log("Abril (El mejor mes)");
        alert("Abril (El mejor mes)")    
        break;
    case 5:
        // Y asi sucesivamente con los meses restantes
        console.log("Mayo");
        alert("Mayo")    
        break;
    case 6:
        console.log("Junio");
        alert("Junio")    
        break;
    case 7:
        console.log("Julio");
        alert("Julio")    
        break;
    case 8:
        console.log("Agosto");
        alert("Agosto")    
        break;
    case 9:
        console.log("Septiembre");
        alert("Septiembre")    
        break;
    case 10:
        console.log("Octubre");
        alert("Octubre")    
        break;
    case 11:
        console.log("Noviembre");
        alert("Noviembre")    
        break;
    case 12:
        console.log("Diciembre");
        alert("Diciembre")    
        break;
    default:
        // Si el número no está entre 1 y 12, no hacemos nada
        break;
}
