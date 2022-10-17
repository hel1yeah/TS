function getFullName(user: { first: string; city: string }): string {
  return `${user.first} ${user.city}`;
}

const user = {
  first: 'Yuri',
  city: 'Brovary',
  age: 33,
  red: 'red',
};


console.log(getFullName(user));
