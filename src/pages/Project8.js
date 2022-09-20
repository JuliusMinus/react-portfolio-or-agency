import React from "react";

import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project8 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={7} />
        <Buttons left={"/projet-7"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project8;