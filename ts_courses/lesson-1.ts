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

type Car = {
    color: string;
    power: number;
    price: number;
    inSale: boolean;
}

const BMW: Car = {
    color: 'white',
    power: 320,
    price: 15000,
    inSale: true,
}

