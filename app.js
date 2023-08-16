"use strict";
// let revenue: number = 1000;
// let bonus: number = 500;
// let c: string = "qwe";
// let d: boolean = true;
// let res: number = revenue + bonus;
// console.log(res, c, d);
function getFullName(firstName, surname) {
    return `${firstName} ${surname}`;
}
const getFullNameArrow = (firstName, surname) => {
    return `${firstName} ${surname}`;
};
console.log(getFullName("Ivan", "Ivanov"));
function getFullNameUser(userEntity) {
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
const skills = ["Dev", "Devops"];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const ref = skills
    .filter((s) => s != "Dev")
    .map((s) => {
    return 1;
})
    .reduce((a, b) => a + b);
console.log(ref);
const skill = [1, "Dev"];
const [id, skillName] = skill;
console.log(id, skillName);
//Спред - можно распылить дополнительный массив типов, что б добавлять сколько угодно переменных при необходимости
const arr = [1, "sdf", true, true, false];
//Readonly - с readonly нельзя будет модифицировать значения массива или кортежа
const newskill = [1, "Dev"];
const skillsArr = ["Dev", "DevOps"]; // массив строк
const skillsArrRead = ["Dev", "DevOps"];
//Enums
//enum в js преобразуется в функцию
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: "платеж успешен",
    statusCode: StatusCode.SUCCESS,
};
// 1 - успех
// 2 - в процессе
// 3 - отклонен
if (res.statusCode === StatusCode.SUCCESS) {
}
function action(status) { }
action(StatusCode.SUCCESS);
action(1);
function compute() {
    return 3;
}
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = compute()] = "USER";
})(Roles || (Roles = {}));
function test(x) { }
test(Roles);
//в JS заменит все значения констант на числа res2 = 1
const res2 = 1 /* newRoles.ADMIN */;
//union
//либо строка либо число либо буль
function logId(id) {
    if (typeof id === "string") {
        console.log(id);
    }
    else if (typeof id === "number") {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
logId(1);
logId("sdfgh");
logId(true);
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ("a" in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
        // работаем со строкой
    }
    else {
        console.log(a, b);
    }
}
const a = 1; // тип будет единица, это константа, литеральный тип
var RequesrType;
(function (RequesrType) {
    RequesrType["GET"] = "get";
    RequesrType["POST"] = "post";
})(RequesrType || (RequesrType = {}));
function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth("s", "post");
let method = "post";
method = "3";
fetchWithAuth("s", method); //кастомизация типов, приведение к нужному типу
