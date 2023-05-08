# Tipos Basicos

En typescript se pueden utilizar los siguientes tipos como ser:

- const
- let

La palabra var no es recomendable usarla por que esta no respeta los bloque de codigos y esto a la larga genera mas problemas en los proyectos cuando van creciendo.
Podemos crear tipos basicos en typescript asi:

```ts
const name: string = "Rodolfo";

const hpPoints: number = 98;

console.log({
  name,
  hpPoints,
});

export {};
```

Es importante aclarar que typescript por defecto infiere en el tipo de una variable, pero es de buena practica poner los tipos despues del operador (:).Utilizamos export por que cada archivo en ts es un modulo por el es7 +.

# Objetos - Interface y Arreglos

En typescript podemos utilizar los arreglos y tambien de estos debemos poner sus tipos por buenas practicas.

```ts
// * Esto es un arreglo de strings
let skills: string[] = ["Bash", "Counter", "Healing"];

//* Esto es un arreglo de varios tipos de valores
let objects: (string | number | boolean)[] = ["tree", true, 1, 2];
```

Los objetos literales en ts son los mismos que es js pero para poder usarlos mejor utilizamos las interfaces que nos ayudaran a poder crear objetos de manera mas entendible, las interfaces cuando se transpilan a js no afectan en nada ya que en js para el navegador no existe las interfaces.
Tambien tenemos los atributos opcionales que en ts se las representa con el operador (?).

```ts
//* Esto es un interface util para poder manejar con objetos literales en ts

interface Usuario {
  name: string;
  edad: number;
  email: string;
  direccrion?: string;
}

//* Creamos el objeto literal Empleado implementando la interface Usuario

const empleado: Usuario = {
  name: "Rodolfo",
  edad: 25,
  email: "rodito@gmial.com",
  direccrion: "las Kantutas por ahi",
};
```

# Funciones en ts

Las funciones en ts se las puede realizar de igual manera que en js, pero se recomienda por buena practica poner los tipos tanto de los parametros como de lo que devolvera la funcion asi que podemos las funciones normales con las function y tambien podemos utilizar las arrow function.

```ts
function addNumber(a: number, b: number): number {
  return a + b;
}

//*Con arrow functions
const addNumber2 = (a: number, b: number): number => {
  return a + b;
};

//* Cuando la funcion solo devuelve una sola cosa se puede evitar el return y las llaves
const addNumber3 = (a: number, b: number): number => a + b;

const result1: number = addNumber(1, 2);
const result2: number = addNumber2(1, 2);
const result3: number = addNumber3(1, 2);

console.log({
  result1,
  result2,
  result3,
});
```

Podemos tener funciones que reciben objetos como parametros, a los objetos que recibamos como parametros tenemos que tambien especificar su tipo.

```ts
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const strider: Character = {
  name: "batman",
  hp: 100,
  showHp() {
    console.log(`my hp is ${this.hp}`);
  },
};

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

strider.showHp();
healCharacter(strider, 10);
strider.showHp();
```

Al tener objetos literales lo mas recomendable en ts es que estos se implementente a traves de una interface, y cuando exista un atributo dentro de ese objeto y de este su valor sea un objeto lo mas practico es que tambien exista una interface que lo defina a ese objeto.

```ts
interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}
interface Address {
  calle: string;
  pais: string;
  ciudad: string;
}

const superHeroe: SuperHero = {
  name: "Spiderman",
  age: 30,
  address: {
    calle: "Main St",
    pais: "USA",
    ciudad: "NY",
  },
  showAddress() {
    return this.name + ", " + this.address.ciudad + ", " + this.address.pais;
  },
};

const address = superHeroe.showAddress();
console.log(address);
```

# Destructuring-Objects

La desestructuracion de objetos es muy util cuando no queremos utilizar mucho la notacion de punto en objetos literales,
tambien cuando se realiza la desectructuracion se puede renombrar el nombre de un atributo.

```ts
interface AudioPlayer {
  audioVlolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVlolume: 90,
  songDuration: 10,
  song: "la vieja ola",
  details: {
    author: "juan gabriel",
    year: 1990,
  },
};

//* Al desestructurar un objeto tambien se puede hacer una renombracion del atributo de un objeto.
const { song: audio, songDuration: duracion, details } = audioPlayer;
const { author } = details;

console.log(`la musia es ${audio}`);
console.log(`la duracion es ${duracion}`);
console.log(`el autor es ${author}`);
export {};
```

# Destructuring-Arrays

En js para desestructurar un arrglo solo tenemos que cambiar las llaves ({}) por los corchetes ([]) y el proceso es el mismo pero hay que tener en cuenta la posicion de los elementos para poder usarlos.

```ts
interface Product {
  name: string;
  price: number;
}

const phone: Product = {
  name: "Samsung",
  price: 20.0,
};

const tablet: Product = {
  name: "ipad air",
  price: 250.0,
};

interface TaxtCalculationOptions {
  taxt: number;
  products: Product[];
}

function taxCalculation({ products }: TaxtCalculationOptions): number[] {
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

const [total, taxt] = taxCalculation({
  products: shoppingCart,
  taxt: tax,
});
console.log(total, taxt);

export {};
```

# Clases en ts

Las clases en ts se pueden hacer tal como se hacen en js pero con una peculiar diferencia que es que los atributos de la clases se definen en el constructor.

```ts
export class Person {
  // public name:string;
  // public addres:string;

  constructor(public name: string, public addres: string = "No address") {}
}
```

# Composcion en vez de Herencia entre clases

Es muy recomendable no usar herencia cuando el nivel va mas haya de uno, ya que esto seria demasiado peligroso cuando la aplicacion vaya creciendo.
Para hacer la composicion solo necesitamos introducir como parametro a la clase y listo, si la clase que entra como parametro cambia en algun momento, pues la clase que lo usa no sufre ninguna modificacion.

```ts
export class Person {
  // public name:string;
  // public addres:string;

  constructor(public name: string, public addres: string = "No address") {}
}
export class Hero {
  constructor(
    public alterAgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}

const person = new Person("rodito", "san martin");
const publico = new Hero("Rodolfo", 45, "rodito", person);

console.log(publico);
```

# Generics

Los tipos genericos son muy utiles cuando quieras cambiar el tipo de dato de una variable que vas a devolver.

```ts
export function whatsMyType<T>(argument: T) {
  return argument;
}

const iamString = whatsMyType<string>("Hola como estas");
const iamNumber = whatsMyType<number>(45);
const iamArray = whatsMyType<number[]>([1, 2, 3, 4]);

console.log(iamString.split(" "));
console.log(iamNumber.toFixed());
console.log(iamArray.join("-"));
```

# Optional Change

Este caracteristica de ts esta muy ligada cuando en un objeto, interface o clase tenemos atributos opcionales, los atributos opcionales en ts se pueden utilizar con el operador (?), cuando lo usamos dentro de una funcion pues este se comporta de la misma manera pero es de buena practica siempre especificarle cuando no se tiene valor sobre algun algun atributo opcional

```ts
export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Rodolfo",
};

const passenger2: Passenger = {
  name: "Luisa",
  children: ["luis", "Juan", "Andres"],
};

const printChildren = (passenger: Passenger) => {
  //* Aca estamos usando el optional change cuando un pasajero no tuviera hijos
  const howManyChildren = passenger.children?.length || 0;
  console.log(passenger.name, howManyChildren);
};

printChildren(passenger1);
printChildren(passenger2);
```
