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
    <div className="min-vh-100 bg-light d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-header bg-white border-0 pt-4 px-4 pb-0 text-center">
                <h4 className="fw-bold text-dark mb-1">Edit Wishlist</h4>
                <p className="text-muted small">Perbarui data barang impianmu.</p>
              </div>
              
              <div className="card-body p-4">
                <form action={updateWishWithId}>
                  <div className="mb-4">
                    <label className="form-label small text-muted fw-bold text-uppercase">Nama Barang</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control bg-light border-0 py-3 rounded-3 fw-bold text-dark" 
                      defaultValue={wish.name} 
                      required 
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label small text-muted fw-bold text-uppercase">Harga (Rp)</label>
                    <input 
                      type="number" 
                      name="price" 
                      className="form-control bg-light border-0 py-3 rounded-3 fw-bold text-dark" 
                      defaultValue={wish.price} 
                      required 
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label small text-muted fw-bold text-uppercase">Catatan</label>
                    <textarea 
                      name="note" 
                      className="form-control bg-light border-0 py-3 rounded-3" 
                      rows={4} 
                      defaultValue={wish.note || ""}
                    ></textarea>
                  </div>
                  <div className="d-flex gap-2 pt-2">
                    <Link href="/wishlist" className="btn btn-light btn-lg rounded-pill w-50 fw-bold text-muted">
                      Batal
                    </Link>
                    <button type="submit" className="btn btn-primary btn-lg rounded-pill w-50 fw-bold shadow-sm">
                      Simpan
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}