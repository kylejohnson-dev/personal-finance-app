import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

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
const PotFormSchema = z.object({
  id: z.string(),
  name: z.string(),
  target: z.coerce.number(),
  total: z.coerce.number(),
  theme: z.string(),

});

const CreatePot = PotFormSchema.omit({ id: true });
const UpdatePot = PotFormSchema.omit({ id: true });

export async function createPot(formData: FormData) {
  const { name, target, total, theme } = CreatePot.parse({
    name: formData.get('name'),
    target: formData.get('target'),
    total: formData.get('total'),
    theme: formData.get('theme'),
  });

  const targetInCents = target * 100;
  const totalInCents = total * 100;

  await sql`
    INSERT INTO pots (name, target, total, theme)
    VALUES (${name}, ${targetInCents}, ${totalInCents}, ${theme})
  `;

  revalidatePath('/dashboard/pots');
  redirect('/dashboard/pots');
}

export async function updatePot(id: string, formData: FormData) {
  const { name, target, total, theme } = UpdatePot.parse({
    name: formData.get('name'),
    target: formData.get('target'),
    total: formData.get('total'),
    theme: formData.get('theme'),
  })

  const targetInCents = target * 100;
  const totalInCents = total * 100;

  await sql`
    UPDATE pots
    SET name = ${name}, target = ${targetInCents}, total = ${totalInCents}, theme = ${theme}
    WHERE id = ${id}
  `;

  revalidatePath('/dashboard/pots');
  redirect('/dashboard/pots');
}

export async function deletePot(id: string) {
  await sql`DELETE FROM pots WHERE id = ${id}`;
  revalidatePath('/dashboard/pots');
}