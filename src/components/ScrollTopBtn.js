import { useState } from "react";
import { BiUpArrow } from "react-icons/bi";

const ScrollTopBtn = () => {
  const [visible, setVisible] = useState(false);

  function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.onscroll = () => {
    let goToTopBtn = document.querySelector(".top-btn");
    scrollFunction();
    if (visible) {
      goToTopBtn.style.display = "block";
    } else {
      goToTopBtn.style.display = "none";
    }
  };
  return (
    <span className="top-btn" onClick={goTop}>
      <BiUpArrow className="top-btn-size" />
    </span>
  );
};

export default ScrollTopBtn;
