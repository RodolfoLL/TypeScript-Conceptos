export function whatsMyType<T>(argument: T) {
  return argument;
}

const iamString = whatsMyType<string>("Hola como estas");
const iamNumber = whatsMyType<number>(45);
const iamArray = whatsMyType<number[]>([1, 2, 3, 4]);

console.log(iamString.split(" "));
console.log(iamNumber.toFixed());
console.log(iamArray.join("-"));
