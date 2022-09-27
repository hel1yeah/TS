function getFullName(userObj: {firstName:string, lastName:string}): string {
    return `${userObj.firstName} ${userObj.lastName}`;
};

const USER = {
    firstName: 'Red',
    lastName: 'Bull',
    age: 42,
    skills: {
        dev: true,
        devonly: false,
    }
}

console.log(getFullName(USER))