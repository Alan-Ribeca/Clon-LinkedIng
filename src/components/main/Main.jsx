import { Container } from "../sectionContenedor/Container";
import "./main.scss";
import { ClassContext } from "../../context/StateCompo";
import { useContext } from "react";

export const Main = () => {
  const { active } = useContext(ClassContext);
  return (
    <main  className={`main ${active ? "oscuro" : ""}`}>
        <Container />
    </main>
  )
}
