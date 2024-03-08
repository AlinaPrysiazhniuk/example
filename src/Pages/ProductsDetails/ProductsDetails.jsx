import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";

export default function ProductDetails() {
  const { productId } = useParams();
  const location = useLocation();
  const backLink = location?.state?.from ?? "/products";
  // const product = getProductById(productId);

  return (
    <main>
      <Link to={backLink}>Go back</Link>
      <img src="https://via.placeholder.com/960x240" alt="" />
      <div>
        <h2>Product - - {productId}</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
      <div>Additional information</div>
      <NavLink to="contact" state={{ from: location?.state?.from }}>
        Contact
      </NavLink>
      <Outlet />
    </main>
  );
}
