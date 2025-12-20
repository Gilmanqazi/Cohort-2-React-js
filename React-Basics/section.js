// 
import Navbar from "./navbar.js";
import Left from "./left.js";
import Right from "./right.js";

function Section1() {
  return React.createElement(
    "div",
    {
      style: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column"
      }
    },

    // NAVBAR (TOP)
    React.createElement(Navbar),

    // LEFT + RIGHT
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flex: 1
        }
      },
      React.createElement(Left),
      React.createElement(Right)
    )
  );
}

export default Section1;
