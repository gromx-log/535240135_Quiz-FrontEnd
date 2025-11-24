import { prisma } from "@/lib/prisma";
import { addWish, deleteWish } from "../actions";

export default async function WishlistPage() {
  const wishes = await prisma.wishlist.findMany();

  return (
    <div className="container mt-5">
      <h1 className="mb-4">My Wishlist</h1>

      {/* Form Untuk Tambah Produk Baru */}
      <div className="card mb-4 p-3 shadow-sm">
        <form action={addWish} className="row g-3">
          <div className="col-md-4">
            <input type="text" name="name" className="form-control" placeholder="Nama Barang" required />
          </div>
          <div className="col-md-3">
            <input type="number" name="price" className="form-control" placeholder="Harga" required />
          </div>
          <div className="col-md-3">
            <input type="text" name="note" className="form-control" placeholder="Catatan" />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-primary w-100">Tambah</button>
          </div>
        </form>
      </div>

      {/* List Data */}
      <div className="row">
        {wishes.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Rp {item.price.toLocaleString()}</h6>
                <p className="card-text">{item.note}</p>

                <div className="d-flex gap-2">
                    {/* Link ke Detail */}
                    <a href={`/wishlist/${item.id}`} className="btn btn-sm btn-info text-white">Detail</a>

                    {/* Tombol Delete */}
                    <form action={deleteWish.bind(null, item.id)}>
                        <button className="btn btn-sm btn-danger">Delete</button>
                    </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}