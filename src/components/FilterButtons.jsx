export const FilterButtons = ({ filterTodos, filter }) => {
  return (
    <div className="flex gap-[6px] text-black items-center w-[345px] ">
      <button
        className={`bg-[#3C82F6] h-[32px] flex justify-center items-center w-[38px] rounded-[6px] text-[#363636] text-[12px] hover:bg-[#3C82F6] hover:text-white ${filter === "all" ? "bg-[#3C82F6] text-white" : "bg-[#F3F4F6]"}`}
        onClick={() => filterTodos("all")}
      >
        All
      </button>
      <button
        className={`w-[60px] h-[32px] rounded-[6px] text-[#363636] text-[12px] hover:bg-[#3C82F6] hover:text-white ${filter === "active" ? "bg-[#3C82F6] text-white" : "bg-[#F3F4F6]"}`}
        onClick={() => filterTodos("active")}
      >
        Active
      </button>
      <button
        className={`w-[87px] h-[32px]  rounded-[6px] text-[#363636] text-[12px] hover:bg-[#3C82F6] hover:text-white ${filter === "completed" ? "bg-[#3C82F6] text-white " : "bg-[#F3F4F6]"}`}
        onClick={() => filterTodos("completed")}
      >
        Completed
      </button>
    </div>
  );
};
