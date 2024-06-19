/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

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

  let toastifyActive = false;

  const handleNotifications = () => {
    if (!toastifyActive) {
      toastifyActive = true;
      Toastify({
        text: "Inicia sesión para acceder",
        duration: 2500,
        gravity: "top",
        position: "right",
        style: {
          background: "#1d2226",
        },
        callback: () => {
          toastifyActive = false;
        },
      }).showToast();
    }
  };

  const [mensajeEspandido, setMensajeEspandido] = useState();

  const handleEspandido = () => {
    setMensajeEspandido(!mensajeEspandido);
  };

  const [claseMsj, setClaseMsj] = useState("prioritarios");

  const handleClase = (tipo) => {
    setClaseMsj(tipo);
  };

  return (
    <ClassContext.Provider
      value={{
        active,
        toggleClass,
        handleNotifications,
        handleEspandido,
        mensajeEspandido,
        claseMsj,
        handleClase,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export { ClassContext, ClassProvider };
