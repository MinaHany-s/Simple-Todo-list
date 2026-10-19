import { useContext, useState, type FormEvent } from "react";
import { AppContext } from "../contexts/AppContext";

export default function AddTasks() {
  const context = useContext(AppContext);

  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  if (!context) return null;

  const { addTask } = context;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    addTask({ task, description,completed:false });

    setTask("");
    setDescription("");
  }

  return (
    <div className="p-6 ">
      <form
      onSubmit={handleSubmit}
       className="flex flex-col gap-4 ">
        <label htmlFor="text" className="text-3xl">
          Add a new task
        </label>
        <input
          className="p-4 border border-neutral-600 rounded"
          type="text"
          id="text"
          placeholder="What do you need to do ?"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <textarea
          className="p-4 border border-neutral-300 rounded h-40"
          id="text"
          placeholder="Add description "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="bg-[#0891B2] p-4 rounded-lg hover:bg-[#087f9c] cursor-pointer text-white text-2xl"
          type="submit"
        >
          Add task <span className="text-2xl pl-4 relative top-0.5">+</span>
        </button>
      </form>
      <div className="bg-neutral-600 w-full h-0.5 mt-8 "></div>
    </div>
  );
}
