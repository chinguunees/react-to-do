export const TodoInput = ({ addTask, handleChange, value }) => {
  return (
    <div className="flex gap-[6px] mt-[20px] mb-[20px]">
      <input
        type="text"
        placeholder="Add a new task..."
        className="border h-[40px] w-[280px] rounded-sm text-[#6B7280] border-[#E4E4E7] pl-3 text-[14px]"
        value={value}
        onChange={() => handleChange(event)}
        onKeyDown={(event) => {
          if (event.code === "Enter") {
            addTask();
          }
        }}
      />
      <button
        className="bg-[#3C82F6] text-white h-[40px] w-[59px] rounded-sm text-[14px]"
        onClick={addTask}
      >
        Add
      </button>
    </div>
  );
};
