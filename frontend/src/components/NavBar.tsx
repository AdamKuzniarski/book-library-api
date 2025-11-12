import { Link, Route, Routes } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/" className="">Books</Link> |<Link to="/user" className="">User</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Books list</h2>} />
        <Route path="/user" element={<h2>User Page</h2>} />
      </Routes>
    </div>
  );
}
