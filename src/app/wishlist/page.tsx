import { prisma } from "@/lib/prisma";
import { addWish, deleteWish } from "../actions";
import Link from "next/link";

export default async function WishlistPage() {
  const wishes = await prisma.wishlist.findMany({
    orderBy: { id: 'desc' }
  });

  const totalBudget = wishes.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <h1 className="display-6 fw-bold text-dark mb-0">My Wishlist</h1>
            <p className="text-muted mb-0 small">Atur daftar keinginanmu di sini.</p>
          </div>
          <Link href="/" className="btn btn-outline-secondary rounded-pill px-4">
            &larr; Back to Home
          </Link>
        </div>

        <div className="row mb-4">
          <div className="col-md-12">
            <div className="alert alert-primary border-0 shadow-sm rounded-4 d-flex align-items-center justify-content-between px-4">
              <span>Total Budget yang dibutuhkan:</span>
              <span className="fw-bold fs-5">Rp {totalBudget.toLocaleString("id-ID")}</span>
            </div>
          </div>
        </div>
        
        <div className="card border-0 shadow rounded-4 mb-5 overflow-hidden">
          <div className="card-header bg-white border-0 pt-4 px-4 pb-0">
            <h5 className="fw-bold text-primary mb-0">Tambah Item Baru!</h5>
          </div>
          <div className="card-body p-4">
            <form action={addWish} className="row g-3">
              <div className="col-md-4">
                <label className="form-label small text-muted fw-bold">NAMA BARANG</label>
                <input 
                  type="text" 
                  name="name" 
                  className="form-control bg-light border-0 py-2" 
                  placeholder="Contoh: Macbook Air M1" 
                  required 
                />
              </div>
              <div className="col-md-3">
                <label className="form-label small text-muted fw-bold">HARGA (RP)</label>
                <input 
                  type="number" 
                  name="price" 
                  className="form-control bg-light border-0 py-2" 
                  placeholder="15000000" 
                  required 
                />
              </div>
              <div className="col-md-3">
                <label className="form-label small text-muted fw-bold">CATATAN (OPSIONAL)</label>
                <input 
                  type="text" 
                  name="note" 
                  className="form-control bg-light border-0 py-2" 
                  placeholder="Warna silver..." 
                />
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button type="submit" className="btn btn-primary w-100 py-2 rounded-pill fw-bold shadow-sm">
                  + Simpan
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          {wishes.length === 0 ? (
            <div className="col-12 text-center py-5">
                <div className="text-muted opacity-50 display-1 mb-3">☹️</div>
                <h4 className="text-muted">Wishlist masih kosong.</h4>
                <p className="text-muted small">Yuk tambahkan barang impianmu sekarang!</p>
            </div>
          ) : (
            wishes.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card h-100 border-0 shadow-sm rounded-4 hover-shadow transition-all">
                  <div className="card-body p-4 d-flex flex-column">
                    
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h5 className="card-title fw-bold text-dark mb-0 text-truncate" style={{maxWidth: "65%"}}>
                        {item.name}
                      </h5>
                      <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2 border border-success border-opacity-25">
                        Rp {item.price.toLocaleString("id-ID")}
                      </span>
                    </div>

                    <div className="bg-light p-3 rounded-3 mb-4 flex-grow-1">
                       <p className="card-text text-muted small mb-0">
                         {item.note ? item.note : <span className="fst-italic opacity-50">Tidak ada catatan.</span>}
                       </p>
                    </div>
                    
                    <div className="d-flex gap-2 pt-2 border-top">
                        <Link href={`/wishlist/${item.id}`} className="btn btn-sm btn-outline-primary flex-grow-1 rounded-pill fw-bold">
                            Detail
                        </Link>
                        
                        <Link href={`/wishlist/${item.id}/edit`} className="btn btn-sm btn-outline-warning rounded-pill px-3 fw-bold text-dark">
                            Edit
                        </Link>
                        <form action={deleteWish.bind(null, item.id)}>
                            <button className="btn btn-sm btn-outline-danger rounded-pill px-3 fw-bold">
                                Hapus
                            </button>
                        </form>
                    </div>

                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}