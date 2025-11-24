'use server'

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addWish(formData: FormData) {
  await prisma.wishlist.create({
    data: {
      name: formData.get("name") as string,
      price: Number(formData.get("price")),
      note: formData.get("note") as string,
    },
  });
  revalidatePath("/wishlist");
}

export async function deleteWish(id: number) {
  await prisma.wishlist.delete({ where: { id } });
  revalidatePath("/wishlist");
}

export async function updateWish(id: number, formData: FormData) {
  await prisma.wishlist.update({
    where: { id },
    data: {
      name: formData.get("name") as string,
      price: Number(formData.get("price")),
      note: formData.get("note") as string,
    },
  });
  
  revalidatePath("/wishlist");
  redirect("/wishlist");
}