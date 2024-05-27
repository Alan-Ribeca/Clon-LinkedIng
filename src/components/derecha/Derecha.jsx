import "./derecha.scss";

export const Derecha = () => {
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
        <div className="seguir">
          <img
            src="./img/public1Perf.jpeg"
            alt="img de perfil de la persona a seguir"
          />
          <div className="info">
            <p className="nombre">Maria Sol</p>
            <span className="talento">
              IT Talent Acquisition | IT Recruiter en CFO Tech Latam 🚀
            </span>
            <button className="btnSeguir">
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
      </section>
    </article>
  );
};
