import React from 'react';
import { useState } from 'react';

const App = () => {
const [gender, setGender] = useState("Male")


function changeGender (){
  setGender("Female")
  if(gender == "Male"){
    setGender("Female")
  }else{
    setGender("Male")
  }
  console.log("Gender Changed")
}

  
  return (
    <div>
<h1>{gender}</h1>
<button onClick={changeGender}>Changer Gender</button>
    </div>
  );
};

export default App;