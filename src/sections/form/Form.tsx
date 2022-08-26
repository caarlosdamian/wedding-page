import { useRef, useState } from "react";
import firebase from "../../firebase";
import { optionsItems } from "../../utils/data";
import { addDoc, collection } from "firebase/firestore";

import "./Form.scss";
import db from "../../firebase";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numberGuests: "",
    guesstOne: "",
    guesstTwo: "",
    dedication: "",
  });

  // Add a new document with a generated id.

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  const email = useRef() as React.MutableRefObject<HTMLFormElement>;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    const docRef = await addDoc(collection(db, "invitations"), {formData});
    email.current.reset();
  };
  return (
    <section className="form-container" id="form">
      <div className="card-form-container">
        <h1 className="form-header">Confirma tu asistencia</h1>
        <span className="error-text">Evento sin niños.*</span>
        <form
          ref={email}
          onSubmit={handleSubmit}
          action=""
          className="form-container-inputs"
        >
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Nombre Completo"
            required
            onChange={handleChange}
          />
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <select
            value={formData.numberGuests}
            className="form-input"
            placeholder="Invitados"
            id="select"
            name="numberGuests"
            onChange={handleChange}
          >
            <option value="0">Invitados Confirmados</option>
            {optionsItems.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <input
            className="form-input"
            type="text"
            placeholder="Nombre Invitado"
            name="guesstOne"
            onChange={handleChange}
            disabled={
              formData.numberGuests === "2" || formData.numberGuests === "3"
                ? false
                : true
            }
            required={
              formData.numberGuests === "2" || formData.numberGuests === "3"
                ? true
                : false
            }
          />
          <input
            className="form-input"
            type="text"
            name="guesstTwo"
            onChange={handleChange}
            placeholder="Nombre Invitado"
            disabled={formData.numberGuests === "3" ? false : true}
            required={formData.numberGuests === "3" ? true : false}
          />
          <textarea
            className="form-input"
            id="text-area"
            name="dedication"
            placeholder="Dedica un mensaje"
            onChange={handleChange}
          />
          <button type="submit" className="confirm-button">
            Confirmar
          </button>
        </form>
      </div>
    </section>
  );
};
2;
