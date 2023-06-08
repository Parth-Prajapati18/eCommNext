"use client"
import Carousel from "react-material-ui-carousel"
import { Paper, Button } from "@mui/material"

function Carousellist(props) {
  const item = [
    {
      imgurl: '/assets/carimg1.webp',
    },
    {
      imgurl: '/assets/carimg2.webp',
    },
    {
      imgurl: '/assets/carimg3.webp',
    },
  ];
  return (
      <Carousel>
          {items.map((item, i) => (
              <Item key={i} {...item} />
          ))}
      </Carousel>
  );
}

const Item = ({imgurl}) => {
  return (
      <Paper>
          <img src={imgurl} />
          <Button>more info...</Button>
      </Paper>
  );
};


























































// import React from 'react'
// import Image from 'next/image';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/js/dist/carousel';


// function Carousel() {
//     return (
//         <div>
//            <div id="carouselExampleIndicators" className="carousel slide">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src="/assets/carimg1.webp" className="d-block w-100 " alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img src="/assets/carimg1.webp" className="d-block w-100" alt="..." />
//     </div>
//     <div className="carousel-item">
//       <img src="/assets/carimg3.webp" className="d-block w-100" alt="..." />
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//         </div>
//     )
// }

// export default Carousel
