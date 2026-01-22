"use client";
import { useState } from "react";

import { Task } from "@/components/Task";
import { TodoInput } from "@/components/TodoInput";
import { FilterButtons } from "@/components/FilterButtons";
import { TaskAllList } from "@/components/taskAllList";
import { Clear } from "@/components/Clear";
import { Copyright } from "@/components/Copyright";

export default function Home() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.checked;
    if (filter === "completed") return task.checked;
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addTask = () => {
    const newTask = {
      id: tasks.length,
      value,
      checked: false,
    };
    setTasks((prev) => [...prev, newTask]);

    setValue("");
  };

  const toggleTaskCheck = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (taskId !== task.id) {
        return task;
      }

      return {
        ...task,
        checked: !task.checked,
      };
    });
    setTasks(newTasks);
  };
  const filterTodos = (filterValue) => {
    setFilter(filterValue);
  };
  const deleteTask = (id) => {
    const deletedTask = tasks.filter((task) => task.id !== id);

    setTasks(deletedTask);
  };
  const clearCompleted = () => {
    const deleteAll = tasks.filter((task) => !task.checked);
    setTasks(deleteAll);
  };

  const confirmation = (taskId) => {
    if (confirm("Delete Task?")) {
      deleteTask(taskId);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ml-200 mt-25 bg-white w-[377px] pt-[24px] pb-[16px] pl-[16px] pr-[16px] rounded-xl text-black shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
      <h1 className="text-black font-semibold text-2xl">To-Do list</h1>
      <TodoInput handleChange={handleChange} addTask={addTask} value={value} />
      <FilterButtons key={tasks.id} filter={filter} filterTodos={filterTodos} />
      <div>
        {filteredTasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              deleteTask={confirmation}
              toggleTaskCheck={toggleTaskCheck}
            />
          );
        })}
      </div>
      <div
        className={`flex ${tasks.length >= 1 ? "border-t mt-[20px] flex gap-[85px] justify-between" : ""} w-[345px] justify-center items-center border-[#E4E4E7] `}
      >
        <TaskAllList tasks={tasks} />
        <Clear clearCompleted={clearCompleted} tasks={tasks} />
      </div>
      <Copyright />
    </div>
  );
}
