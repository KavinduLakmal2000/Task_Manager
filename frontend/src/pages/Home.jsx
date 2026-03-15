import { motion } from "framer-motion"
import { FaReact, FaJava, FaDatabase, FaTasks } from "react-icons/fa"

function Home() {
  return (
    <div className="from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center px-6 mt-40">

      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-indigo-400 mb-4 [text-shadow:0_0_15px_rgba(99,102,241,0.8)]">
          Task Manager
        </h1>

        <p className="text-gray-300 text-lg max-w-xl">
          A modern task management system built with React frontend and
          Java Spring Boot backend connected with MySQL database.
        </p>
      </motion.div>

      {/* Floating Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">

        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-2xl p-6 shadow-lg"
        >
          <FaReact className="text-4xl text-cyan-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">React Frontend</h3>
          <p className="text-gray-300 text-sm">
            Built using modern React components with reusable UI and
            Tailwind CSS styling.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-2xl p-6 shadow-lg"
        >
          <FaJava className="text-4xl text-orange-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Spring Boot API</h3>
          <p className="text-gray-300 text-sm">
            Backend powered by Java Spring Boot providing REST APIs for
            managing tasks.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-2xl p-6 shadow-lg"
        >
          <FaDatabase className="text-4xl text-green-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">MySQL Database</h3>
          <p className="text-gray-300 text-sm">
            All tasks are securely stored in a MySQL relational database
            with optimized queries.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5.5, repeat: Infinity }}
          className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-2xl p-6 shadow-lg"
        >
          <FaTasks className="text-4xl text-indigo-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Task Management</h3>
          <p className="text-gray-300 text-sm">
            Create, update, and manage tasks easily with a clean modern UI.
          </p>
        </motion.div>

      </div>

    </div>
  )
}

export default Home