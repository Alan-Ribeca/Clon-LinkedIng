import "derecha.scss";

export const Derecha = () => {
  return (
    <article className="containerSeguir">
      <section className="agregarSeguidores">
        <h2>Añadir a tu feed</h2>
        <svg
          role="none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path d="M8 1C4.69 1 2 3.69 2 7s2.69 6 6 6 6-2.69 6-6S11.31 1 8 1zm0 10.6c-2.54 0-4.6-2.06-4.6-4.6S5.46 2.4 8 2.4 12.6 4.46 12.6 7 10.54 11.6 8 11.6zm-.6-3.5h1.2v1.2H7.4v-1.2zm0-4.2h1.2v3H7.4V4.9z" />
        </svg>
        <div className="seguir">
          <img src="" alt="img de perfil de la persona a seguir" />
          <p className="nombre">Maria Sol</p>
          <strong className="talento">
            IT Talent Acquisition | IT Recruiter en CFO Tech Latam 🚀
          </strong>
          <button className="btnSeguir">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              id="add-small"
              aria-hidden="true"
              role="none"
              data-supported-dps="16x16"
              fill="currentColor"
            >
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
            Seguir
          </button>
        </div>
      </section>
    </article>
  );
};
