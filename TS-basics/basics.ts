//string
let username: string = "Jack";
//boolean
let hasLoggedIn: boolean = true;
//number
let myAge: number = 30;
//Regex
let myRegex: RegExp = /foo/;
username += " Herrginton";

//arrays
const names: string[] = username.split(" ");
const numbers: Array<number> = [1, 2, 3, 4, 5, 6];

//objects
interface Person {
  name: string;
  lastName: string;
}
const myPerson: Person = { name: "John", lastName: "Peters" };

//Record
const ids: Record<number, string> = { 10: "a", 20: "b" };
ids[30] = "c";

if (ids[30] === "D") {
}

//loops
for (let i = 0; i < 10; i++) {
  console.log(`value: ${i}`);
}
[1, 2, 3, 4, 5].forEach((v) => console.log(v));
const out = [6, 7, 8, 9].map((v, i) => v * 10);
console.log(`Times ten: ${out}`);
