import { prisma } from "@/lib/prisma";
import { addWish, deleteWish } from "../actions";
import Link from "next/link";

export default async function WishlistPage() {
  const wishes = await prisma.wishlist.findMany({
    orderBy: { id: 'desc' }
  });

  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>My Wishlist Project</h1>
        <Link href="/" className="btn btn-outline-secondary">Back to Home</Link>
      </div>
      
      {/* Form Create Baru */}
      <div className="card mb-5 p-4 shadow bg-light border-0">
        <h5 className="mb-3">Tambah Keinginan Baru</h5>
        <form action={addWish} className="row g-3">
          <div className="col-md-5">
            <input type="text" name="name" className="form-control" placeholder="Nama Barang..." required />
          </div>
          <div className="col-md-3">
            <input type="number" name="price" className="form-control" placeholder="Harga (Rp)..." required />
          </div>
          <div className="col-md-4">
             <div className="input-group">
                <input type="text" name="note" className="form-control" placeholder="Catatan singkat..." />
                <button type="submit" className="btn btn-primary">Tambah</button>
             </div>
          </div>
        </form>
      </div>

      {/* List Data */}
      <div className="row">
        {wishes.length === 0 ? (
            <div className="col-12 text-center text-muted py-5">
                <p>Belum ada wishlist. Yuk tambah sekarang!</p>
            </div>
        ) : (
            wishes.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start">
                        <h5 className="card-title text-primary">{item.name}</h5>
                        <span className="badge bg-success">Rp {item.price.toLocaleString()}</span>
                    </div>
                    <p className="card-text text-muted small mt-2">
                        {item.note ? item.note : "- Tidak ada catatan -"}
                    </p>
                    
                    <hr />

                    <div className="d-flex gap-2 justify-content-end">
                        {/* Tombol Detail */}
                        <Link href={`/wishlist/${item.id}`} className="btn btn-sm btn-info text-white">
                            Detail
                        </Link>
                        
                        {/* Tombol Edit */}
                        <Link href={`/wishlist/${item.id}/edit`} className="btn btn-sm btn-warning">
                            Edit
                        </Link>

                        {/* Tombol Delete */}
                        <form action={deleteWish.bind(null, item.id)}>
                            <button className="btn btn-sm btn-danger">Delete</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            ))
        )}
      </div>
    </div>
  );
}