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

function taxCalculation({products}: TaxtCalculationOptions): number[] {
  let total = 0;
  products.forEach(({price}) => {
    total += price;
  });
  return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

const [total,taxt]= taxCalculation({
  products: shoppingCart,
  taxt: tax,
});
console.log(total, taxt);

export {};
