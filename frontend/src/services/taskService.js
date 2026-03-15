const API_URL = "http://localhost:8080/tasks"

// GET all tasks
export const getTasks = async () => {
  const response = await fetch(API_URL)
  return response.json()
}

// CREATE task
export const createTask = async (task) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  })
  
  if (!response.ok) {
    throw new Error("Update failed")
  }

  return true
}

// UPDATE task
export const updateTask = async (id, task) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task)
  })

  if (!response.ok) {
    throw new Error("Update failed")
  }

  return true
}


// DELETE task
export const deleteTask = async (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
}

// SEARCH task
export const searchTasks = async (title) => {
  const response = await fetch(`${API_URL}/search?title=${title}`)
  return response.json()
}