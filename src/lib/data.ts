import { sql } from '@vercel/postgres';
import { PotType, TransactionType } from './types';

export async function fetchPots(limit?: number | null) {
  if (typeof limit === "undefined") {
    limit = null;
  }
  
  try {
    console.log('Fetching pots data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 second delay
    
    const data = limit === null
      ? await sql<PotType>`SELECT * FROM pots`
      : await sql<PotType>`SELECT * FROM pots LIMIT ${limit}`;

    console.log('Data fetch completed.');
    console.log(data)

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch pots data.')
  }
}

export async function fetchTransactions(limit?: number | null) {
  if (typeof limit === "undefined") {
    limit = null;
  }

  try {
    console.log('Fetching transactions...');

    const data = limit === null
      ? await sql<TransactionType>`SELECT * FROM transactions`
      : await sql<TransactionType>`SELECT * FROM transactions LIMIT ${limit}`;

    console.log('Data fetch completed.');
    console.log(data)

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch transaction data.')
  }
}
