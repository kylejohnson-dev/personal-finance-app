import { sql } from '@vercel/postgres';
import { PotType } from './types';

export async function fetchPots() {
  try {
    console.log('Fetching pots data...');
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3 second delay
    
    const data = await sql<PotType>`SELECT * FROM pots`;

    console.log('Data fetch completed.');

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch pots data.')
  }
}