import { useState, useEffect, useRef } from "react"
import { FaTimes, FaEdit, FaCheckCircle, FaTasks, FaAlignLeft } from "react-icons/fa"
import Swal from "sweetalert2"

export default function EditTaskModal({ task, onClose, onUpdate }) {

  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [status, setStatus] = useState(task.status)

  const modalRef = useRef(null)

  // ESC key close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  // Click outside close
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) onClose()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const updatedTask = {
      ...task,
      title,
      description,
      status
    }

    try {
      await onUpdate(updatedTask)

      // Show success SweetAlert
      Swal.fire({
        icon: "success",
        title: "Task Updated",
        text: `Task "${updatedTask.title}" has been updated successfully!`,
        timer: 2000,
        showConfirmButton: false,
      })

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message || "An error occurred while updating the task.",
      })
    }

    onClose()
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
      onMouseDown={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10
          rounded-2xl shadow-xl p-8 opacity-0 animate-[fadeSlideDown_0.7s_ease-out_forwards]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h2
            className="text-3xl font-bold text-indigo-400 flex items-center gap-2"
            style={{ textShadow: "0 0 10px rgba(99,102,241,0.8)" }}
          >
            <FaEdit /> Edit Task
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* TITLE */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-gray-300">
              <FaTasks /> Task Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700
                focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white
                placeholder-gray-400"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-gray-300">
              <FaAlignLeft /> Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700
                focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white
                placeholder-gray-400"
            />
          </div>

          {/* STATUS */}
          <div>
            <label className="flex items-center gap-2 mb-3 text-gray-300">
              <FaCheckCircle /> Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 text-slate-200
                border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500
                transition"
            >
              <option value="" disabled>Select status</option>
              <option value="pending">🟡 Pending</option>
              <option value="inprogress">🔵 In Progress</option>
              <option value="completed">🟢 Completed</option>
            </select>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white
              bg-linear-to-r from-indigo-500 to-purple-500
              hover:from-purple-500 hover:to-indigo-500
              transition-all duration-300 transform hover:scale-105"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  )
}