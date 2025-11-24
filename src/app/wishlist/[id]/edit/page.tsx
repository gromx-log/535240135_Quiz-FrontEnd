import { prisma } from "@/lib/prisma";
import { updateWish } from "@/app/actions";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function EditPage({ params }: { params: { id: string } }) {
  const wish = await prisma.wishlist.findUnique({
    where: { id: Number(params.id) },
  });

  if (!wish) return notFound();

  const updateWishWithId = updateWish.bind(null, wish.id);

  return (
    <div className="container mt-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-header bg-warning text-dark">
          <h4 className="mb-0">Edit Wishlist</h4>
        </div>
        <div className="card-body">
          <form action={updateWishWithId}>
            <div className="mb-3">
              <label className="form-label">Nama Barang</label>
              <input 
                type="text" 
                name="name" 
                className="form-control" 
                defaultValue={wish.name} 
                required 
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Harga (Rp)</label>
              <input 
                type="number" 
                name="price" 
                className="form-control" 
                defaultValue={wish.price} 
                required 
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label">Catatan</label>
              <textarea 
                name="note" 
                className="form-control" 
                rows={3} 
                defaultValue={wish.note || ""}
              ></textarea>
            </div>

            <div className="d-flex justify-content-between">
              <Link href="/wishlist" className="btn btn-secondary">Batal</Link>
              <button type="submit" className="btn btn-primary">Simpan Perubahan</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}