import { MiCard } from "../izquierda/MiCard";
import { Medio } from "../medio/Medio";
import { Derecha } from "../derecha/Derecha";
import "./container.scss";

export const Container = () => {
  return (
    <>
      <section className="containerGrid">
        <MiCard />
        <Medio />
        <Derecha />
        <section className="mensaje">
          <div className="imgMensaje">
            <img src="./img/avatare.jpg" alt="img de perfil del usuario" />
            <p className="pMensaje">Mensajes</p>
          </div>
          <div className="logos">
            <ul>
              <li className="logosMsj">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  className="svgMensaje"
                  fill="currentColor"
                >
                  <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
                </svg>
              </li>
              <li className="logosMsj">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="svgMensaje"
                >
                  <path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z"></path>
                </svg>
              </li>
              <li className="logosMsj">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="svgMensaje"
                >
                  <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </>
  );
};
