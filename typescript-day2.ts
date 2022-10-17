
// const myArguments1=[1, 'data','3','result']
// const myArguments2=['Bejo', 'has', '4', 'sport', 'car']

// function StringorNumber(Params:(string|number)[]):string{
//     let parameter_string:string= Params.join(" ")
//     return parameter_string
// }


// console.log(StringorNumber(myArguments1))
// console.log(StringorNumber(myArguments2))

const myArguments1:[number,string,string,string]=[1, 'data','3','result']
type StringORNumber= string|number

const myArguments2:(StringORNumber)[]=['Bejo', 'has', '4', 'sport', 'car']

function StringORNumber(params:(string|number)[]):string{
    let parameter_string:string=params.join(" ")
    return parameter_string
}

console.log(StringORNumber(myArguments1))
console.log(StringORNumber(myArguments2))



// enum PrintMedia{
//     Newspaper,
//     Book, 
//     Magazine
// }

// console.log(PrintMedia)