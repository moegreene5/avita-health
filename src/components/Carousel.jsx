import Card from "./Card";
import hospital1 from "../assets/hospital3.jpg";
import hospital2 from "../assets/hospital4.jpg";
import hospital3 from "../assets/hospital5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const CarouselComponent = () => {
  const settings = {
    className: "center",
    centerPadding: "0",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const items = [
    {
      image: hospital1,
      heading: "Avita for all",
    },
    {
      image: hospital3,
      heading: "Avita for all",
    },
    {
      image: hospital2,
      heading: "Avita for all",
    },
    {
      image: hospital3,
      heading: "Avita for all",
    },
    {
      image: hospital1,
      heading: "Avita for all",
    },
    {
      image: hospital2,
      heading: "Avita for all",
    },
    {
      image: hospital3,
      heading: "Avita for all",
    },
    {
      image: hospital1,
      heading: "Avita for all",
    },
    {
      image: hospital3,
      heading: "Avita for all",
    },
    {
      image: hospital2,
      heading: "Avita for all",
    },
  ];
  return (
    <>
      <div className="pb-8">
        <div className="py-5 text-center">
          <h2
            style={{ color: "#004680", fontSize: "1.8rem", fontWeight: "bold" }}
          >
            <a className="hover:underline" href="">
              NEWS & EVENTS
            </a>
          </h2>
        </div>

        {/* CarouselComponent */}

        <div className="" style={{ maxWidth: "90vw", margin: "0 auto" }}>
          <Slider
            prevArrow={<GrPrevious color="#004680" fontSize="2rem" />}
            nextArrow={<GrNext color="#004680" fontSize="2rem" />}
            {...settings}
          >
            {items.map((item, index) => (
              <Card key={index} image={item.image} heading={item.heading} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;
