import axios from "axios";

const API = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export const fectUsers = () => API.get("/users");
export const fetchTodos = (id: number) => API.get(`/users/${id}/todos`);
export const updateTodo = (id: number) =>
  API.patch(`/todos/${id}`, {
    body: JSON.stringify({ completed: true }),
  });
