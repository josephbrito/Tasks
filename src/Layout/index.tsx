import React from "react";
import TaskContainer from "../components/TaskContainer";

import { Container } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <TaskContainer />
    </Container>
  );
};

export default Layout;
