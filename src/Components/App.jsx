import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const items = [
  {
    id: 1,
    title: "Back End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 2,
    title: "Front End Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
  },
  {
    id: 3,
    title: "User Interface Designer",
    department: "Design",
    type: "Full-time",
    location: "Remote",
  },
];

export default function App() {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable no-unused-vars */
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

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navigation from "./Navigation";

// export default function App() {
//   return (
//     <div>
//       <h1>React Router</h1>

//       <Navigation />

//       <Routes>
//         <Route path="/" element={<div>Home page</div>} />
//         <Route path="/payments" element={<div>Payments page</div>} />
//       </Routes>
//     </div>
//   );
// }
