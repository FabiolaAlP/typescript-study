//basically a tuple is an array, but the items in the array can by of any type
type ThreeCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeCoordinate,
  c2: ThreeCoordinate
): ThreeCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}
console.log(add3DCoordinate([1, 3, 4], [5, 6, 7]));

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}
const [str1getter, str1setter] = simpleStringState("hello");
const [str2getter, str2setter] = simpleStringState("jack");
console.log(str1getter());
console.log(str2getter());
str1setter("goodbye");
console.log(str1getter());
console.log(str2getter());
