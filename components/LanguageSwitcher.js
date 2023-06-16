import { useState } from "react";
import i18n from "../i18n"; // Import the i18n instance
import Dropdown from "react-dropdown-select";
import { FaGlobe } from "react-icons/fa";

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "ar", label: "العربية" },
  ];

  const changeLanguage = (selectedOptions) => {
    const language = selectedOptions[0].value;
    i18n
      .changeLanguage(language)
      .then(() => setSelectedLanguage(language))
      .catch((error) => {
        console.error("Error occurred while changing language:", error);
      });
  };

  return (
    <>
      <FaGlobe />
      <Dropdown
        options={languageOptions}
        values={[
          {
            value: selectedLanguage,
            label: selectedLanguage === "en" ? "English" : "العربية",
          },
        ]}
        onChange={changeLanguage}
        dropdownGap={4}
        dropdownPosition="auto"
        direction="ltr"
        style={{ border: "none", borderColor: "none", color: "#FFF" }}
      />
    </>
  );
};

export default LanguageSwitcher;
