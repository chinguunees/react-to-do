export const Clear = ({ clearCompleted, tasks }) => {
  if (tasks.length >= 1)
    return (
      <button
        className="text-[#EF4444] text-[14px] mt-5"
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    );
};
