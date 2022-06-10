import React from "react";
import { ITasks, useTask } from "../../context/logic";
import Task from "../Task";
import { Container } from "./styles";

const Tasks: React.FC = () => {
  const { tasks } = useTask();
  return (
    <Container>
      {tasks.map((task: ITasks) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
        />
      ))}
    </Container>
  );
};

export default Tasks;
