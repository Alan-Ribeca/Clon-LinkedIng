import "./micard.scss";

export const MiCard = () => {
  return (
    <section className="miCard">
      <div className="containerImg">
        <div className="imgPortada"></div>
        <div className="imgPersonal"></div>
      </div>
      <h2 className="nombre">Alan Ribeca</h2>
      <p className="habilidades">
        Desarrollardor web -- Front End | HTML5 | CSS | JavaScript | React...
      </p>
      <hr className="hrCard" />
      <div className="containerSpan">
        <span className="visualizaciones">
          Visualizaciones del perfil <span>500</span>{" "}
        </span>
        <span className="visualizaciones">
          Impresiones de la publicación <span>+999</span>{" "}
        </span>
      </div>
      <hr className="hrCard" />
      <p className="textoPremium">
        Alcanza tus objetivos profesionales con Premium
      </p>
      <span className="probarPremium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path
            d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
            fill="#f8c77e"
          ></path>
          <path
            d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
            fill="#e7a33e"
          ></path>
        </svg>
        <span className="probarPremium">Probar Premium por 0 AR$</span>
      </span>
      <hr className="hrCard" />
      <span className="guardados">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="16"
          height="16"
        >
          <path d="M13 0H3a2 2 0 00-2 2v14l6-3 6 3V2a2 2 0 00-2-2z"></path>
        </svg>
        <span className="guardadoTexto">Guardados</span>
      </span>
    </section>
  );
};
