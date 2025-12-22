import React from 'react';
import Card from "./components/Card.jsx"

const App = () => {
  const iceCreams = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1740594967618-23cd757b9291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xhc3NpYyUyMFZhbmlsbGF8ZW58MHx8MHx8fDA%3D",
      title: "Classic Vanilla",
      flavour: "Vanilla",
      description: "Smooth and creamy classic vanilla ice cream.",
      price: "$4.99",
      bgColor: "black",
      buttonText: "Add to Cart",
      inCart: false
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1514424350208-755887f7b374?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hvY29sYXRlJTIwRGVsaWdodHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Chocolate Delight",
      flavour: "Chocolate",
      description: "Rich chocolate ice cream made with real cocoa.",
      price: "$5.49",
      bgColor: "black",
      buttonText: "Add to Cart",
      inCart: false
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1583593168035-73e5711293f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RyYXdiZXJyeSUyMEJsaXNzfGVufDB8fDB8fHww",
      title: "Strawberry Bliss",
      flavour: "Strawberry",
      description: "Fresh strawberry ice cream with fruity flavor.",
      price: "$5.29",
      bgColor: "red",
      buttonText: "Add to Cart",
      inCart: false
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1541779972238-2c60cd11ffc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWludCUyMENob2NvJTIwQ2hpcCUyMGNha2V8ZW58MHx8MHx8fDA%3D",
      title: "Mint Choco Chip",
      flavour: "Mint Chocolate",
      description: "Refreshing mint ice cream with chocolate chips.",
      price: "$5.99",
      bgColor: "#52312e",
      buttonText: "Add to Cart",
      inCart: false
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1663018084454-86fd8150f950?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWFuZ28lMjBNYWdpY3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Mango Magic",
      flavour: "Mango",
      description: "Tropical mango ice cream with real mango pulp.",
      price: "$4.79",
      bgColor: "#273312",
      buttonText: "Add to Cart",
      inCart: false
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1637194502327-c99c94943680?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEJ1dHRlcnNjb3RjaCUyMENydW5jaCUyMGljZWNyZW1lfGVufDB8fDB8fHww",
      title: "Butterscotch Crunch",
      flavour: "Butterscotch",
      description: "Creamy butterscotch ice cream with crunchy bits.",
      price: "$5.19",
      bgColor: "#52312e",
      buttonText: "Add to Cart",
      inCart: false
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1657000154417-bcebe78dd105?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29va2llcyUyMCUyNiUyMENyZWFtfGVufDB8fDB8fHww",
      title: "Cookies & Cream",
      flavour: "Cookies and Cream",
      description: "Vanilla ice cream mixed with chocolate cookies.",
      price: "$6.49",
      bgColor: "#875e2d",
      buttonText: "Add to Cart",
      inCart: false
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1573991288363-aa2067bc6a73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGlzdGFjaGlvJTIwRHJlYW0lMjBpY2UlMjBjcmVhbXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Pistachio Dream",
      flavour: "Pistachio",
      description: "Nutty pistachio ice cream with rich texture.",
      price: "$6.99",
      bgColor: "#104485",
      buttonText: "Add to Cart",
      inCart: false
    }
  ];
  
  
  return (
    <div className=' py-5 px-2 bg-black h-full w-full flex flex-wrap gap-2 justify-center'>
      {iceCreams.map(function(elem){
    return <Card image = {elem.image} title = {elem.title} flavour = {elem.flavour} description= {elem.description} bgColor = {elem.bgColor} buttonText = {elem.buttonText} price = {elem.price}/>
      })}
      </div>
  );
};

export default App;