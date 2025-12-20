function Navbar() {
  return React.createElement(
    "div",
    {
      style: {
        height: "80px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: "0 30px",
        borderBottom: "1px solid #ccc",
        fontSize: "18px"
      }
    },
    React.createElement("h3", null, "Home"),
    React.createElement("h3", null, "About"),
    React.createElement("h3", null, "Contact"),
    React.createElement(
      "a",
      {
        href: "#",
        style: {
          marginLeft: "auto",
          textDecoration: "none",
          color: "black",
          border: "1px solid black",
          padding: "6px 12px",
          borderRadius: "5px"
        }
      },
      "Book A Call"
    )
  );
}

export default Navbar;


