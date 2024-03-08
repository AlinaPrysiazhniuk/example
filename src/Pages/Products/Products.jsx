import { useEffect, useState } from "react";
import ProductList from "../../Components/ProductList/ProductList";
// import { getProducts } from "../FakeApi";
import getTrendingMovies from "../FakeApi";

export default function Products() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const results = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <ProductList products={movies} />
    </div>
  );
}
