'use server'
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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