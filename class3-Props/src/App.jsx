import React from 'react';
import Card from "./components/Card.jsx"

const App = () => {
const users = ["Gilman", "Alman","Gilman", "Alman","Gilman", "Alman","Gilman", "Alman","Gilman", "Alman"]
  
  return (
    <div className=' flex flex-wrap gap-2 bg-black p-10  h-screen'>
     {users.map(function(elem){
      return <Card user = {elem} />
     })}
    </div>
  );
};

export default App;