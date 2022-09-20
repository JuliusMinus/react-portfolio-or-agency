import React from "react";

import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project7 = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={6} />
        <Buttons left={"/projet-6"} right={"/projet-8"} />
      </div>
    </main>
  );
};

export default Project7;
