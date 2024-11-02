
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

// ----- Type Casting -----

const input1 = <HTMLInputElement>document.getElementById('inputEmail');

input1.value = 'test@test.ts';

const input2 = document.getElementById('inputEmail') as HTMLInputElement;

input2.value = 'test@test.ts';

const input3 = document.getElementById('inputEmail');

if (input3) {
  (input3 as HTMLInputElement).value = 'test@test.ts';
}
//Однак, коли використовується JSX (React), тільки оператор as можна використати, оскільки синтаксис <Type> може бути неправильно інтерпретований як JSX.

// ---- index type ------

type Item = {
  [key: string]: number | string;
}

const userInfo: Item = {
  name: 'John',
  age: 22,
  country: 'Ukraine',
};

const bookDetails: Item = {
  title: 'Bible',
  pageCount: 660,
}

// ------ Generics -------

function revers<T>(items: T[]): T[] {
  return items.reverse();
}

let numbers2 = revers<number>([1, 2, 3, 4, 5]);
console.log(numbers2); // [5,4,3,2,1]

let strings2 = revers<string>(['q', 'w', 'e', 'r', 't']);
console.log(strings2); // ['t','r','e','w','q']


const student = {
  name: 'John',
  age: '24',
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let studentName = getProperty(student, 'name');
console.log(studentName); // 'John'

// let studentAddress = getProperty(student, 'address');
// console.log(studentAddress); // undefinde

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Hello');
textStorage.addItem('World');
console.log(textStorage.getItems()); // ['Hello', 'World']
// textStorage.addItem(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
console.log(numberStorage.getItems()); // [1, 2]
// numberStorage.addItem('TEXT'); // Error: Argument of type 'number' is not assignable to parameter of type 'number'

class KeyValuePair<TKey, TValue> {
  constructor(private key: TKey, private value: TValue) {}

  getKey(): TKey {
    return this.key;
  }

  getValue(): TValue {
    return this.value;
  }
}

const pair1 = new KeyValuePair('name', 'Alice');
console.log(pair1.getKey()); // 'name'
console.log(pair1.getValue()); // 'Alice'

const pair2 = new KeyValuePair(1, true);
console.log(pair2.getKey()); // 1
console.log(pair2.getValue()); // true


// ----- Utility Types -----

type User12 = {
  id: number;
  name: string;
  email: string;
  registered: boolean;
};

function createUser(data: Partial<User12>): User12 {
  // Деякі значення за замовчуванням:
  const defaultUser: User12 = {
    id: Date.now(),
    name: '',
    email: '',
    registered: false,
  };

  // З'єднуємо дані користувача та значення за замовчуванням
  return { ...defaultUser, ...data };
}

const newUser = createUser({ name: 'Alice', email: 'alice@example.com' });

console.log(newUser);
