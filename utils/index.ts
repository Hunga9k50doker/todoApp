import { TodoType } from "@/models/todo";
import { UserType } from "@/models/user";

export const convertToTypeOptionSelect = (data: Array<UserType>) => {
  const newUsers = data.map((user) => ({
    ...user,
    label: user.name,
    value: user.id,
  }));
  return newUsers;
};

export const sortTodoList = (data: Array<TodoType>) => {
  const newTodos = data.sort((todoFirst: TodoType, todoSecond: TodoType) => {
    if (todoFirst.completed === todoSecond.completed) return todoFirst.title.localeCompare(todoSecond.title);
    else if (todoFirst.completed && !todoSecond.completed) return 1;
    else return -1;
  });
  return newTodos;
};
