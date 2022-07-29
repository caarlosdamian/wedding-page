import  { useRef, useState } from "react";
import { optionsItems } from "../../utils/data";
import "./Form.scss";

export const Form = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    numberGuests: "",
    guesstOne: "",
    guesstTwo: "",
    dedication: "",
  });

  const email = useRef() as React.MutableRefObject<HTMLFormElement>;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
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
            id="email"
            placeholder="Nombre Completo"
            required
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            className="form-input"
            type="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <select
            value={formData.numberGuests}
            className="form-input"
            placeholder="Invitados"
            id="select"
            onChange={(e) =>
              setFormData({ ...formData, numberGuests: e.target.value })
            }
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
            placeholder="Nombre Invitado"
            disabled={formData.numberGuests === "3" ? false : true}
            required={formData.numberGuests === "3" ? true : false}
          />
          <textarea
            className="form-input"
            id="text-area"
            placeholder="Dedica un mensaje"
            onChange={(e) =>
              setFormData({ ...formData, dedication: e.target.value })
            }
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
