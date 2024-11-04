function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [str3getter, str3setter] = simpleState("hello");
console.log(str3getter());
str3setter("something");
console.log(str3getter());

//we can tell our generic to be one type or the other
const [str4getter, str4setter] = simpleState<string | null>(null);
console.log(str4getter());
str4setter("str");
console.log(str4getter());
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}
function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  { name: "Bulbasaur", hp: 20 },
  { name: "Charmander", hp: 40 },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
