import React from "react";

function About() {
  return (
    // <div style={{ backgroundColor: "#EF8585" }}>
    //   <h1>About</h1>
    //   <p>about page for version 1.0 of 'Task Manager'. enjoy.</p>
    // </div>
    <React.Fragment>
      <h1 style={textStyle}>About</h1>
      <p style={textStyle}>
        About page for version 1.0 of 'ToDo Manager'. Enjoy.
      </p>
    </React.Fragment>
  );
}

const textStyle = {
  color: "#fff",
};

export default About;
