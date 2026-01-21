export const Task = ({ task, deleteTask, toggleTaskCheck }) => {
  return (
    <div className="flex mt-[20px] rounded-md justify-between items-center gap-5 bg-[#F9FAFB] w-[345px] h-[62px]">
      <div className="flex gap-[10px] items-center justify-center">
        <input
          type="checkbox"
          className="text-black bg-[#F9FAFB] w-[34px] h-[20px] flex flex-col rounded-xl border-[#767676] "
          onChange={() => toggleTaskCheck(task.id)}
          checked={task.checked}
        />
        <p className={`${task.checked && "line-through"} `}>{task.value}</p>
      </div>
      <button
        className="text-[#EF4444] w-[67px] h-[30px] bg-red-100 rounded-md mr-2 text-[14px]"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};
