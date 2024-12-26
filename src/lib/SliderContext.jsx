import React, { createContext, useState } from "react";


export const SlideContext = createContext();

export const SlideProvider = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <SlideContext.Provider value={{ currentSlide, setCurrentSlide }}>
      {children}
    </SlideContext.Provider>
  );
};
