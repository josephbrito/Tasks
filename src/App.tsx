import React from "react";
import { GlobalStyle } from "./global/global";
import Layout from "./Layout";
import { TasksProvider } from "./context/logic";

function App() {
  return (
    <TasksProvider>
      <GlobalStyle />
      <Layout />
    </TasksProvider>
  );
}

export default App;
