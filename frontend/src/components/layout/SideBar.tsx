import { NavLink } from "react-router-dom";

type NavItemProps = {
  to: string;
  label: string;
};

function NavItem({ to, label }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
    flex items-center gap-3
    px-3 py-2
    rounded-xl
    text-sm font-medium
    transition
    ${
      isActive
        ? "bg-indigo-50 text-indigo-600"
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    }
    `
      }
    >
      <span className="h-2 w-2 rounded-full bg-indigo-400">
        <span>{label}</span>
      </span>
    </NavLink>
  );
}
export default function SideBar() {
  return <p>Adam</p>;

  /*
    <>
      <h1 className="text-4xl py-1.5">Neon Books</h1>
      <header className="sticky rounded-2xl top-0 z-50 w-full border-b border-white/20 bg-gradient-to-t from-sky-500 to-indigo-500">
        <nav className="mx-auto flex h-27 max-w-5xl items-center justify-center gap-3">
          <Link
            to="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Books
          </Link>
          <span className="text-white/60">|</span>
          <Link
            to="/favorites"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Favorites
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
        <Route path="/" element={<h2></h2>} />
        <Route path="/user" element={<h2></h2>} />
      </Routes>
    </>
  ); */
}
