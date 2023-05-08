
 //* Existen dos maneras de crear funciones en js que tambien aplican para ts

 //*Las functions normales, es recomendable no dejar que ts infiera el tipo de retorno de la funcion y tambien es obligatorio dar los tipos de datos de las variables.
 
 function addNumber(a:number,b:number):number{
    return a+b;
 }

 //*Con arrow functions 
 const addNumber2 = (a:number,b:number):number=>{
    return a+b;
 }

 //* Cuando la funcion solo devuelve una sola cosa se puede evitar el return y las llaves
 const addNumber3 = (a:number,b:number):number=> a + b;


//  const result1:number = addNumber(1,2);
//  const result2:number = addNumber2(1,2);
//  const result3:number = addNumber3(1,2);

//  console.log({
//     result1,
//     result2,
//     result3
//  })

interface Character{
   name:string,
   hp:number,
   showHp: ()=>void
}

const strider:Character ={
   name:"batman",
   hp:100,
   showHp() {
       console.log(`my hp is ${this.hp}`)
   },
}


const healCharacter = (character:Character,amount:number)=>{
   character.hp += amount;
}

strider.showHp();
healCharacter(strider,10);
strider.showHp();

 

export {}