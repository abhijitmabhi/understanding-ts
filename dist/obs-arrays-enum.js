"use strict";
// const Person: {
//     name: String,
//     age: number,
//     hobbies: string[]
// } = {
//     name: "Shaswati",
//     age: 28,
//     hobbies: ["Painting", "Travelling"]
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANAGER"] = 1] = "MANAGER";
    Role[Role["CUSTOMER"] = 2] = "CUSTOMER";
})(Role || (Role = {}));
const Person = {
    name: "Shaswati",
    age: 28,
    hobbies: ["Painting", "Travelling"],
    role: Role.CUSTOMER
};
// for(const hobby of Person.hobbies){
//     console.log(hobby);
// }
if (Role.ADMIN == Person.role) {
    console.log("Me as a Admin!");
}
