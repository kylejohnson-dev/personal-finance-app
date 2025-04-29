"use server"

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

//Budgets
const BudgetFormSchema = z.object({
  id: z.string(),
  category: z.string(),
  maximum: z.coerce.number(),
  theme: z.string(),
});

const CreateBudget = BudgetFormSchema.omit({ id: true });
const UpdateBudget = BudgetFormSchema.omit({ id: true });

export async function createBudget(formData: FormData) {
  const { category, maximum, theme } = CreateBudget.parse({
    category: formData.get('category'),
    maximum: formData.get('maximum'),
    theme: formData.get('theme'),
  });
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

const CreatePot = PotFormSchema.omit({ id: true, total: true });
const UpdatePot = PotFormSchema.omit({ id: true });

export async function createPot(formData: FormData) {
  const { name, target, theme } = CreatePot.parse({
    name: formData.get('name'),
    target: formData.get('target'),
    // total: formData.get('total'),
    theme: formData.get('theme'),
  });

  console.log(name, target, theme);

  const targetInCents = target * 100;
  const totalInCents = 0;

  // convert theme color to hexadecimal
  let hexadecimal: string;

  switch (theme) {
    case 'green':
      hexadecimal = '#277C78';
      break;
    case 'yellow':
      hexadecimal = '#F2CDAC';
      break;
    case 'cyan':
      hexadecimal = '#82C9D7';
      break;
    case 'navy':
      hexadecimal = '#626070';
      break;
    case 'red':
      hexadecimal = '#C94736';
      break;
    case 'purple':
      hexadecimal = '#826CB0'; //#AF81BA
      break;
    case 'turquoise':
      hexadecimal = '#597C7C';
      break;
    case 'brown':
      hexadecimal = '#93674F';
      break;
    case 'magenta':
      hexadecimal = '#934F6F';
      break;
    case 'blue':
      hexadecimal = '#3F82B2';
      break;
    case 'navy-grey':
      hexadecimal = '#97A0AC';
      break;
    case 'army-green':
      hexadecimal = '#7F9161';
      break;
    case 'pink':
      hexadecimal = '#AF81BA';
      break;
    case 'gold':
      hexadecimal = '#CAB361';
      break;
    case 'orange':
      hexadecimal = '#BE6C49';
      break;
    default:
      throw new Error('No value matched the Select values.');
  }

  await sql`
    INSERT INTO pots (name, target, total, theme)
    VALUES (${name}, ${targetInCents}, ${totalInCents}, ${hexadecimal})
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

// Transactions