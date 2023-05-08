
export class Person{
    // public name:string;
    // public addres:string;

    constructor(
        public name:string,
        public addres:string = 'No address'
    ){
    }
}

// export class Hero extends Person{
//     constructor(
//         public alterAgo:string,
//         public age:number,
//         public realName:string
//     ){
//         super(realName,'New york');
//     }
// }

export class Hero{
    constructor(
        public alterAgo:string,
        public age:number,
        public realName:string,
        public person:Person
    ){
    }
}

const person = new Person('rodito','san martin');
const publico = new Hero('Rodolfo',45,'rodito',person);

console.log(publico);


