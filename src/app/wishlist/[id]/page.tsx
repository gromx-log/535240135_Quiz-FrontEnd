import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function DetailPage({ params }: { params: { id: string } }) {
  const wish = await prisma.wishlist.findUnique({
    where: { id: Number(params.id) },
  });

  if (!wish) return notFound();

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              
              <div className="card-header bg-primary text-white p-4 text-center border-0">
                <h6 className="text-uppercase ls-2 mb-0 opacity-75 small">Detail Item</h6>
              </div>

              <div className="card-body p-5 text-center bg-white">
                <h1 className="display-5 fw-bold text-dark mb-2">{wish.name}</h1>
                
                <div className="my-4">
                  <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-4 py-2 fs-4 fw-normal border border-success border-opacity-25">
                    Rp {wish.price.toLocaleString("id-ID")}
                  </span>
                </div>
                <hr className="my-4 text-muted opacity-25 w-50 mx-auto" />

                <div className="bg-light p-4 rounded-4 mb-5 text-start">
                   <h6 className="text-muted text-uppercase small fw-bold mb-2">Catatan:</h6>
                   <p className="lead fs-6 mb-0 text-dark">
                      {wish.note ? wish.note : <span className="text-muted fst-italic">Tidak ada catatan khusus untuk barang ini.</span>}
                   </p>
                </div>

                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <Link href="/wishlist" className="btn btn-outline-secondary btn-lg rounded-pill px-4 fw-bold">
                    &larr; Kembali
                  </Link>
                  <Link href={`/wishlist/${wish.id}/edit`} className="btn btn-warning btn-lg rounded-pill px-5 fw-bold text-dark shadow-sm">
                    Edit Barang
                  </Link>
                </div>

              </div>
              
              <div className="card-footer bg-white border-0 text-center pb-4">
                <small className="text-muted opacity-50">Item ID: #{wish.id}</small>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}