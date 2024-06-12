/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const ClassContext = createContext();

const ClassProvider = ({ children }) => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <ClassContext.Provider value={{ active, toggleClass }}>
      {children}
    </ClassContext.Provider>
  );
};

export { ClassContext, ClassProvider };