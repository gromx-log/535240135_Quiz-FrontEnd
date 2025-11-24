import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DetailPage({ params }: { params: { id: string } }) {
  const wish = await prisma.wishlist.findUnique({
    where: { id: Number(params.id) },
  });

  if (!wish) return notFound(); // Memicu halaman 404

  return (
    <div className="container mt-5 text-center">
      <div className="card shadow mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h1 className="display-4">{wish.name}</h1>
          <h3 className="text-success">Rp {wish.price.toLocaleString()}</h3>
          <p className="lead mt-3">{wish.note || "Tidak ada catatan."}</p>
          <Link href="/wishlist" className="btn btn-secondary mt-3">
             &larr; Kembali ke List
          </Link>
        </div>
      </div>
    </div>
  );
}