import { MiCard } from "../izquierda/MiCard";
import { Medio } from "../medio/Medio";
import "./container.scss";

export const Container = () => {
  return (
    <>
      <section className="containerGrid">
        <MiCard />
        <Medio />
      </section>
    </>
  );
};
