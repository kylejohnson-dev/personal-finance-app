import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//Budgets
export async function createBudget(formData: FormData) {
  
}

export async function updateBudget(id: string, formData: FormData) {
  
}

export async function deleteBudget(id: string) {
  await sql`DELETE FROM budgets WHERE id = ${id}`;
  revalidatePath('/dashboard/budgets');
}

// Pots
export async function createPot(formData: FormData) {

}

export async function updatePot(id: string, formData: FormData) {
  
}

export async function deletePot(id: string) {
  await sql`DELETE FROM pots WHERE id = ${id}`;
  revalidatePath('/dashboard/pots');
}