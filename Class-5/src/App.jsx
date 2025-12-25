
import Men from "./components/Men.jsx"
import Women from "./components/Women.jsx"

import { useState } from "react";

// import { useState } from "react";


const App = () => {

// const [marks, setMarks] = useState([60,30,99,50,77])

// function graceStudent(){
//   let newMarks = marks.map(function(elem){
// if(elem>95){
//   return elem
// }else{
//   return elem+5
// }
// })
// setMarks(newMarks)
// }
  
function changeGender (){
 if(gender == "Male"){
  setGender("Female")
 }else{
  setGender("Male")
 }
}
const [gender, setGender] = useState("Male")

  return (
    <div className="parent">
{/* {marks.map(function(elem,idx){
  return <h1 key={idx}>Student {idx+1} = {elem} ({elem>33?"Pass":"Fail"})</h1>
})} */}
{/* <button onClick={graceStudent}>Give them grace</button> */}
<h1>{gender}</h1>
<button onClick={changeGender}>Change Gender</button>
{gender=="Male"?<Men/>:<Women/>}
    </div>
  );
};

export default App;