

// function left() {
//   return React.createElement(
//     "div",
//     {
//       style: {
//         marginTop:"20px",
//         height: "79vh",
//         width: "50vw",
//         display:"flex",
//         paddingLeft:"60px",
//         gap:"20px",
//         flexDirection:"column",
//         backgroundColor:"blue"
//       }
//     },
   
//     React.createElement(
//       "div",
//       { style: {  display:"flex",flexDirection:"column" } },
//       React.createElement("h4", { style: { fontSize: "50px",fontWeight:"400" } }, "+200"),
//       React.createElement("p", { style: { fontSize: "15px" } }, "Project completed"),
// React.createElement("h4",{ style: { fontSize: "50px",fontWeight:"400" } },"50"),
// React.createElement("p",{ style: { fontSize: "15px" } },"Startup raised"),

//     ),
// // React.createElement(
// //   "div",
// // {style:{display:"flex",        flexDirection:"column"}},
// // React.createElement("h4",{ style: { fontSize: "50px",fontWeight:"400" } },"50"),
// // React.createElement("p",{ style: { fontSize: "15px" } },"Startup raised")
// // ),
// React.createElement("div",{style:{ display:"flex",flexDirection:"column" }},
//   React.createElement("h1",{style:{fontSize:"120px",fontWeight:"100",}},"Hello"),
//   React.createElement("p",{style:{fontSize:"18px",fontWeight:"300",}},"-it's D.Nova a design wizard")
// )

//   );
// }



// export default left;

function Left() {
  return React.createElement(
    "div",
    {
      style: {
        height:"90%",
        width: "50%",
        padding: "40px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        gap: "40px"
      }
    },

    // STATS
    React.createElement(
      "div",
      { style: { display: "flex", gap: "60px" } },

      React.createElement(
        "div",
        { style: { textAlign: "center" } },
        React.createElement("h4", { style: { fontSize: "40px",  paddingLeft:"70px" } }, "+200"),
        React.createElement("p",  { style: { paddingLeft:"70px" } }, "Project completed")
      ),

      React.createElement(
        "div",
        { style: { textAlign: "center" } },
        React.createElement("h4", { style: { fontSize: "40px", paddingLeft:"70px" } }, "+50"),
        React.createElement("p", { style: { paddingLeft:"70px" } }, "Startup raised")
      )
    ),

    // TEXT
    React.createElement(
      "div",
      null,
      React.createElement("h1", { style: { fontSize: "100px", fontWeight: "300",paddingLeft:"70px" } }, "Hello"),
      React.createElement("p", { style: { fontSize: "30px", fontWeight: "300",paddingLeft:"70px" } }, "- it's D.Nova a design wizard")
    )
  );
}

export default Left;
