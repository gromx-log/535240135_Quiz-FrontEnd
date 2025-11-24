import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DetailPage({ params }: { params: { id: string } }) {
  const wish = await prisma.wishlist.findUnique({
    where: { id: Number(params.id) },
  });

  if (!wish) return notFound();

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg" style={{ maxWidth: "600px", width: "100%" }}>
        <div className="card-header bg-primary text-white text-center">
            <h3 className="mb-0">Detail Barang</h3>
        </div>
        <div className="card-body p-5 text-center">
          
          {/* Judul Barang */}
          <h1 className="display-4 fw-bold mb-3 text-dark">{wish.name}</h1>
          
          {/* Harga */}
          <h2 className="text-success mb-4">
            Rp {wish.price.toLocaleString("id-ID")}
          </h2>

          <hr />
          
          {/* Catatan */}
          <div className="my-4">
             <h5 className="text-muted text-uppercase small ls-1">Catatan:</h5>
             <p className="lead fst-italic">
                {wish.note ? `"${wish.note}"` : "Tidak ada catatan khusus."}
             </p>
          </div>

          <hr />

          {/* Tombol Back & Edit */}
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link href="/wishlist" className="btn btn-outline-secondary px-4">
              &larr; Kembali ke List
            </Link>
            <Link href={`/wishlist/${wish.id}/edit`} className="btn btn-warning px-4">
              Edit Barang
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}