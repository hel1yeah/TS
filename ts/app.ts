function getFullName(fN:string, sN:string):string {
  if(typeof fN !== 'string') {
    throw new Error('!!!!!')
  }
  return `${fN} ${sN}`
}

const arrFunctions = (one: string, twoo: string):string => {
  return `${one} ${twoo} Arrow`
}

arrFunctions('Yuri', 'Larsen')
getFullName('Yuri', 'Larsen')

console.log(arrFunctions('Yuri', 'Larsen'));
console.log(getFullName('true', 'false'));
