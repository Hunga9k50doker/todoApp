import React, { useState } from "react";
import Loading from "@/components/Loading";
import { TodoType } from "@/models/todo";
import { DoneIcon, PendingIcon } from "@/assets/icons";
import { convertToTypeOptionSelect, sortTodoList } from "@/utils";

interface PropsType {
  todo: TodoType;
  todos: Array<TodoType>;
  setTodos: (todos: any) => void;
}

const TodoItem = ({ todo, setTodos, todos }: PropsType) => {
  const [isLoading, setIsLoading] = useState(false);
  const onMarkDone = async (id: number) => {
    setIsLoading(true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: true }),
    });
    const data = await response.json();
    setIsLoading(false);
    if (data) {
      const newTodos = todos.map((todo: TodoType) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
      setTodos(sortTodoList(newTodos));
    }
  };

  return (
    <li className="border-b border-gray-300 py-4 px-[24px] text-[14px] flex justify-between items-center">
      <p className="flex items-center gap-1">
        {todo.completed ? <DoneIcon /> : <PendingIcon />}
        {todo.title}
      </p>
      {!todo.completed && (
        <button
          onClick={() => onMarkDone(todo.id)}
          disabled={isLoading}
          className="whitespace-nowrap h-fit flex items-center border rounded border-gray-300 px-[7px] hover:border-[#4096ff] hover:text-[#4096ff]"
        >
          {isLoading && <Loading />}
          Mark done
        </button>
      )}
    </li>
  );
};

export default TodoItem;
