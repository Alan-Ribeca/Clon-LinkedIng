/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

const ClassContext = createContext();

const ClassProvider = ({ children }) => {
  const [active, setActive] = useState(() => {
    const estadoGuardado = localStorage.getItem("toggleState");
    return estadoGuardado ? JSON.parse(estadoGuardado) : false;
  });

  useEffect(() => {
    localStorage.setItem("toggleState", JSON.stringify(active));
  }, [active]);

  const toggleClass = () => {
    setActive((estadoPrevio) => !estadoPrevio);
  };

  return (
    <ClassContext.Provider value={{ active, toggleClass }}>
      {children}
    </ClassContext.Provider>
  );
};

export { ClassContext, ClassProvider };
