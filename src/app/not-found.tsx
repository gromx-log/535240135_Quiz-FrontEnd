import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container text-center mt-5 pt-5">
      <h1 className="display-1 text-danger">404</h1>
      <p className="lead">Sepertinya kamu tersesat bro!</p>
      <Link href="/" className="btn btn-dark">Kembali ke Home?</Link>
    </div>
  );
}