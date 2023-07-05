export async function fetchAll() {
  const data = await fetch('https://dummyjson.com/todos');
  const result = await data.json();
  return result;
}

export async function addTask(value) {
  const data = await fetch('https://dummyjson.com/todos/add', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          todo: value,
                          completed: false,
                          userId: 5,
                        })
                      })
  const result = await data.json();
  return result;
}

export async function updateTask({taskId, isCompleted}) {
  const data = await fetch(`https://dummyjson.com/todos/${taskId}`, {
                        method: 'PUT', /* or PATCH */
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          completed: isCompleted,
                        })
                      })
  const result = await data.json();
  return result;
}

export async function deleteTask(taskId) {
  const data = await fetch(`https://dummyjson.com/todos/${taskId}`, {
                        method: 'DELETE',
                      })
  const result = await data.json();
  return result;
}