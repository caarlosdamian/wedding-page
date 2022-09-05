import { useRef, useState } from "react";
import { optionsItems } from "../../utils/data";
import { addDoc, collection } from "firebase/firestore";

import "./Form.scss";
import db from "../../firebase";
import toast from "react-hot-toast";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

export const Form = () => {
  const [t, i18n] = useTranslation("global");

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

  const email = useRef() as React.MutableRefObject<HTMLFormElement>;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    toast.success("Haz confirmado ir a la boda de Mariana y Carlos! 🐈‍⬛ 🐈", {
      duration: 5000,
      position: "top-center",
    });

    const docRef = await addDoc(collection(db, "invitations"), { formData });
    email.current.reset();
    setFormData({ ...formData, numberGuests: "" });
  };
  return (
    <section className="form-container" id="form">
      <div className="card-form-container">
        <h1 className="form-header">{t("message.confirm")}</h1>
        <span className="error-text">{t("message.event")}*</span>
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
            placeholder={t("message.name")}
            required
            onChange={handleChange}
          />
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder={t("message.email")}
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
            <option value="0">{t("message.guest")}</option>
            {optionsItems.map((item) => (
              <option key={item.id} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <input
            className="form-input"
            type="text"
            placeholder={t("message.name_guest")}
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
            placeholder={t("message.name_guest")}
            disabled={formData.numberGuests === "3" ? false : true}
            required={formData.numberGuests === "3" ? true : false}
          />
          <textarea
            className="form-input"
            id="text-area"
            name="dedication"
            placeholder={t("message.dedicate")}
            onChange={handleChange}
          />
          <button type="submit" className="confirm-button">
            {t("message.submit")}
          </button>
        </form>
      </div>
    </section>
  );
};
