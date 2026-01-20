"use client";
import { useState } from "react";
import Image from "next/image";

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

  const taskAllList = () => {
    const taskCompleted = tasks.filter((task) => task.checked).length;
    setTasks(taskCompleted);
  };

  return (
    <div className="flex flex-col justify-center items-center ml-50 mt-15 bg-white w-[377px] pt-[24px] pb-15 pl-[16px] pr-[16px] rounded-xl text-black shadow-[0px_4px_6px_0px_rgba(0,_0,_0,_0.1)]">
      <h1 className="text-black font-semibold text-2xl">To-Do list</h1>
      <div className="flex gap-[6px] mt-[20px] mb-[20px]">
        <input
          type="text"
          placeholder="   Add a new task"
          className="border h-[40px] w-[280px] rounded-sm text-[#6B7280] border-[#E4E4E7]"
          value={value}
          onChange={() => handleChange(event)}
        />
        <button
          className="bg-[#3C82F6] text-white h-[40px] w-[59px] rounded-sm"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      <div className="flex gap-[6px] text-black items-center w-[345px] ">
        <button
          className="bg-[#3C82F6] h-[32px] flex justify-center items-center w-[38px] rounded-[6px] text-white text-[12px]"
          onClick={() => filterTodos("all")}
        >
          All
        </button>
        <button
          className="w-[60px] h-[32px] bg-[#F3F4F6] rounded-[6px] text-[#363636] text-[12px]"
          onClick={() => filterTodos("active")}
        >
          Active
        </button>
        <button
          className="w-[87px] h-[32px] bg-[#F3F4F6] rounded-[6px] text-[#363636] text-[12px]"
          onClick={() => filterTodos("completed")}
        >
          Completed
        </button>
      </div>
      <div>
        {filteredTasks.map((task, index) => {
          return (
            <div
              className="flex mt-[20px] rounded-md justify-between items-center gap-5 bg-[#F9FAFB] w-[345px] h-[62px]"
              key={index}
            >
              <input
                type="checkbox"
                className="text-black bg-[#F9FAFB] w-[34px] h-[20px] flex flex-col rounded-xl  "
                key={index}
                onChange={() => toggleTaskCheck(task.id)}
                checked={task.checked}
              />
              <p className={`${task.checked && "line-through"} `}>
                {task.value}
              </p>
              <button
                className="text-[#EF4444] w-[67px] h-[30px] bg-red-100 rounded-md mr-2"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex border-t-1 w-[345px] justify-between items-center border-[#E4E4E7] mt-[20px]">
        <p className="text-[14px] mt-5 text-[#6B7280]">
          Tasks completed {tasks.length}
        </p>
        <button
          className="text-[#EF4444] text-[14px] mt-5"
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
      <p className="mt-[40px] text-xs text-[#6B7280]">
        Powered by <span className="text-[#3B73ED]">Pinecone Academy</span>
      </p>
    </div>
  );
}
