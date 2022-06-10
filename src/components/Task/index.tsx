import React from "react";

import { Container, Options } from "./styles";

import { ITasks, useTask } from "../../context/logic";

import { TbTrashX } from "react-icons/tb";

const Task: React.FC<ITasks> = ({ id, title, completed }) => {
  const { tasks, setTasks } = useTask();

  const handleDelete = (id: string) => {
    const newTasks = tasks.filter((taskId) => taskId.id !== id);
    setTasks(newTasks);
  };

  const handleCompleted = (id: string) => {
    const newTasks = tasks.map((taskDone) => {
      if (id === taskDone.id)
        return { ...taskDone, completed: !taskDone.completed };

      return taskDone;
    });

    setTasks(newTasks);
  };
  return (
    <Container className={completed ? "done" : ""}>
      <span
        onClick={() => {
          handleCompleted(id);
        }}
      >
        {title}
      </span>

      <Options>
        <TbTrashX
          onClick={() => {
            handleDelete(id);
          }}
        />
      </Options>
    </Container>
  );
};

export default Task;
