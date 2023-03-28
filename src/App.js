import React from "react";
import MainPage from "./components/MainPage";
import Drag from './components/Drag'
import TaskList from "./components/Drag";
import { TASKS } from "./locales/mockData";

export default function App() {
  return (
    <div className="root">
      {/* <MainPage /> */}
      <TaskList tasks={TASKS} />
    </div>
  );
}

