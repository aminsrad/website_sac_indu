import Carousel from "react-bootstrap/Carousel";
import sacemext1 from "../images/sacem_ext1.jpg";
import sacemext2 from "../images/sacemext2.jpg";
import sacemchaud from "../images/chaud.jpg";
import sacemtrans1 from "../images/sacem20MVA.jpg";
import sacemtrans2 from "../images/sacem4.jpg";

function ImagesCarousel() {
  return (
    <Carousel data-bs-theme="dark" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sacemext1}
          alt="First slide"
          style={{ width: "1580px", height: "460px", marginRight: "30px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sacemext2}
          alt="Second slide"
          style={{ width: "1580px", height: "460px", marginRight: "30px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sacemtrans1}
          alt="Third slide"
          style={{ width: "1580px", height: "460px", marginRight: "30px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sacemtrans2}
          alt="First slide"
          style={{ width: "1580px", height: "460px", marginRight: "30px" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sacemchaud}
          alt="First slide"
          style={{ width: "1580px", height: "460px", marginRight: "30px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImagesCarousel;
