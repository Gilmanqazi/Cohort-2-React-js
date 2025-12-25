import React from 'react';
import Nav from  "./components/Nav.jsx"
import Section1 from "./components/Section1.jsx"
import Section2 from "./components/Section2.jsx"
import Section3 from "./components/Section3.jsx"
import Section4 from './components/Section4.jsx'
import Section5 from "./components/Section5.jsx"

const App = () => {
  const sportsItems = [
    {
      name: "Cricket Bat",
      price: "₹2500",
      img: "https://rukminim2.flixcart.com/image/480/640/xif0q/sticker/l/y/k/small-virat-kohli-with-mrf-bat-a4-strong-1-30-va-dd-am-411-original-imah225v3gehgnxs.jpeg?q=90"
    },
    {
      name: "Football",
      price: "₹1800",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg"
    },
    {
      name: "Tennis Racket",
      price: "₹3200",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8xMf5hj420FyvZlrnzgQmo1n4F76iKRLKA&s"
    },
    {
      name: "Basketball",
      price: "₹2000",
      img: "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      name: "Hockey Stick",
      price: "₹2700",
      img: "https://people.com/thmb/AEannZXZhsCLyPkirrQjXlMmyOs=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(604x394:606x396)/Lawrence-Lawrence-with-Will-Friedle-021925-ad308aea6d654fa3817e95beb9434c31.jpg"
    },
    {
      name: "Baseball Bat",
      price: "₹2300",
      img: "https://m.media-amazon.com/images/I/615Ol2olt1L._AC_UF894,1000_QL80_.jpg"
    },
    {
      name: "Volleyball",
      price: "₹1600",
      img: "https://www.niviasports.com/cdn/shop/files/2B0A1847_f28487aa-de26-43de-b86f-5c4d171402df.jpg?v=1728559966&width=1445"
    },
    {
      name: "Badminton Racket",
      price: "₹1900",
      img: "https://nwscdn.com/media/catalog/product/cache/h900xw900/2/7/27in_senior_badminton_racket_with_cover.jpg"
    },
    {
      name: "Table Tennis Bat",
      price: "₹900",
      img: "https://www.tabletennishub.net/cdn/shop/files/Stiga-Professional-6-Star-Carbon-Offensive-Table-Tennis-Bat.png?v=1743611963"
    },
    {
      name: "Skateboard",
      price: "₹4500",
      img: "https://m.media-amazon.com/images/I/81yh8+MHWHL.jpg"
    }
  ];
  
  return (

    <div className='flex flex-col ' >;
     
    <h1 className='text-center items-center h-10 flex justify-center gap-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, vitae. <span className='py-05 px-1 bg-black text-white rounded-2xl'>20.4%</span></h1>
    <div className='h-screen w-full bg-[url("https://images.unsplash.com/photo-1638519929050-a61ae4feb487?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center opacity-90'>
      <Nav/>
      <Section1/>
    </div>
    <div className='flex flex-wrap justify-center items-center mt-30 '>
    {sportsItems.map(function(elem){
      return <Section2 name={elem.name} price = {elem.price} img = {elem.img} />
      })}
      </div>
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  );
};

export default App;