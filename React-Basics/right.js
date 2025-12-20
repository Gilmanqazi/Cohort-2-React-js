// function right(){
//   return React.createElement("div",
//   {
//     style: {
//       marginTop:"20px",
//       height: "79vh",
//       width: "50vw",
//       display:"flex",
//       paddingLeft:"60px",
//       gap:"20px",
//       backgroundColor:"red"
//     }
//   },
//   React.createElement("div",
//     {
//       style:{

//       }
//     },
//      React.createElement("img",{src: "https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",style:{width: "300px",height: "auto",backgroundColor: "blue",display:"flex,"}}),
//   )
// );
// }


// export default right;

function Right() {
  return React.createElement(
    "div",
    {
      style: {
        height:"90%",
        width: "50%",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }
    },
    React.createElement("img", {
      src: "./WhatsApp Image 2025-12-18 at 8.36.45 AM (1).jpeg",
      style: {
        height:"100%",
        width: "fit-content",
        borderRadius: "10px",
        objectFit: "cover",
      }
    })
  );
}

export default Right;
