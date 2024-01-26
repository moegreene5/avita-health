import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import gathering from "../assets/gathering.jpeg";
import hospital2 from "../assets/hospital4.jpg";
// import maternity from "../assets/maternity.jpg";
import patientCare from "../assets/patientCare.jpg";
import people from "../assets/people.jpeg";
import stethescope from "../assets/pinkStetescope.jpeg";
import telehealth from "../assets/telehealth.jpg";
import Card from "./Card";

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
      image: people,
      heading:
        "The Unveiling: A Tapestry of Compassion Picture a tapestry woven with threads of compassion and resilience. As the event unfolds, join us in unraveling the stories of survivors, the journeys of warriors, and the triumphs over adversity. Avita Health System is not just hosting an event; we are crafting an immersive experience that transforms statistics into stories and pink ribbons into beacons of hope.",
    },
    {
      image: stethescope,
      heading:
        "🌸Unveiling Hope: A Future Without Breast Cancer 🌸Welcome to a world where hope blooms and communities unite for a future free from the shadows of breast cancer. Avita Health System is thrilled to announce an upcoming event that transcends awareness – it's a celebration of strength, unity, and the promise of a brighter tomorrow.",
    },
    {
      image: gathering,
      heading:
        " Join us for an enlightening medical seminar at a church near you, where leading experts will share insights on the latest healthcare advancements, empowering you with knowledge for a healthier tomorrow. Explore the intersection of faith and well-being as we come together for an informative and inspiring event.",
    },
    {
      image: patientCare,
      heading:
        "The Journey: Navigating the Path to Wellness In this narrative, you are not a passive observer; you are a participant in a collective journey. Avita Health invites you to explore the intricacies of breast health through informative sessions, interactive workshops, and free consultations. Our goal is not just awareness it's about fostering a proactive approach to health and inspiring communities to prioritize well-being.",
    },
    {
      image: hospital2,
      heading:
        "The Unveiling: A Tapestry of Compassion Picture a tapestry woven with threads of compassion and resilience. As the event unfolds, join us in unraveling the stories of survivors, the journeys of warriors, and the triumphs over adversity. Avita Health System is not just hosting an event; we are crafting an immersive experience that transforms statistics into stories and pink ribbons into beacons of hope.",
    },
    // {
    //   image: maternity,
    //   heading: "Avita for all",
    // },
    {
      image: telehealth,
      heading:
        "The Finale: A Symphony of Support As the event culminates, envision a symphony of support echoing through the community. Avita Health System is not merely an organizer – we are your partner in this shared endeavor. Together, let's compose a melody of encouragement, strength, and solidarity that resonates far beyond the event itself.",
    },
  ];
  return (
    <>
      <div className="pb-8">
        <div className="py-5 text-center">
          <h2
            style={{ color: "#004680", fontSize: "1.8rem", fontWeight: "bold" }}
          >
            NEWS & EVENTS
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
