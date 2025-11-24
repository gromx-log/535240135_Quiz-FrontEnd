import Link from "next/link";

export default function Home() {
  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-light">
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">
            
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              
              <div className="bg-primary text-white p-5 text-center">
                <h1 className="display-4 fw-bold mb-2">My Wishlist</h1>
                <p className="lead opacity-75">
                  Catat impianmu, atur budgetmu, wujudkan rencanamu.
                </p>
                
                <div className="d-flex gap-3 justify-content-center mt-4">
                  <Link href="/wishlist" className="btn btn-light btn-lg rounded-pill px-5 fw-bold text-primary shadow-sm">
                    Mulai
                  </Link>
                  <Link href="/explore" className="btn btn-outline-light btn-lg rounded-pill px-4">
                    Inspirasi
                  </Link>
                </div>
              </div>

              <div className="card-body p-5 bg-white text-center">
                <div className="d-inline-flex align-items-center justify-content-center bg-light text-primary rounded-circle mb-3" style={{width: "60px", height: "60px"}}>
                   <span className="h4 mb-0 fw-bold">FF</span>
                </div>
                
                <h5 className="fw-bold text-dark">Filbert Ferdinand</h5>
                <p className="text-muted small text-uppercase fw-bold ls-1 mb-3">NIM: 535240135</p>
                <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3 py-2 border border-success border-opacity-25">
                  Topik: Wishlist App
                </span>
                
                <hr className="my-4 text-muted opacity-25" />
                
                <small className="text-muted">
                  @gromx-log
                </small>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}