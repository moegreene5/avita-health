import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import patient1 from "../assets/patient1.webp";
import patient2 from "../assets/patient2.webp";
import patient3 from "../assets/patient3.webp";
import patient4 from "../assets/patient4.webp";
import people from "../assets/people.jpeg";
import stethescope from "../assets/pinkStetescope.jpeg";
import Card from "./Card";

const CarouselComponent = () => {
  const settings = {
    className: "center",
    centerPadding: "0",
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    arrows: true,
    prevArrow: <GrPrevious color="#004680" fontSize="2rem" />,
    nextArrow: <GrNext color="#004680" fontSize="2rem" />,

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
      image: patient1,
      heading:
        " Join us for an enlightening medical seminar at a church near you, where leading experts will share insights on the latest healthcare advancements, empowering you with knowledge for a healthier tomorrow. Explore the intersection of faith and well-being as we come together for an informative and inspiring event.",
    },
    {
      image: patient2,
      heading:
        "The Journey: Navigating the Path to Wellness In this narrative, you are not a passive observer; you are a participant in a collective journey. Avita Health invites you to explore the intricacies of breast health through informative sessions, interactive workshops, and free consultations. Our goal is not just awareness it's about fostering a proactive approach to health and inspiring communities to prioritize well-being.",
    },
    {
      image: stethescope,
      heading:
        "🌸Unveiling Hope: A Future Without Breast Cancer 🌸Welcome to a world where hope blooms and communities unite for a future free from the shadows of breast cancer. Avita Health System is thrilled to announce an upcoming event that transcends awareness – it's a celebration of strength, unity, and the promise of a brighter tomorrow.",
    },
    {
      image: patient4,
      heading:
        "Embark on a journey with Avita Health as we weave a story of partnership and purpose. Imagine a community coming together, where Avita Health collaborates with humanitarian organizations like Rotary Clubs. In this upcoming event, we're not just talking about health – we're living it.",
    },
    {
      image: patient3,
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
          <Slider {...settings}>
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
