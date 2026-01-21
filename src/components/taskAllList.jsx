import { Clear } from "./Clear";
export const TaskAllList = ({ tasks }) => {
  const taskCompleted = tasks.filter((task) => task.checked).length;
  if (tasks.length === 0)
    return (
      <div className="text-[14px] text-[#6B7280] mt-5">
        <p>No tasks yet add one above</p>
      </div>
    );
  if (tasks.length >= 1)
    return (
      <div className="text-[14px] text-[#6B7280] mt-5 flex items-center justify-between">
        <p>
          {taskCompleted} of {tasks.length} tasks completed
        </p>
      </div>
    );
};
