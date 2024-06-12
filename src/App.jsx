import { Main } from "./components/main/Main";
import { Navbar } from "./components/navbar/Navbar";
import { ClassProvider } from "./context/StateCompo";
import "./styles/App.scss";

function App() {
  return (
    <>
      <ClassProvider>
        <Navbar />
        <Main />
      </ClassProvider>
    </>
  );
}

export default App;
