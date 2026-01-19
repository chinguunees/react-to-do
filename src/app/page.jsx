"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log("hi");
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
      if (taskId === task.id) {
        return {
          ...task,
          checked: true,
        };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-15 bg-white w-[377px] pt-[24px] pb-15 pl-[16px] pr-[16px] rounded-xl text-black">
      <h1 className="text-black font-semibold text-2xl">To-Do list</h1>
      <div className="flex gap-[6px] mt-[20px] mb-[20px]">
        <input
          type="text"
          placeholder="   Add a new task"
          className="border h-[40px] w-[280px] rounded-sm text-black"
          value={value}
          onChange={() => handleChange(event)}
        />
        <button
          className="bg-[#3C82F6] text-white h-[40px] w-[59px] rounded-sm"
          onClick={addTask}
        >
          add
        </button>
      </div>
      <div className="flex gap-5 mb-[20px] text-black ">
        <button className="bg-[#3C82F6] h-[32px] flex justify-center items-center w-[38px] rounded-[6px]">
          All
        </button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <div>
        {tasks.map((task, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <input
                type="checkbox"
                className="text-black bg-[#F9FAFB] w-[345px] h-[62px] flex flex-col rounded-xl mt-[20px] items-center justify-center"
                key={index}
                onChange={() => toggleTaskCheck(task.id)}
                checked={task.checked}
              />
              <p>{task.value}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-[20px] text-[14px] border-t-1 w-[280px] flex justify-center pt-[16px]">
        task completed
      </p>
      <p className="mt-[40px]">Powered by Pinecone Academy</p>
    </div>
  );
}
