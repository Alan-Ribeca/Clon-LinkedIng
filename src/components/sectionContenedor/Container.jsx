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
      </section>
    </>
  );
};
