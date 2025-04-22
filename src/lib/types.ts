export type TransactionType = {
  id: number;
  avatar: string;
  name: string;
  category: string;
  date: string; // this might be a different type
  amount: number;
  recurring: boolean;
}

export type PotType = {
  id: string;
  name: string;
  target: number;
  total: number;
  theme: string;
}