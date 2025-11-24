import Link from "next/link";

export default function Home() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="text-center p-5 border rounded shadow bg-light">
        <h1 className="display-5 fw-bold">Filbert Ferdinand</h1>
        <h2 className="text-muted">NIM: 535240135</h2>
        <hr />
        <h3>Project: My Wishlist App</h3>
        <div className="mt-4 d-flex gap-3 justify-content-center">
          <Link href="/wishlist" className="btn btn-primary btn-lg">Lihat Wishlist</Link>
          <Link href="/explore" className="btn btn-success btn-lg">Explore API</Link>
        </div>
      </div>
    </div>
  );
}