// let revenue: number = 1000;
// let bonus: number = 500;
// let c: string = "qwe";
// let d: boolean = true;
// let res: number = revenue + bonus;
// console.log(res, c, d);

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
