/*

//This is an example of how TypeScript works. You can define the multiplicator function as...
//(a, b, printText), however when code is run and you have replaced lets say argument 2 with a string, there will be no warning 
// Once you have defined the types like below, VSCode will notify an error if argument types are wrong.

const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);
}
    
//once function is called apon if argument 2 or 4 is replaced with a non-number the argument will be underlined as red.
multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is;');

*/

const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a, b, `Multiplied ${a} and ${b}, the result is:`);
