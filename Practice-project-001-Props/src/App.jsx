import React from 'react';
import UserCard from "./components/UserCard.jsx";

const App = () => {
  const cardsData = [
    {
      id: 1,
      name: "Natasha Romanoff",
      description: "Focused on clarity & emotional connection.",

      bgImage: "https://media.istockphoto.com/id/2242752601/photo/side-view-of-male-student-leaning-on-wall.webp?s=1024x1024&w=is&k=20&c=39z9sfKPURLKYl42vOBcyjjwrC1O-qA6G8zlVYWL6l0=",
        label: "Rating",
        value: 4.8, 
  

      buttons: {
        primary: "Get in Touch",
        secondary: "View Profile",
      },
  
      // Images
      images: {
        profile: "/images/female-professional-1.png",
        working: [
          "/images/work-1.jpg",
          "/images/work-2.jpg",
        ],
      },
  
      gender: "female",
    },
  
    {
      id: 1,
      name: "Natasha Romanoff",
      description: "Focused on clarity & emotional connection.",

      bgImage: "https://images.unsplash.com/photo-1688572865439-be9cd43b6986?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D",
        label: "Rating",
        value: 4.8, 
  

      buttons: {
        primary: "Get in Touch",
        secondary: "View Profile",
      },
  
    
    },
  
  ];
  
  return (
    <div className='flex justify-between w-full'>
      {cardsData.map(function(elem){
        return <UserCard name = {elem.name} description = {elem.description} label={elem.label} value = {elem.value} primary = {elem.buttons.primary} secondary = {elem.buttons.secondary} bgImage = {elem.bgImage}/>
      })}
    </div>
  );
};

export default App;