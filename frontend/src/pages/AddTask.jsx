import { useState } from "react"
import { FaTasks, FaAlignLeft, FaCheckCircle } from "react-icons/fa"
import { createTask } from "../services/taskService"
import Swal from "sweetalert2";


function AddTask() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("pending")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const task = {
      title,
      description,
      status
    };

    try {
      const response = await createTask(task);

      // SweetAlert success
      Swal.fire({
        icon: "success",
        title: "Task Added!",
        text: "Your task has been added successfully!",
        timer: 2000,
        showConfirmButton: false
      });

      // Reset form
      setTitle("");
      setDescription("");
      setStatus("pending");

      console.log("Created Task:", response);
    } catch (error) {
      console.error("Error creating task:", error);

      // SweetAlert error
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: error.message || "An error occurred while adding the task.",
      });
    }
  };


  return (
    <div className="min-h-screen flex items-start justify-center px-6 mt-10">

      <div className="w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-8
                opacity-0 animate-[fadeSlideDown_0.7s_ease-out_forwards]">

        {/* Title */}
        <h1
          className="text-4xl font-bold mb-8 text-center bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
          style={{
            textShadow: "0 0 25px rgba(99,102,241,0.5)"
          }}
        >
          Add New Task
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-gray-300">
              <FaTasks />
              Task Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700 
             focus:outline-none focus:ring-2 focus:ring-indigo-500 transition text-white
             placeholder-gray-400"
              placeholder="Enter task title..."
            />
          </div>

          {/* Description */}
          <div>
            <label className="flex items-center gap-2 mb-2 text-gray-300">
              <FaAlignLeft />
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700
              focus:outline-none focus:ring-2 focus:ring-indigo-500 transition placeholder-gray-400 text-white"
              placeholder="Enter task description..."
            />
          </div>

          {/* Status */}
          <div>
            <label className="flex items-center gap-2 mb-3 text-gray-300">
              <FaCheckCircle />
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-800 text-slate-200
             border border-slate-700
             focus:outline-none focus:ring-2 focus:ring-indigo-500
             transition"
            >
              <option value="" disabled className="text-gray-400">
                Select status
              </option>

              <option value="pending" className="text-yellow-400">
                🟡 Pending
              </option>

              <option value="inprogress" className="text-blue-400">
                🔵 In Progress
              </option>

              <option value="completed" className="text-green-400">
                🟢 Completed
              </option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white
             bg-linear-to-r from-indigo-500 to-purple-500
             hover:from-purple-500 hover:to-indigo-500
             transition-all duration-300 transform hover:scale-105"
            style={{
              boxShadow: "0 0 20px rgba(99,102,241,0.5)"
            }}
            onMouseEnter={(e) =>
              e.currentTarget.style.boxShadow = "0 0 35px rgba(99,102,241,0.8)"
            }
            onMouseLeave={(e) =>
              e.currentTarget.style.boxShadow = "0 0 20px rgba(99,102,241,0.5)"
            }
          >
            Add Task
          </button>

        </form>

      </div>

    </div>
  )
}

export default AddTask