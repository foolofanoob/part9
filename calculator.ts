/*
//Operation type has been defined, with three possible values, as shown below. 
type Operation = 'multiply' | 'add' | 'divide';

//Here we have given argument op with the Type Operation(multiply, add, divide)
//Outside the arguments with their defined types in () you will see what value types can be returned here that can be a number or a string
// if we write simply ): number we will see that the return 'cannot divide by 0' will not be excepted
//EXTRA: another way of doing this is to define the type Result like so: 
// type Result = string | number; and then in your code ): Result 
const calculator = (a: number, b: number, op: Operation): number | string => {
    if (op === 'multiply') {
        return a * b;
    } else if (op === 'add') {
        return a + b;
    } else if (op === 'divide') {
        if (b === 0) return 'cannot divide by 0';
        return a / b;
    }
}

//testing function ... This for some reason does not print to the terminal 
calculator(3, 4, "multiply")
*/


//Error handling is very important since during runtime all type values will not be taken into consideration TypeScript turns back to JavaScript 
//Therefore runtime errors are still possible. 
type Operation = 'multiply' | 'add' | 'divide';


const calculator = (a: number, b: number, op: Operation): number => {
    //switch statement evaluates here ...
    switch (op) {
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) throw new Error('Can\'t divide by 0!');
            return a / b;
        case 'add':
            return a + b;
        default:
            throw new Error('Operation is not multiply, add or divide!');
    }
}

try {
    console.log(calculator(1, 5, 'divide'));
} catch (error: unknown) {
    let errorMessage = 'Something went wrong: '
    if (error instanceof Error) {
        errorMessage += error.message;
    }
    console.log(errorMessage);
}

console.log(process.argv)