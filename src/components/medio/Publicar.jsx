import "./publicar.scss";

export const Publicar = () => {
  return (
    <article className="containerMid">
      <section className="buscadorContainer">
        <div className="escribir">
          <div className="img">
            <img
              src="./img/avatare2.jpg"
              alt="foto de perfil del usuario"
              className="imgMia"
            />
          </div>
          <input
            type="text"
            placeholder="Crear publicación"
            className="inputEscribir"
          />
        </div>
        <div className="contenido">
          <ul className="ulcontenido">
            <li className="li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="primerSvg"
              >
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>

              <strong>Contenido multimedia</strong>
            </li>
            <li className="li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="segundoSvg"
              >
                <path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
              </svg>
              <strong>Evento</strong>
            </li>
            <li className="li">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="tercerSvg"
              >
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
              <strong>Escribir artículo</strong>
            </li>
          </ul>
        </div>
      </section>

      <div className="lineaSeparadora">
        <hr className="hrSepara" />
        <p className="orden">
          Ordenar por:{" "}
          <strong>
            Principal{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="flechita"
            >
              <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
            </svg>
          </strong>{" "}
        </p>
      </div>
    </article>
  );
};
