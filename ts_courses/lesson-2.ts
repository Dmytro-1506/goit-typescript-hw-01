
//   ------- Intersection type ------

type Employee = {
    name: string;
    id: number;
};

type Manager = {
    employees: Employee[];
};

type CEO = Employee & Manager;

const ceo: CEO = {
    name: 'John',
    id: 111,
    employees: [
        {
            name: 'Bob',
            id: 222,
        },
    ]
}


// ----- Literal type ------

type OneOrTwo = 1 | 2;
let value: OneOrTwo;
value = 1; // OK
value = 2; // OK
// value = 3; // Error: Type '3' is not assignable to type 'OneOrTwo'.

type YesOrNo = 'yes' | 'no';
let answer: YesOrNo;
answer = 'yes'; // OK
answer = 'no'; // OK
// answer = 'maybe'; // Error: Type '"maybe"' is not assignable to type 'YesOrNo'.

type ButtonSize = 'small' | 'medium' | 'large';

function getButtonStyle(size: ButtonSize) {
  switch (size) {
    case 'small':
      return { fontSize: '10px', padding: '5px' };
    case 'medium':
      return { fontSize: '14px', padding: '10px' };
    case 'large':
      return { fontSize: '18px', padding: '15px' };
    default:
      return { fontSize: '14px', padding: '10px' };
  }
}

let myButtonStyle = getButtonStyle('medium'); // OK
// myButtonStyle = getButtonStyle('extra-large'); // Error: Argument of type '"extra-large"' is not assignable to parameter of type 'ButtonSize'.

// ----- Return type -----

function greet(): string {
    // return 100; // Error: Type 'number' is not assignable to type 'string'
  return "Hello, world!";
}

let result = greet();

const greet2 = (): string => {
  return "Hello, world!";
}

type User2 = {
  id: number;
  name: string;
};

const getUserNames = (users: User2[]): string[] => {
  return users.map((user) => user.name);
};

const users2: User2[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

let result2 = getUserNames(users2);
console.log(result); // ['Alice', 'Bob', 'Charlie']

// ----- void in functions -----

function logMessage(message: string): void {
  console.log(message);
}

logMessage('Hello, world!');

function doSomething(callback: () => void) {
  callback();
}

doSomething(() => {
  console.log('Callback function!');
});


// ----- never -----

// Функція, яка завжди викидає помилку
function throwError(message: string): never {
  throw new Error(message);
}

// Функція з нескінченним циклом
function infiniteLoop(): never {
  while (true) {}
}
