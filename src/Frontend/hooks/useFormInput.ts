import { useState } from "react";
import { useTranslation } from "react-i18next";

export function useFormInput() {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { t } = useTranslation();

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name} ${t("pages.contact.contactForm.required")}`,
      }));
    }
  };

  const handleFocus = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return { errors, handleBlur, handleFocus };
}
