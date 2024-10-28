//to give a return type to a callback you can do something like this callback: () => void
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}
//type
export type MutationFunction = (v: number) => number;

//we can use the type
export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}

const myMutationFunction: MutationFunction = (v: number) => v * 100;
export type AdderFunction = (v: number) => number;

export function createAdder(num: number): AdderFunction {
  return (val: number) => num + val;
}
const addOne = createAdder(1);
console.log(addOne(55));
console.log(arrayMutate([1, 2, 3, 4], (v) => v * 10));
