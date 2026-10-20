import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AppContext } from "../contexts/AppContext";
import { VscCircleLarge } from "react-icons/vsc";

export default function YourTasks() {
  const context = useContext(AppContext);
  if (!context) return null;

  const { tasks, toggleCompleteTask, deleteTask } = context;

  

  return (
    <div className="  p-6">
      <div className="text-lg pb-5 flex items-center justify-between ">
        <p className="text-[#0891B2]">View all</p>
        <p className=" text-2xl">Your tasks</p>
      </div>
      <div className="py-1  flex gap-4 flex-col ">
        {tasks.map((task, idx) => (
          <div
            key={idx}
            className="bg-[#1E293B] p-4  rounded-xl flex justify-between items-center"
          >
            <FaRegTrashAlt
              onClick={() => deleteTask(idx)}
              className="text-red-400 cursor-pointer"
            />
            <div className=" flex gap-5 items-center">
              <div className="flex flex-col gap-2">
                <p
                  className={`
                ${task.completed ? "line-through text-gray-400" : ""}
                  `}
                >
                  {task.task}
                </p>
                <p className="text-neutral-500 ">{task.description}</p>
              </div>
              {task.completed ? (
                <IoIosCheckmarkCircleOutline
                  onClick={() => toggleCompleteTask(idx)}
                  className=" text-green-500 text-4xl cursor-pointer"
                />
              ) : (
                <VscCircleLarge
                  onClick={() => toggleCompleteTask(idx)}
                  className=" text-gray-500 text-4xl cursor-pointer"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
