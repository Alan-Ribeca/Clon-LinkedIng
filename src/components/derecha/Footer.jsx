import "./footer.scss";

export const Footer = () => {
  return (
    <section className="footer">
      <ul className="ulFooter">
        <li className="liFoo">Acerca de</li>
        <li className="liFoo">Accesibilidad</li>
        <li className="liFoo">Centro de ayuda</li>
        <li className="liFoo">
          Privacidad y condiciones{" "}
          <span className="flechita">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="none"
              fill="currentColor"
              className="flechaSvg"
              width={14}
              height={14}
            >
              <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
            </svg>
          </span>
        </li>
        <li className="liFoo">Opciones de publicidad</li>
        <li className="liFoo">Publicidad</li>
        <li className="liFoo">
          Servicios empresariales{" "}
          <span className="flechita">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="none"
              fill="currentColor"
              className="flechaSvg"
              width={14}
              height={14}
            >
              <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
            </svg>
          </span>
        </li>
        <li className="liFoo">Descargar la aplicación de LinkedIn</li>
        <li className="liFoo">Más</li>
      </ul>
    </section>
  );
};
