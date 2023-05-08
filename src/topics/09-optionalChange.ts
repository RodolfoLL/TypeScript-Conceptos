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
