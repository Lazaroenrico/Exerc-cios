interface User {

    name: string,
    age: number,
    occupation: string,
    role?: never,
}

interface Admin {
    
    name: string,
    age: number,
    occupation?: never,
    role: string,

}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string ; 
    //Poderia ser utilizado "string | undefined" e não iria precisa do ! no occupation e poderia fazer a utilização do 'any' no lugar do string
    if (person.role) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation!;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);