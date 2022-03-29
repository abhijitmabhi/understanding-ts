// const Person: {
//     name: String,
//     age: number,
//     hobbies: string[]
// } = {
//     name: "Shaswati",
//     age: 28,
//     hobbies: ["Painting", "Travelling"]
// }

enum Role { ADMIN, MANAGER, CUSTOMER}

const Person = {
    name: "Shaswati",
    age: 28,
    hobbies: ["Painting", "Travelling"],
    role: Role.CUSTOMER
}

// for(const hobby of Person.hobbies){
//     console.log(hobby);
// }

if(Role.ADMIN == Person.role){
    console.log("Me as a Admin!");
}