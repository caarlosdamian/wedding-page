import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";


const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;
    console.log(userLocale); // 👉️ "en-US"

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: userLocale  === "en-US" ? "en" : "es", // language to use
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
