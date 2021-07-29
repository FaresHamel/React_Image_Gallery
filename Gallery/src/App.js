import './App.css';
import React, { useState } from 'react';
import img1 from "./data/images/Biblio.jpg"
import img2 from "./data/images/bibliothequeOne.jpg";
import img3 from "./data/images/Class.jpg";
import img4 from "./data/images/ClassRoum.jpg";
import img5 from "./data/images/EducationBourses.jpg";
import img6 from "./data/images/EducationOnline.jpg";
import img7 from "./data/images/It.jpg";
import img8 from "./data/images/Projects.jpg";
import img9 from "./data/images/sessus.jpg";
import img10 from "./data/images/Teacher.jpg";

function App() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [seleckted, setSeleckted] = useState(images[3]);
  return (
      <div className="hero">
      <div className="container">
        <img src={seleckted} alt="this is first image" className="imgclicked"/>
        <div className="imgContainer">
          {images.map((image, index) => (
            <img
              src={image}
              className="img"
              alt={index}
              style={{ border: seleckted === image ? "2px solid purple" : "" }}
              onClick = {()=>setSeleckted(image)}
            
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
