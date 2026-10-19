import { useEffect, useState, type ReactNode } from "react";
import { AppContext, type Task } from "./AppContext";

type Props = {
  children: ReactNode;
};

export default function AppContextProvider({ children }: Props) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });


  function addTask(task: Task) {
    setTasks((prevTasks) => [...prevTasks, task]);
  }
  function toggleCompleteTask(idx: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === idx ? { ...task, completed: !task.completed } : task,
      ),
    );
  }
  function deleteTask(idx: number) {
    setTasks((prevTasks) => prevTasks.filter((_,id)=>id!==idx));
    console.log(tasks)
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <AppContext.Provider
      value={{ tasks, addTask, toggleCompleteTask, deleteTask }}
    >
      {children}
    </AppContext.Provider>
  );
}
