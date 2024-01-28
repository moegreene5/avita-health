// eslint-disable-next-line react/prop-types
const ScrollTo = ({ to, children, setState }) => {
  const scrollTo = () => {
    const targetElement = document.getElementById(to);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    if (setState) {
      setState(false);
    }
  };

  return <span onClick={scrollTo}>{children}</span>;
};

export default ScrollTo;
