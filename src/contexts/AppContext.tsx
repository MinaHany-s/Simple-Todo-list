import { createContext } from "react";

export type Task = {
  task: string;
  description: string;
  completed: boolean;
};

type AppContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleCompleteTask: (idx: number) => void;
  deleteTask:(idx:number)=>void;
};

export const AppContext = createContext<AppContextType | null>(null);
