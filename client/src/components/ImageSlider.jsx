import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/ImageSlider.css";

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="slideImgs"
            src={image}
            alt={`Slide ${index}`}
            style={{ width: "100vw", height: "100vh" }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
