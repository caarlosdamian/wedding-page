import { toast } from "react-toastify";
import "./App.scss";
import { Footer } from "./sections/footer/Footer";
import { Form } from "./sections/form/Form";
import { Header } from "./sections/header/Header";
import { Middle } from "./sections/middle/Middle";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <main>
      <ToastContainer />

      <Header />
      <Middle />
      <Form />
      <Footer />
    </main>
  );
}

export default App;
