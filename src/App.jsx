// /* eslint-disable react-hooks/exhaustive-deps */
// import { useState, useEffect } from "react";
// import { getProducts } from "./Pages/FakeApi";
// import { useSearchParams } from "react-router-dom";

// const App = () => {
//   const [users, setUsers] = useState([]); //створюємо стейт для запису масиву користувачів
//   const [searchParams, setSearchParams] = useSearchParams();
//   //searchParams - зберігає поточні параметри пошуку, які витягуються із URL.
//   //setSearchParams є функцією, яку можна використовувати для оновлення параметрів пошуку.
//   const searchName = searchParams.get("username") ?? ""; // містить значення параметра пошуку "username", яке береться із URL. Якщо параметр не знайдено в URL, searchName буде порожнім рядком.

//   //дана функція проводить оновлення значення параметра пошуку в URL, коли воно змінюється в рядку пошуку
//   const updateQueryString = (username) => {
//     const nextParams = username !== "" ? { username } : {}; //якщо значення параметра 'username', отриманого
//     //із url, не пустий рядок, то його значення записуємо як нове значення параметра пошуку
//     setSearchParams(nextParams); //оновлюємо значення параметра пошуку в URL  за допомогою нових параметрів, які зберігаються в nextParams.
//   };

//   const visible = users.filter((user) =>
//     user.username.toLowerCase().includes(searchName.toLowerCase())
//   );

//   useEffect(() => {
//     async function fetchUsers() {
//       const data = await getProducts();
//       setUsers(data);
//     }
//     fetchUsers();
//   }, []);

//   return (
//     <>
//       <form>
//         <input
//           type="text"
//           name="username"
//           value={searchName}
//           onChange={(e) => updateQueryString(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {visible.map((user) => (
//           <li key={user.id}>Username: {user.username}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

// import { useState, useEffect } from "react";
// import { getProducts } from "./Pages/FakeApi";

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [filter, setFilter] = useState("");

//   useEffect(() => {
//     async function fetchUsers() {
//       const data = await getProducts();
//       setUsers(data);
//     }
//     fetchUsers();
//   }, []);

//   const filterUsers = users.filter((user) =>
//     user.username.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <>
//       <form>
//         <input
//           type="text"
//           name="username"
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {filterUsers.map((user) => (
//           <li key={user.id}>Username: {user.username}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import NotFound from "./Pages/NotFound/NotFound";
import Products from "./Pages/Products/Products";
import ProductsDetails from "./Pages/ProductsDetails/ProductsDetails";
import Mission from "./Components/ProductList/Mission/Mission";
import Team from "./Components/ProductList/Team/Team";
import Contact from "./Components/ProductList/Contact/Contact";
import { NavLink, Route, Routes } from "react-router-dom";
import css from "./App.module.css";

export default function App() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          About
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Products
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductsDetails />}>
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
