import {
  createContext,
  ReactNode,
  Dispatch,
  useContext,
  SetStateAction,
} from "react";

import { useLocalStorage } from "../utils/useLocalStorage";

export interface ITasks {
  id: string;
  title: string;
  completed: boolean;
}

interface Props {
  children: ReactNode;
}

type PropsTask = {
  tasks: ITasks[];
  setTasks: Dispatch<SetStateAction<ITasks[]>>;
};

const DEFAULT_VALUE = {
  tasks: [],
  setTasks: () => {},
};

const TaksContext = createContext<PropsTask>(DEFAULT_VALUE);

export function TasksProvider({ children }: Props) {
  const [tasks, setTasks] = useLocalStorage("TASKS", DEFAULT_VALUE.tasks);

  return (
    <TaksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaksContext.Provider>
  );
}

export function useTask() {
  const { tasks, setTasks } = useContext(TaksContext);
  return { tasks, setTasks };
}
