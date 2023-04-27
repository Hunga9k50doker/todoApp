import { useState, useEffect, useId } from "react";
import Head from "next/head";
import { UserType } from "@/models/user";
import { TodoType } from "@/models/todo";
import TodoItem from "@/components/TodoItem";
import Select, { components } from "react-select";
import { convertToTypeOptionSelect, sortTodoList } from "@/utils";
import { SearchIcon } from "@/assets/icons";
import { getusers } from "@/actions/users";
import { getTodos } from "@/actions/todos";

function TodoPage() {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const [selectedUser, setSelectedUser] = useState<UserType>();
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  useEffect(() => {
    async function getListUser() {
      const data: any = await getusers();
      if (data) {
        const newUsers = convertToTypeOptionSelect(data);
        setUsers(newUsers);
      }
    }

    getListUser();
  }, []);

  async function fetchTodos() {
    if (selectedUser) {
      const data: any = await getTodos(selectedUser.id);
      const newTodos = sortTodoList(data);
      setTodos(newTodos);
    }
  }
  useEffect(() => {
    fetchTodos();
  }, [selectedUser]);

  function handleUserChange(event: any) {
    const userId = event.value;
    const user = users.find((user: UserType) => user.id === Number(userId));
    setSelectedUser(user);
  }

  const calculateTaskDone = () => {
    return todos.filter((todo) => todo.completed).length;
  };

  const DropdownIndicator = (props: any) => {
    return <components.DropdownIndicator {...props}>{props.selectProps.menuIsOpen && <SearchIcon />}</components.DropdownIndicator>;
  };

  return (
    <div className="">
      <Head>
        <title>Todo - NH</title>
        <meta name="description" content="" />
      </Head>
      <div className="container-fluied m-auto py-[24px] px-[40px]">
        <div className="mb-4 ">
          <div className="my-4 font-medium flex items-center">
            User
            <span className="block ml-4 w-full h-[0.5px] bg-gray-200"></span>
          </div>
          <Select
            classNamePrefix={"menu_list"}
            instanceId={useId()}
            id="user-select"
            onChange={handleUserChange}
            className="w-[200px] h-[30px] text-[14px] cusor-pointer"
            isSearchable={true}
            options={users}
            placeholder="Select user"
            components={{
              DropdownIndicator: DropdownIndicator,
            }}
          />
        </div>
        <div className="mb-4">
          <div className="my-4 font-medium flex items-center">
            Tasks
            <span className="block ml-4 w-full h-[0.5px] bg-gray-200"></span>
          </div>
          <ul className="block border border-gray-300 rounded-[4px] w-sreen h-[500px] overflow-auto">
            {!selectedUser && <p className="text-center mt-2 text-[14px] text-gray-300">No data</p>}
            {todos.map((todo: TodoType) => (
              <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
            ))}
          </ul>
        </div>
        <div className="mb-4 text-[14px]">
          Done {calculateTaskDone()}/{todos.length} tasks
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
