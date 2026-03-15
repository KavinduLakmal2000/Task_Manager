import { useState } from "react"
import { FaHome, FaTasks, FaPlus, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa"
import { NavLink } from "react-router-dom"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("home")

  return (
    <nav className="backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border-b border-white/20 shadow-lg">

      <div className="max-w-full mx-auto px-6 py-4 flex items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-800 dark:text-indigo-400">
          TaskManager
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 mx-auto text-gray-700 dark:text-gray-200">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg transition ${isActive
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-slate-800"
                }`
              }
            >
              <FaHome />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg transition ${isActive
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-slate-800"
                }`
              }
            >
              <FaTasks />
              Task List
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg transition ${isActive
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-slate-800"
                }`
              }
            >
              <FaPlus />
              Add Task
            </NavLink>
          </li>

        </ul>

        {/* Sign Out Button */}
        <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition shadow">
          <FaSignOutAlt />
          Sign Out
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto text-2xl text-gray-700 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">

          <button
            onClick={() => setActive("home")}
            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <FaHome />
            Home
          </button>

          <button
            onClick={() => setActive("tasks")}
            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <FaTasks />
            Task List
          </button>

          <button
            onClick={() => setActive("add")}
            className="flex items-center gap-2 w-full px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
          >
            <FaPlus />
            Add Task
          </button>

          <button className="flex items-center gap-2 w-full px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">
            <FaSignOutAlt />
            Sign Out
          </button>

        </div>
      )}

    </nav>
  )
}

export default Navbar