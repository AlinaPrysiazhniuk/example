import { useState } from "react";

export default function Form({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    onSubmit(query);
    setQuery("");
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input type="text" name="query" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}
