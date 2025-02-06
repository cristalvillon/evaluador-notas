// Declarar la variable nota con un valor entre 0 y 100
let nota = 85 //se puede cambiar el valor para probar

//verificar si la nota es valida
if (nota >= 0 && nota <= 100) {
    let mensaje = ""; // Variable para almacenar el mensaje

    //evaluar el rango de la nota
    if  (nota >= 90) {
        mensaje = "Excelente";
    } else if (nota >= 75) {
        mensaje = "Bien";
    } else if (nota >= 60) {
        mensaje = "Suficiente";
    } else {
        mensaje = "No aprueba";
    }   

    //imprimir el mensaje 
    console.log(`El estudiante obtuvo una nota de ${nota}: ${mensaje}`);
} else {
    console.log("La nota ingresada no es valida. debe estar entre 0 y 100.");
}