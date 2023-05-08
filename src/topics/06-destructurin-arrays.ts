const marvel:string[] = ['iron man','thanos','thor','loki'];

//* Para desestructurar un arreglo simplemente cambiamos lo que son las llaves ({}) por los corchetes ([]) y asi logramos hacer la desestructuracion de arreglos;

const [position1,position2,position3,...otros] = marvel

console.log(`El heroe numero 1 es ${position1}`)
console.log(`El heroe numero 1 es ${position2}`)
console.log(`El heroe numero 1 es ${position3}`)
console.log(`El heroe numero 1 es ${otros}`)



export{}