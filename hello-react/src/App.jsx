import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TaskCard from "./TaskCard";

function App() {
  return (
    <>
      <section className="px-32 pt-12">
        <div className="pb-4">
          <h1 className="text-4xl font-bold">Smarter Tasks</h1>
          <p>
            <span className="font-bold">Project:</span> Graduation Final Year
            Project (Revamp College Website)
          </p>
        </div>
        <div className="flex w-full gap-4">
          <div className="w-1/2 border-2 p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-600 flex justify-center pb-4">
              Pending
            </h3>
            <TaskCard
              title="Build the website with static content"
              name="Rohit S"
              ddate="10th April"
            />
            <TaskCard title="Add a blog" name="Rohit M" ddate="22th March" />
            <div className="bg-gray-200 px-2 text-xl">+ New task</div>
          </div>
          <div className="w-1/2 border-2 p-4 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-600 flex justify-center pb-4">
              Done
            </h3>
            <TaskCard
              title="Build the website with static content"
              name="Rohit M"
              cdate="10th April"
            />
            <TaskCard
              title="Get the approval from principal"
              name="Ajay S"
              cdate="20th April"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
