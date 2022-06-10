import React from "react";

import { Container } from "./styles";

import Input from "../Input";
import Tasks from "../Tasks";

const TaskContainer: React.FC = () => {
  return (
    <Container>
      <Input text="Salvar" />
      <Tasks />
    </Container>
  );
};

export default TaskContainer;
