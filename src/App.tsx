import "./App.scss";
import { Footer } from "./sections/footer/Footer";
import { Form } from "./sections/form/Form";
import { Header } from "./sections/header/Header";
import { Middle } from "./sections/middle/Middle";
import { Toaster } from "react-hot-toast";
import { AiFillSound } from "react-icons/ai";
import arco from "./assets/arco.mp3";

function App() {
  let audio = new Audio(arco);

  const handleSound = (audElemnt: any) => {
    if (audElemnt.paused) {
      audElemnt.play();
    } else {
      audElemnt.pause();
    }
  };

  return (
    <main style={{ position: "relative" }}>
      <button
        className="button-music"
        style={{
          position: "sticky",
          background: "transparent",
          border: "none",
          fontSize: "24px",
          top: "15px",
          right: "15px",
          zIndex: "20",
          cursor: "pointer",
        }}
        id="audio"
        onClick={() => handleSound(audio)}
      >
        <AiFillSound />
      </button>
      <Toaster />
      <Header />
      <Middle />
      <Form />
      <Footer />
    </main>
  );
}

export default App;
