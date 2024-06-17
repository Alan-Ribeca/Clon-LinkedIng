import { Footer } from "./Footer";
import { ClassContext } from "../../context/StateCompo";
import { useContext } from "react";
import "./derecha.scss";

export const Derecha = () => {
  const { handleNotifications } = useContext(ClassContext);
  const personas = [
    {
      id: 1,
      img: "./img/avatare2.jpg",
      nombre: "María González",
      talento: "IT Talent Acquisition | IT Recruiter en CFO Tech Latam 🚀",
    },
    {
      id: 2,
      img: "./img/avatare2.jpg",
      nombre: "Juan Martínez",
      talento:
        "Analista de selección en ADN-Recursos Humanos || RRHH, Recruiter || Talento de desarrollo web",
    },
    {
      id: 3,
      img: "./img/avatare2.jpg",
      nombre: "Devsafio - Sin Juniors No Hay Seniors",
      talento: "Empresa • Consultoría de estrategia",
    },
  ];
  return (
    <article className="containerSeguir">
      <section className="agregarSeguidores">
        <div className="titleContainer">
          <h2 className="title">Añadir a tu feed</h2>
          <span className="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="signal-notice-small"
              aria-hidden="true"
              role="none"
              data-supported-dps="16x16"
              fill="currentColor"
              width={16}
              height={16}
            >
              <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
            </svg>
          </span>
        </div>
        {personas.map(({ nombre, talento, img, id }) => (
          <div className="seguir" key={id}>
            <img src={img} alt="img de perfil de la persona a seguir" />
            <div className="info">
              <p className="nombre">{nombre}</p>
              <span className="talento">{talento}</span>
              <button className="btnSeguir" onClick={handleNotifications}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  id="add-small"
                  aria-hidden="true"
                  role="none"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width={16}
                  height={16}
                  className="cruz"
                >
                  <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                </svg>
                Seguir
              </button>
            </div>
          </div>
        ))}
        <p className="recomendaciones" onClick={handleNotifications}>
          Ver todas las recomendaciones
          <strong className="strongReco">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="none"
              data-supported-dps="16x16"
              fill="currentColor"
              width={16}
              height={16}
              className="flecha"
            >
              <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
            </svg>
          </strong>
        </p>
      </section>
      <Footer />
    </article>
  );
};
