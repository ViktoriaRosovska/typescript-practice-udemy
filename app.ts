let revenue: number = 1000;
let bonus: number = 500;
let c: string = "qwe";
let d: boolean = true;
let res1: number = revenue + bonus;
console.log(res1, c, d);

function getFullName(firstName: string, surname: string): string {
  return `${firstName} ${surname}`;
}
const getFullNameArrow = (firstName: string, surname: string): string => {
  return `${firstName} ${surname}`;
};

console.log(getFullName("Ivan", "Ivanov"));

function getFullNameUser(userEntity: { firstname: string; surname: string }): string {
  return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
  firstname: "Anton",
  surname: "Antonov",
  city: "Antaliia",
  age: 33,
  skills: {
    dev: true,
    devops: true,
  },
};

console.log(getFullNameUser(user));

//Tuples - кортежи (в JS преобразуется в массив array)
const skills: string[] = ["Dev", "Devops"];

for (const skill of skills) {
  console.log(skill.toLowerCase());
}
const ref = skills
  .filter((s: string) => s != "Dev")
  .map((s: string) => {
    return 1;
  })
  .reduce((a, b) => a + b);

console.log(ref);

const skill: [number, string] = [1, "Dev"];

const [id, skillName] = skill;
console.log(id, skillName);

//Спред - можно распылить дополнительный массив типов, что б добавлять сколько угодно переменных при необходимости
const arr: [number, string, ...boolean[]] = [1, "sdf", true, true, false];

//Readonly - с readonly нельзя будет модифицировать значения массива или кортежа

const newskill: readonly [number, string] = [1, "Dev"];

const skillsArr: Array<string> = ["Dev", "DevOps"]; // массив строк
const skillsArrRead: ReadonlyArray<string> = ["Dev", "DevOps"];

//Enums
//enum в js преобразуется в функцию
enum StatusCode {
  SUCCESS = 1,
  IN_PROCESS = 2,
  FAILED = 3,
}

const res = {
  message: "платеж успешен",
  statusCode: StatusCode.SUCCESS,
};

// 1 - успех
// 2 - в процессе
// 3 - отклонен

if (res.statusCode === StatusCode.SUCCESS) {
}

function action(status: StatusCode) {}

action(StatusCode.SUCCESS);
action(1);

function compute() {
  return 3;
}

enum Roles {
  ADMIN = 1,
  USER = compute(),
}

function test(x: { ADMIN: number }) {}
test(Roles);

//const enum
const enum newRoles {
  ADMIN = 1,
  USER = 2,
}
//в JS заменит все значения констант на числа res2 = 1
const res2 = newRoles.ADMIN;

//union
//либо строка либо число либо буль
function logId(id: string | number | boolean) {
  if (typeof id === "string") {
    console.log(id);
  } else if (typeof id === "number") {
    console.log(id);
  } else {
    console.log(id);
  }
}

logId(1);
logId("sdfgh");
logId(true);

function logError(err: string | string[]) {
  if (Array.isArray(err)) {
    console.log(err);
  } else {
    console.log(err);
  }
}

function logObject(obj: { a: number } | { b: number }) {
  if ("a" in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b);
  }
}

function logMultipleIds(a: string | number, b: string | boolean) {
  if (a === b) {
    // работаем со строкой
  } else {
    console.log(a, b);
  }
}

const a = 1; // тип будет единица, это константа, литеральный тип

enum RequesrType {
  GET = "get",
  POST = "post",
}

function fetchWithAuth(url: string, method: "post" | "get"): 1 | -1 {
  return 1;
}
fetchWithAuth("s", "post");

let method = "post";
method = "3";
fetchWithAuth("s", method as "post"); //кастомизация типов, приведение к нужному типу

//Type Aliases

type httpMethod = "POST" | "GET";

function fetchWithAuthFunc(url: string, method: httpMethod) {
  console.log(method);
}

type coolString = string;

//Intersection пересечение, должны быть описаны типы User и Role
type UserWithRole = User & Role;

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  name: string;
  id: number;
};

let firstUser: User = {
  name: "Ivan",
  age: 33,
  skills: ["1", "2"],
};

let secondUser: UserWithRole = {
  name: "Ivan",
  age: 33,
  skills: ["1", "2"],
  id: 1,
};

type UserAndRole = {
  user: User;
  role: Role;
};

let thirdUser: UserAndRole = {
  user: {
    name: "Dima",
    age: 36,
    skills: ["1", "2"],
  },
  role: {
    id: 2,
    name: "Administrator",
  },
};

// Interfaces
interface UserInterface {
  name: string;
  age: number;
  skills: string[];

  //функция, принимает id число и возвращает стоку
  log: (id: number) => string;
}

interface RoleId {
  roleId: number;
}
//интерфейс может наследоваться о нескольких инетерфейсов и расшираться на нужные поля
interface UserWithRoleExtends extends UserInterface, RoleId {
  createdAt: Date;
}

let userInt: UserInterface = {
  name: "Ivan",
  age: 33,
  skills: ["1", "2"],
  log(id) {
    return "";
  },
};

let userInt2: UserWithRoleExtends = {
  name: "Ivan",
  age: 33,
  skills: ["1", "2"],
  roleId: 1,
  createdAt: new Date(),
  log(id) {
    return "";
  },
};

