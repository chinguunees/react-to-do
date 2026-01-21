export const Clear = ({ clearCompleted }) => {
  return (
    <button
      className="text-[#EF4444] text-[14px] mt-5"
      onClick={clearCompleted}
    >
      Clear Completed
    </button>
  );
};
