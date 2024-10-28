function addNumbers(a: number, b: number) {
  return a + b;
}

export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

export default addNumbers;
