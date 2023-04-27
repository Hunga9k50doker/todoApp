import { fetchTodos, updateTodo } from "@/apis";
export const getTodos = async (id: number) => {
  try {
    const { data } = await fetchTodos(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateTodoItem = async (id: number) => {
  try {
    const { data } = await updateTodo(id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
