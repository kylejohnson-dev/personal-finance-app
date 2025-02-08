export type Transaction = {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
}

export type PotType = {
  name: string,
  target: number,
  total: number,
  theme: string
}