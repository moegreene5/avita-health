import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import x from "../assets/X-icon.svg";
import linkedIn from "../assets/LinkedIn.svg";

const Footer = () => {
  const items = [
    {
      h2: "actions",
      links: [
        "Find a Doctor",
        "Pay your bill",
        "Personalized estimates",
        "Sponsorship Request",
        "Nominate a Nurse",
        "Nominate an Employee",
        "Volunteer",
      ],
    },
    {
      h2: "news",
      links: ["Avita today", "Health Library", "Press Realeases"],
    },
    {
      h2: "about avita",
      links: [
        "Locations",
        "Executive Leadership",
        "Carrers",
        "Employee Resources",
      ],
    },
    {
      h2: "information",
      links: [
        "Accepted Insurance",
        "Collection Policy",
        "Contact Us",
        "Financial Assistance Summary",
        "Privacy Policy",
        "Privacy Practices",
        "ProtectionsAgainstSupriseBilling",
      ],
    },
  ];

  return (
    <div className="max-w-full">
      <div className="green flex flex-col">
        <div className="p-0">
          <div className="flex justify-center items-center p-8 border-b-2 border-white w-4/5 mx-auto">
            <a href="/">
              <img
                className="footer-icons mx-4 hover:scale-150 transition-all max-w-full"
                src={facebook}
                alt="facebook icon"
              />
            </a>
            <a href="/">
              <img
                className="footer-icons mx-4 hover:scale-150 transition-all max-w-full"
                src={instagram}
                alt="instagram icon"
              />
            </a>
            <a href="/">
              <img
                className="footer-icons mx-4 hover:scale-150 transition-all max-w-full"
                src={x}
                alt="twitter icon"
              />
            </a>
            <a href="/">
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
                  {item.links.map((link, index) => (
                    <li className="mb-1.5 pl-0" key={index}>
                      <a className="hover:text-green-200" href="/">
                        {link}
                      </a>
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
        <p>Avita Health System is an equal opportunity provider.</p>
      </div>
    </div>
  );
};

export default Footer;
