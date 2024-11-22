// Listas de palabras para formar dominios
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io', '.es'];

console.log("Generando nombres de dominio...");

// Generador de nombres de dominio
for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            // Formato clásico con extensión
            for (let ext of extensions) {
                console.log(`${p}${a}${n}${ext}`);
            }
            // Hack de dominio: verificar si la última parte del nombre coincide con una extensión
            for (let ext of extensions) {
                if (n.endsWith(ext.substring(1))) {
                    console.log(`${p}${a}${n.slice(0, -ext.length + 1)}.${ext.substring(1)}`);
                }
            }
        }
    }
}

console.log("¡Listo! Todos los nombres han sido generados.");
