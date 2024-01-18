"use strict";
let users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        dateOfBirth: new Date(1990, 1, 1)
    },
    {
        id: 2,
        name: 'Mary Doe',
        email: 'mary@mary.com',
        dateOfBirth: new Date(1991, 1, 1)
    },
    {
        id: 3,
        name: 'Bob Smith',
        email: 'bob@smith.com',
        dateOfBirth: new Date(1992, 1, 1)
    }
];
console.table(users);
console.log(users[0].dateOfBirth);
function addUser(user) {
    users.push(user);
}
addUser({
    id: 4,
    name: 'Jane Doe',
    email: 'jane@doe.com',
    dateOfBirth: new Date(1993, 1, 1)
});
function getUserById(id) {
    return users.find(user => user.id === id);
    // Alternativ:
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i];
        }
    }
    return undefined;
}
const user = getUserById(3);
if (user) {
    user.dateOfBirth.toISOString();
    console.table(user);
    console.log(user);
}
