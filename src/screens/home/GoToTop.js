import React, { useState, useEffect } from "react";

function GoToTop() {
  const [scrollToTopButtonStyle, setScrollToTopButtonStyle] = useState({
    display: "none",
    position: "fixed",
    bottom: "20px",
    right: "30px",
    zIndex: "99",
    fontSize: "18px",
    border: "none",
    outline: "none",
    backgroundColor: "red",
    color: "white",
    cursor: "pointer",
    padding: "8px",
    borderRadius: "4px",
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showOrRemoveToTopButton = () => {
    if (window.pageYOffset > 50) {
      setScrollToTopButtonStyle((prev) => {
        return {
          ...prev,
          display: "block",
        };
      });
    } else {
      setScrollToTopButtonStyle((prev) => {
        return {
          ...prev,
          display: "none",
        };
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showOrRemoveToTopButton, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", showOrRemoveToTopButton);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      title="Go to top"
      style={scrollToTopButtonStyle}
    >
      Top
    </button>
  );
}

export default GoToTop;
