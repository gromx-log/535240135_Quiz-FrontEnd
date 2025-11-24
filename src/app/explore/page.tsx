import Link from "next/link";
interface Product {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
}
async function getProducts() {
  const res = await fetch('https://dummyjson.com/products?limit=6&select=title,price,thumbnail,description', {
    cache: 'no-store'
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function ExplorePage() {
  const data = await getProducts();

  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Inspirasi Belanja</h1>
        <p className="text-muted">Data diambil dari External Public API (DummyJSON)</p>
        <Link href="/" className="btn btn-sm btn-outline-primary">Kembali ke Home</Link>
      </div>
      
      <div className="row">
        {data.products.map((product: Product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <img 
                src={product.thumbnail} 
                className="card-img-top bg-light" 
                alt={product.title} 
                style={{height: "200px", objectFit: "contain"}}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{product.title}</h5>
                <p className="card-text text-muted small flex-grow-1">
                    {product.description.substring(0, 60)}...
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold fs-5">$ {product.price}</span>
                    <button className="btn btn-sm btn-dark" disabled>Lihat di API</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}