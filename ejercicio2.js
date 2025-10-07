// Le preguntamos al usuario a qué velocidad va
let velocidad = parseInt(prompt("¿A qué velocidad va?: "))

// Si va a menos de 30, decimos que va muy lento
if(velocidad < 30){
    console.log("Muy lento");
}
// Si va entre 30 y 60, decimos que tiene velocidad moderada
else if (velocidad >= 30 && velocidad <= 60){
    console.log("Velocidad moderada");
}
// Si va entre 61 y 99, decimos que va rápido
else if (velocidad >= 61 && velocidad <= 99){
    console.log("Rápido");
}
// Si va a 100 o más, decimos que va muy rápido
else if (velocidad >= 100){
    console.log("Muy rápido");
}