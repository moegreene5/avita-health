import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import x from "../assets/X-icon.svg";
import linkedIn from "../assets/LinkedIn.svg";

const Footer = () => {
  const items = [
    {
      h2: "services",
      li: [
        "Primary Care",
        "Maternity Women",
        "Specialized Consultation",
        "Laboratory Tests",
        "Diagnostic Imaging",
        "TeleHealth Services",
        "Mental Health and Counselling",
      ],
    },
    {
      h2: "news",
      li: ["Avita today", "Health Library", "Press Realeases"],
    },
    {
      h2: "about avita",
      li: [
        "Caring for lives, Transforming lives Daily",
        "Innovative HealthCare Solutions",
        "Your Wellness, Our Proiority Everyday",
        "Leading Expertise in Personalized Health Services",
      ],
    },
    {
      h2: "contact us",
      li: [
        "Office: +234 801 234 5678",
        "Mobile: +234 808 765 4321",
        "Inquiries: Info@avitahealth.ng",
        "Feedback : feedback@avitahealth.ng",
        "Location : 60 Allen Avenue Ikeja Lagos, NG",
        "Thank you for choosing us",
      ],
    },
  ];

  return (
    <div id="contact" className="max-w-full">
      <div className="blue flex flex-col">
        <div className="p-0">
          <div className="flex justify-center items-center p-8 border-b-2 border-white w-4/5 mx-auto">
            <a href="/">
              <img
                className="footer-icons mx-4 hover:scale-150 transition-all max-w-full"
                src={facebook}
                alt="facebook icon"
              />
            </a>
            <a href="https://www.instagram.com/avitahealth24_7?igsh=MXFrcGo1cDQ1amcyYQ==">
              <img
                className="footer-icons mx-4 hover:scale-150 transition-all max-w-full"
                src={instagram}
                alt="instagram icon"
              />
            </a>
            <a href="https://x.com/Avitahealth24_7?t=2eUjOePd63RjNdLtWglKcw&s=08">
              <img
                className="footer-icons mx-4 hover:scale-150 transition-all max-w-full"
                src={x}
                alt="twitter icon"
              />
            </a>
            <a href="https://www.linkedin.com/company/avita-health-ltd-carego-24-7/">
              <img
                className="footer-icons mx-4 hover:scale-150 transition-all max-w-full"
                src={linkedIn}
                alt="LinkedIn icon"
              />
            </a>
          </div>

          <div className="footer mb-12">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center text-white"
              >
                <h2 className="footer-h2">{item.h2}</h2>
                <ul className="footer-ul pl-0">
                  {item.li.map((link, index) => (
                    <li className="mb-1.5 pl-0" key={index}>
                      <p className="hover:text-blue-200">{link}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center pt-6 pb-3 text-sm">
        <p>&copy; 2024 Avita Health System. All Rights Reserved.</p>
        <p>Powered by Chacebyte technologies</p>
      </div>
    </div>
  );
};

export default Footer;
