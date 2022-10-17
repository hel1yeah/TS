function getFullName(user: {fn:string, city:string }): string {
  return `${user.fN} ${user.city}`
}

const user = {
  fN: 'Yuri',
  city: 'Brovary',
  age: 33
}

console.log(getFullName(user));