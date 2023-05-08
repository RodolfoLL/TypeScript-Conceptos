
// * Esto es un arreglo de strings
let skills:string [] = ['Bash','Counter','Healing'];


//* Esto es un arreglo de varios tipos de valores
let objects:(string | number | boolean) []= ['tree',true,1,2];



//* Esto es un interface util para poder manejar con objetos literales en ts

interface Usuario{
    name:string,
    edad:number,
    email:string,
    direccrion?:string
}

//* Creamos el objeto literal Empleado implementando la interface Usuario

const empleado : Usuario={
    name:"Rodolfo",
    edad:25,
    email:"rodito@gmial.com",
    direccrion:"las Kantutas por ahi"
}

console.log(skills,objects,empleado)
export{};