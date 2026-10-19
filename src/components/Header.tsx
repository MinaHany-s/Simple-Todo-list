import { VscChecklist } from "react-icons/vsc";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdChecklistRtl } from "react-icons/md";
import { MdOutlinePendingActions } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Header() {
  const context = useContext(AppContext);

  if (!context) return;
  const { tasks } = context;

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => {
    return task.completed === false;
  }).length;

  return (
    <>
      <div className=" flex justify-between items-center px-6 py-8  ">
        <div className=" inline-flex items-center justify-center bg-[#1E293B] rounded-xl p-2">
          <VscChecklist className="text-[#0891B2]" size={40} />
        </div>

        <div className=" flex flex-col">
          <h1 className=" tracking-wider font-bold text-3xl self-end">
            My Tasks
          </h1>
          <p className=" self-start text-neutral-500">
            Organize your day, one task at a time.
          </p>
        </div>
      </div>

      <div className="flex gap-3 p-6">
        <div className="w-1/3 bg-[#1E293B] p-6 rounded-lg">
          <div className="  flex flex-col gap-3  items-end">
            <p className=" text-lg text-neutral-500">Completed</p>
            <p className="text-green-400 text-3xl">
              {totalTasks - pendingTasks}
            </p>
            <IoIosCheckmarkCircleOutline className="text-green-400 text-xl" />
          </div>
        </div>
        <div className="w-1/3 bg-[#1E293B] p-6 rounded-lg">
          <div className="  flex flex-col gap-3  items-end">
            <p className=" text-lg text-neutral-500">Pending</p>
            <p className="text-yellow-500 text-3xl">{pendingTasks}</p>
            <MdOutlinePendingActions className="text-yellow-300 text-xl" />
          </div>
        </div>
        <div className="w-1/3 bg-[#1E293B] p-6 rounded-lg">
          <div className="  flex flex-col gap-3  items-end">
            <p className=" text-lg text-neutral-500">Total tasks</p>
            <p className="text-white text-3xl">{totalTasks}</p>
            <MdChecklistRtl className="text-[#0891B2] text-xl" />
          </div>
        </div>
      </div>
    </>
  );
}
