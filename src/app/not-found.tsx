import Link from "next/link";

export default function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <p className="fs-3"> <span className="text-danger">Oops!</span> Halaman tidak ditemukan.</p>
        <p className="lead">
            Sepertinya kamu tersesat lil bro!.
        </p>
        <Link href="/" className="btn btn-primary">
            Kembali ke Home
        </Link>
      </div>
    </div>
  );
}