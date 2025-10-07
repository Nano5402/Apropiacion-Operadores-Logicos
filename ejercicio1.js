// Le preguntamos al usuario cuántos grados hay hoy
let temperatura = parseInt(prompt("¿Qué temperatura tenemos hoy?: "))

// Si hace 30 o más, decimos que está haciendo calor
if (temperatura >= 30) {
  console.log("Hace calor");
} else {
  // Si no, decimos que el clima está chévere
  console.log("Clima agradable")
}