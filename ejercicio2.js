let velocidad = parseInt(prompt("¿A que velocidad va?: "))

if(velocidad < 30){
    console.log("Muy lento");
}
else if (velocidad >= 30 && velocidad <= 60){
    console.log("Velocidad moderada");
}
else if (velocidad >= 61 && velocidad <= 99){
    console.log("Rápido");
}
else if (velocidad >= 100){
    console.log("Muy rápido");
}