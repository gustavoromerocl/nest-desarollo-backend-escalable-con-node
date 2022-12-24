export const name: string = 'Gustavo'
export const age: number = 32;
export const isValid: boolean = true;

export const templateString = ` Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${ name }
expresiones ${ 1 + 1 }
números: ${ age }
booleanos: ${ isValid }
`

console.log( templateString );