import { Link, Route, Routes } from "react-router-dom";


export default function NavBar() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-gradient-to-t from-sky-500 to-indigo-500">
        <nav className="mx-auto flex h-27 max-w-5xl items-center justify-center gap-3">
          <Link
            to="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Books
          </Link>
          <span className="text-white/60">|</span>
          <Link
            to="/user"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            User
          </Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<h2>Books list</h2>} />
        <Route path="/user" element={<h2>User Page</h2>} />
      </Routes>
    </>
  );
}
