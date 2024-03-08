import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src="https://via.placeholder.com/200x100" alt="" />
              <h3>{product.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
