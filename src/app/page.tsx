import Link from "next/link";

export default function Home() {
  return (
    <div className="container min-vh-100 d-flex flex-column align-items-center justify-content-center">
      
      {/* Hero Section */}
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm text-center w-100" style={{maxWidth: "800px"}}>
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-primary">My Wishlist App</h1>
          <p className="col-md-8 fs-4 mx-auto mt-3">
            Aplikasi sederhana untuk mencatat barang impianmu dan mengatur budget belanja.
          </p>
          
          <div className="d-flex gap-3 justify-content-center mt-4">
            <Link href="/wishlist" className="btn btn-primary btn-lg px-4 gap-3">
              Wishlist Kuy!
            </Link>
            <Link href="/explore" className="btn btn-outline-secondary btn-lg px-4">
              Cari Inspirasi? (API)
            </Link>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm mt-4" style={{maxWidth: "500px"}}>
        <div className="card-body d-flex align-items-center gap-4 p-4">
          <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: "60px", height: "60px", fontSize: "24px"}}>
            FF
          </div>
          <div>
            <h5 className="card-title mb-0 fw-bold">Filbert Ferdinand</h5>
            <p className="card-text text-muted mb-0">NIM: 535240135</p>
            <small className="text-success fw-bold">Topik: Personal WishList</small>
          </div>
        </div>
      </div>

      <footer className="mt-5 text-muted text-center">
        <small>&copy; @GromX-Log</small>
      </footer>
    </div>
  );
}