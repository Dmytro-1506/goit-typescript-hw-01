type User = {
    name: string;
    age: number;
}

let user: User = {
    name: 'Bob',
    age: 15,
}

user.age = 20;
user.name = 'Jack';

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
numbers.push(8);

type size = 'small' | 'medium' | 'large';

let buttonSize: size = 'medium';

enum Size {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

let menuSize: Size = Size.medium;

interface Car {
    color: string,
    power: number,
    price: number,
    inSale: boolean,
}

const BMW: Car = {
    color: 'white',
    power: 320,
    price: 15000,
    inSale: true,
}

// ---array of objects---
let users: User[] = [
    { name: 'Tom', age: 30 },
    { name: 'Jack', age: 25 },
    { name: 'Alice', age: 32 },
];


function fetchUserData(id: string, callback: (data: any) => void): void {
  // Тут може бути якийсь запит, але ми його заповнимо самі
  const responseData = { name: 'Tom' };

  callback(responseData);
}

// Використання функції:
fetchUserData('123', (data) => {
  console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
});

// let tupleType: [string, boolean];
// tupleType = ['hello', true]; // OK
// tupleType = [true, 'hello']; // Error. Неправильні типи
// tupleType = ['hello', true, true]; // Error. Більше значень ніж у tuple

// -----union type----
 type Dog = { 
  legs: 4;
  bark: () => void;
}

type Fish = {
  fins: 2;
  swim: () => void;
}

let pet: Dog | Fish;
