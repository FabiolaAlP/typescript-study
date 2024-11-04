function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ""}`);
}
printIngredient("1C", "Flour");
printIngredient("1C", "Flour", "NO sugar");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}
function getEmail(user: User): string {
  if (user.info) {
    //we're telling for a fact this value is not null (check !)
    return user.info.email!;
  }
  return "";
}
function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  callback?.();
}
