import { Container } from "../sectionContenedor/Container";
import "./main.scss";
import { ClassContext } from "../../context/StateCompo";
import { useContext } from "react";

export const Main = () => {
  const { active, clasePublic } = useContext(ClassContext);
  return (
    <main className={`main ${active ? "oscuroMain" : ""} ${clasePublic ? "statico" : ""}`}>
      <Container />
    </main>
  );
};
