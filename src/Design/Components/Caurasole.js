import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/c1.jpg";
import img2 from "./images/c2.jpg";
import img3 from "./images/c3.jpg";
import img4 from "./images/c4.jpg";
import img5 from "./images/c5.jpg";
import img6 from "./images/c6.jpg";
import img7 from "./images/c7.jpg";

export default function Caurasole() {
  return (
    <div style={{ width: "85%", marginLeft: "8%", marginTop: "15px" }}>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome To Blooming Fashions</h3>
            <p>Best place to find your fashions ...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="First slide" />
          <Carousel.Caption>
            <h3>Work Wear</h3>
            <p>Office dress kits for all...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="First slide" />
          <Carousel.Caption>
            <h3>Casual Dress</h3>
            <p>Casual Dress Designs as your wish</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="First slide" />
          <Carousel.Caption>
            <h3>Party Dress</h3>
            <p>Dress makes you pretty</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img5} alt="First slide" />
          <Carousel.Caption>
            <h3>Saree Palace</h3>
            <p>All kinds of Sarees for all functions..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img6} alt="First slide" />
          <Carousel.Caption>
            <h3>Smart Casulas</h3>
            <p>Dress makes you more smart ...</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img7} alt="First slide" />
          <Carousel.Caption>
            <h3>Branded Items</h3>
            <p>Branded items for lowest prices ...</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
