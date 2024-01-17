interface User {
    id: number;
    name: string;
    email: string;
    dateOfBirth: Date;
}

let users: User[] = [
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

function addUser(user: User) {
    users.push(user);
}

addUser({
    id: 4,
    name: 'Jane Doe',
    email: 'jane@doe.com',
    dateOfBirth: new Date(1993, 1, 1)
});

function getUserById(id: number): User | undefined {
    return users.find(user => user.id === id);
}

const user = getUserById(3);
if (user) {
    console.table(user);
}