interface UserDic {
  //может быть сколько угодно свойств с ключом число и типом значения User
  [index: number]: User;
}

type UserDic2 = {
  [index: number]: User;
};
//может быть сколько угодно свойств с ключом число и типом значения User
type ud = Record<number, User>;

type ID = string | number;

interface IDI {
  ID: string | number;
}

//Optional иногда передаем пользователя с перолем, иногда без пароля

interface User22 {
  login: string;
  password?: string; //? опциональный тип
}

const user22: User22 = {
  login: "a@gmail.com",
};
//second?: number - можно обозначить необязательность второго
//параметра или задать дефолтное значение number = 1
function multiply(first: number, second: number = 1): number {
  if (!second) {
    return first * first;
  }
  return first * second;
}
multiply(5);

interface UserPro {
  login: string;
  password?: {
    type: "primary" | "secondary";
  };
}

function testPass(user: UserPro) {
  //optional chain
  const t = user.password?.type;
  // const t = user.password ? user.password.type : undefined; если пароля нет, то вернет undefined
  // const t = user.password!.type; уверенные что пароль 100% будет, что свойство всегда есть
}

function test11(param?: string) {
  const p = param ?? multiply(5); //если param null или undefiner то вызовется multiply(5);
}
// Void - тип, который обозначает что функция ничего не возвращает
function logId1(id: number | string): void {
  console.log(id);
}

function multiply1(f: number, s?: number) {
  if (!s) {
    return f * f;
  }
}

//Можно обозначить группу функций, но что они вернут мы будем игнорировать
type voidFunc = () => void;

const f1: voidFunc = () => {};
const f2: voidFunc = () => {
  return true;
};
const b = f2(); //void

const skills33 = ["Dev", "DevOps"];

const user33 = {
  s: ["s"], //массив строк
};
// когда хотим игнорировать возврат, то типизируем void, например нам не нужен возврат функции push
skills33.forEach((skill) => user33.s.push(skill));

//Unknown
//тип означает что мы не знаем что лежит в переменной

let input: unknown;
function run(i: unknown) {
  if (typeof i == "number") {
    i++; //number
  } else {
    i; //unknown
  }
}

run(input);
async function getData() {
  try {
    await fetch("");
  } catch (error) {
    if (error instanceof Error)
      //проверяем что error тип Error, а не unknown
      console.log(error.message);
    const e = error as Error; // так можно проверять только если 100% известно что там будет ошибка, а не unknown
  }
}

type U1 = unknown | number; //всегда приведется к unknown
type U2 = unknown | string; //всегда приведется к unknown

//Never

function generateError(message: string): never {
  throw new Error(message); //функция никогда ничего не вернет
}

function dumpError(): never {
  while (true) {}
}

function rec(): never {
  return rec(); // если когда-то функция вернется, то без типа never может выпасть в ошибку
}

const с: void = undefined;
// const b: never = undefined нельзя присвоить

type paymentAction = "refund" | "checkout" | "reject";

function processAction(action: paymentAction) {
  switch (action) {
    case "refund":
      //....
      break;
    case "checkout":
      //...
      break;
    case "reject":
      //...
      break;
    default:
      const _: never = action; //помогает отслеживать ошибки, никогда не зайдем
      // в эту ветку, а если добавится еще один случай,
      // то будет ошибка и нужно будет добавить в switch еще одну проверку
      throw new Error("нет такого действия");
  }
}

function isString(x: string | number): boolean {
  if (typeof x === "string") {
    return true;
  } else if (typeof x === "number") {
    return false;
  }

  generateError("Ошибка"); //never
  // не попадем в return undefined
}

// Null
const n: null = null;
const n1: any = null;
//будет ошибка
// const n2: boolean = null;
// const n3: string = null;
// const n4: number = null;
// const n5: undefined = null;

interface User4 {
  name: string;
}

function getUser() {
  if (Math.random() > 0.5) {
    //используем null когда хочем якно показать что такого значения нет
    return null;
  } else {
    return {
      name: "Vasiya",
    } as User4;
  }
}

const user4 = getUser();
if (user4) {
  const name4 = user4.name;
}

// Приведение типов

let str: string = a.toString();
let e: string = new String(a).valueOf(); //вытащить конкретную строку из конструктора
let f: boolean = new Boolean(a).valueOf();

interface User5 {
  name: string;
  email: string;
  login: string;
}

const user5: User5 = {
  name: "Vasiya",
  email: "vasia@gmail.com",
  login: "vasia",
};

interface Admin {
  name: string;
  role: number;
}

const admin: Admin = {
  ...user5,
  // у админа может сохраниться email
  role: 1,
};

function userToAdmin(user: User5): Admin {
  return {
    //функция маппинга для приведения одного объекта в другой, оставляем только те поля которые нам надо
    name: user.name,
    role: 1,
  };
}

function logId2(id: string | number) {
  if (isString(id)) {
    console.log(id);
  } else {
    console.log(id);
  }
}

//Type Guard
function isString2(x: string | number): x is string {
  return typeof x === "string"; // вернет boolean
}
//Type Guard
function isAdmin(user: User5 | Admin): user is Admin {
  return "role" in user; // роль есть только у админа;
}

function isAdminAlternative(user: User5 | Admin): user is Admin {
  return (user as Admin).role !== undefined; // если да, то это админ
}

function setRole(user: User5 | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error("Пользователь не админ");
  }
}
