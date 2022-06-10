import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { useTask } from "../../context/logic";

import { Container, InputTask, Button } from "./styles";

interface IText {
  text: string;
}

const Input: React.FC<IText> = ({ text }) => {
  const [textInput, setTextInput] = useState<string>("");

  const { tasks, setTasks } = useTask();

  const handleClick = () => {
    textInput
      ? setTasks([
          ...tasks,
          {
            id: uuidv4(),
            title: textInput,
            completed: false,
          },
        ])
      : alert("Por favor, escreva alguma tarefa!");

    setTextInput("");
  };
  return (
    <Container>
      <InputTask
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <Button onClick={handleClick}>{text}</Button>
    </Container>
  );
};

export default Input;
