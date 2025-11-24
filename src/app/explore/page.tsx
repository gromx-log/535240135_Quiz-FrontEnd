import Link from "next/link";

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=6');
  return res.json();
}

export default async function ExplorePage() {
  const data = await getProducts();

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Inspirasi Belanja (API External)</h1>
        <Link href="/" className="btn btn-outline-dark">Home</Link>
      </div>

      <div className="row">
        {data.products.map((product: any) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.thumbnail} className="card-img-top" alt={product.title} style={{height: "200px", objectFit: "cover"}}/>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-truncate">{product.description}</p>
                <p className="fw-bold">$ {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}