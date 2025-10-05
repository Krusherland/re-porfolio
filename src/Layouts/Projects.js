import React from "react";
import { Projects as ProjectsComponent } from "./Components/Projects";

export const Projects = () => {
  return (
    <div className="container">
      <div className="stagger-animation delay-2">
        <ProjectsComponent />
      </div>
    </div>
  );
};
