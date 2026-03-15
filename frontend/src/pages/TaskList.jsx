import { getTasks, deleteTask, updateTask, searchTasks } from "../services/taskService"
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa"
import EditTaskModal from "../components/EditTaskModal"
import { timeAgo } from "../utils/timeAgo"
import { useState, useEffect } from "react"
import Swal from "sweetalert2"

export default function TaskList() {

  const [selectedTask, setSelectedTask] = useState(null)
  const [search, setSearch] = useState("")
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    const data = await getTasks()
    setTasks(data)
  }

  const handleDelete = async (id, title) => {
    const result = await Swal.fire({
      title: `Are you sure you want to delete "${title}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    })

    if (result.isConfirmed) {
      try {
        await deleteTask(id)
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `Task "${title}" has been deleted.`,
          timer: 2000,
          showConfirmButton: false,
        })
        loadTasks() // refresh table
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Delete Failed",
          text: error.message || "An error occurred while deleting the task.",
        })
      }
    }
  }


  const handleSearch = async (value) => {
    setSearch(value)

    if (value === "") {
      loadTasks()
    } else {
      const data = await searchTasks(value)
      setTasks(data)
    }
  }

  const handleUpdate = async (updatedTask) => {
    await updateTask(updatedTask.id, updatedTask)
    setSelectedTask(null)
    loadTasks()
  }

  return (
    <div className="px-6 pt-20 flex justify-center">

      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-md border border-white/10
      rounded-2xl shadow-xl p-8 opacity-0 animate-[fadeSlideDown_0.7s_ease-out_forwards]">
        <div className="relative flex items-center justify-center mb-6">

          {/* TITLE */}
          <h1
            className="text-4xl font-bold text-indigo-400"
            style={{ textShadow: "0 0 12px rgba(99,102,241,0.8)" }}
          >
            Task List
          </h1>

          {/* SEARCH BAR */}
          <div className="absolute right-0 w-72">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full
              bg-slate-800/70 border border-slate-700
              text-gray-200 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-indigo-500
              transition"
            />

          </div>

        </div>
        <div className="overflow-x-auto">

          <table className="w-full text-left border-collapse">

            <thead>
              <tr className="border-b border-white/10 text-gray-300">
                <th className="py-3">Title</th>
                <th className="py-3">Description</th>
                <th className="py-3">Status</th>
                <th className="py-3">Created</th>
                <th className="py-3">Updated</th>
                <th className="py-3 text-center">Edit</th>
                <th className="py-3 text-center">Delete</th>

              </tr>
            </thead>

            <tbody>

              {tasks.map((task) => (

                <tr
                  key={task.id}
                  className="border-b border-white/5 hover:bg-white/5 transition"
                >

                  <td className="py-4 font-medium text-gray-400">{task.title}</td>

                  <td className="py-4 text-gray-400">
                    {task.description}
                  </td>

                  <td className="py-4">

                    <span className={`px-3 py-1 rounded-full text-sm
                        ${task.status === "Completed" ? "bg-green-500/20 text-green-300" :
                        task.status === "In Progress" ? "bg-yellow-500/20 text-yellow-300" :
                          "bg-indigo-500/20 text-indigo-300"}`}>
                      {task.status}
                    </span>

                  </td>

                  <td className="py-4 text-gray-400 relative cursor-pointer group">
                    {/* timeAgo text */}
                    <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                      {timeAgo(task.createdAt)}
                    </span>

                    {/* full date text */}
                    <span className="absolute left-0 top-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      {new Date(task.createdAt).toLocaleString()}
                    </span>
                  </td>

                  <td className="py-4 text-gray-400 relative cursor-pointer group">
                    {/* timeAgo text */}
                    <span className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                      {timeAgo(task.updatedAt)}
                    </span>

                    {/* full date text */}
                    <span className="absolute left-0 top-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                      {new Date(task.updatedAt).toLocaleString()}
                    </span>
                  </td>

                  {/* EDIT BUTTON */}
                  <td className="py-4 text-center">

                    <button
                      onClick={() => setSelectedTask(task)}
                      className="px-4 py-2 rounded-lg text-white
                      bg-linear-to-r from-indigo-500 to-purple-500
                      hover:from-purple-500 hover:to-indigo-500
                      transition transform hover:scale-105"
                      style={{
                        boxShadow: "0 0 12px rgba(99,102,241,0.6)"
                      }}
                    >
                      <FaEdit />
                    </button>

                  </td>

                  {/* DELETE BUTTON */}
                  <td className="py-4 text-center">

                    <button
                      onClick={() => handleDelete(task.id, task.title)}
                      className="px-4 py-2 rounded-lg text-white
                      bg-linear-to-r from-red-500 to-pink-500
                      hover:from-pink-500 hover:to-red-500
                      transition transform hover:scale-105"
                      style={{
                        boxShadow: "0 0 12px rgba(239,68,68,0.6)"
                      }}
                    >
                      <FaTrash />
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
      {selectedTask && (
        <EditTaskModal
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>

  )
}



