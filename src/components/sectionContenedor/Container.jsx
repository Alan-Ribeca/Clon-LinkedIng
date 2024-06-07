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
      <section className="liMovil">
        <ul className="containerLiMovil">
          <li className="liNav home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="logos home"
              width="22"
              height="22"
              focusable="false"
            >
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>
            <span className="nombreLogo home">Inicio</span>
          </li>
          <li className="liNav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="logos red"
              width="22"
              height="22"
              focusable="false"
            >
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <span className="nombreLogo" translate="no">Mi red</span>
          </li>
          <li className="liNav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 21 21"
              data-supported-dps="24x24"
              fill="currentColor"
              className="logos red"
              width="22"
              height="22"
              focusable="false"
            >
              <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3zm-5 8h4v2h-4v4h-2v-4H7v-2h4V7h2z"></path>
            </svg>
            <span className="nombreLogo">Publicar</span>
          </li>
          <li className="liNav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="logos notificacion"
              width="22"
              height="22"
              focusable="false"
            >
              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
            <span className="nombreLogo">Notificaciones</span>
          </li>
          <li className="liNav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="logos empleo"
              width="22"
              height="22"
              focusable="false"
            >
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            <span className="nombreLogo">Empleos</span>
          </li>
        </ul>
      </section>
    </>
  );
};
