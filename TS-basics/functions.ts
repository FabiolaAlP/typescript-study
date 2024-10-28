function addNumbers(a: number, b: number) {
  return a + b;
}

export const addStrings = (str1: string, str2: string = ""): string =>
  `${str1} ${str2}`;

//Unions
export const format = (title: string, param: string | number): string => {
  return `${title} ${param}`;
};
//void functions
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

//function with Rest parameters
export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join("_")}`;
}

export function getName(user: { name: string; lastName: string }): string {
  return `${user?.name ?? "first"} ${user?.lastName ?? "last name"}`;
}
export default addNumbers;
