import { useTranslation } from "react-i18next";
import { useDarkMode } from "../../../hooks/useDarkMode";
import { useFormInput } from "../../../hooks/useFormInput";
import "./ContactForm.css";

export function ContactForm() {
  const { errors, handleBlur, handleFocus } = useFormInput();
  const { isDarkMode } = useDarkMode();
  const { t } = useTranslation();

  return (
    <form
      method="post"
      className={`box-shadow__item ${
        isDarkMode ? "dark__box-shadow__item" : ""
      } text-black form grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-5/6 p-6 lg:py-16 lg:px-28 mx-auto`}
    >
      <div className="relative">
        <input
          name={t("pages.contact.contactForm.name")}
          id="name"
          className="p-4 w-full h-full"
          type="text"
          placeholder={`${t("pages.contact.contactForm.name")}*`}
          required
          autoComplete="name"
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {errors[`${t("pages.contact.contactForm.name")}`] && (
          <p className="absolute left-0 -bottom-5 text-red-500 text-sm">
            {/* {errors.nombre} */}
            {errors[`${t("pages.contact.contactForm.name")}`]}
          </p>
        )}
      </div>
      <div className="relative">
        <input
          name={t("pages.contact.contactForm.lastName")}
          id="last-name"
          className="p-4 w-full h-full"
          type="text"
          placeholder={`${t("pages.contact.contactForm.lastName")}*`}
          required
          autoComplete="family-name"
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {errors[`${t("pages.contact.contactForm.lastName")}`] && (
          <span className="absolute left-0 -bottom-5 text-red-500 text-sm">
            {errors[`${t("pages.contact.contactForm.lastName")}`]}
          </span>
        )}
      </div>
      <div className="relative md:col-span-2">
        <select
          className="p-4 w-full h-full hover:cursor-pointer"
          name={t("pages.contact.contactForm.land")}
          id="country"
          required
          autoComplete="country"
          onBlur={handleBlur}
          onFocus={handleFocus}
        >
          <option value="">
            {t("pages.contact.contactForm.country.selectCountry")}
          </option>
          <option value="argentina">Argentina</option>
          <option value="bolivia">Bolivia</option>
          <option value="brasil">
            {t("pages.contact.contactForm.country.brazil")}
          </option>
          <option value="Chile">Chile</option>
          <option value="colombia">Colombia</option>
          <option value="costa-rica">Costa Rica</option>
          <option value="ecuador">Ecuador</option>
          <option value="espana">
            {t("pages.contact.contactForm.country.spain")}
          </option>
          <option value="el-salvador">El Salvador</option>
          <option value="guatemala">Guatemala</option>
          <option value="honduras">Honduras</option>
          <option value="mexico">
            {t("pages.contact.contactForm.country.mexico")}
          </option>
          <option value="nicaragua">Nicaragua</option>
          <option value="panama">
            {t("pages.contact.contactForm.country.panama")}
          </option>
          <option value="paraguay">Paraguay</option>
          <option value="peru">
            {t("pages.contact.contactForm.country.peru")}
          </option>
          <option value="puerto-rico">Puerto Rico</option>
          <option value="republica-dominicana">
            {t("pages.contact.contactForm.country.dominicanRepublic")}
          </option>
          <option value="uruguay">Uruguay</option>
          <option value="venezuela">Venezuela</option>
          <option value="otro">
            {t("pages.contact.contactForm.country.other")}
          </option>
        </select>
        {errors[`${t("pages.contact.contactForm.land")}`] && (
          <span className="absolute left-0 -bottom-5 text-red-500 text-sm">
            {errors[`${t("pages.contact.contactForm.land")}`]}
          </span>
        )}
      </div>
      <div className="relative">
        <input
          name={t("pages.contact.contactForm.email")}
          id="email"
          className="p-4 w-full h-full"
          type="email"
          placeholder={`${t("pages.contact.contactForm.email")}*`}
          autoComplete="email"
          required
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {errors[`${t("pages.contact.contactForm.email")}`] && (
          <span className="absolute left-0 -bottom-5 text-sm text-red-500">
            {errors[`${t("pages.contact.contactForm.email")}`]}
          </span>
        )}
      </div>
      <input
        name="phone-number"
        id="phone-number"
        className="p-4"
        type="text"
        placeholder={t("pages.contact.contactForm.phoneNumber")}
      />

      <div className="relative md:col-span-2">
        <textarea
          name={t("pages.contact.contactForm.message")}
          className="p-4 w-full h-full"
          placeholder={`${t("pages.contact.contactForm.message")}*`}
          id="message"
          rows={5}
          required
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {errors[`${t("pages.contact.contactForm.message")}`] && (
          <span className="absolute left-0 -bottom-5 text-sm text-red-500">
            {errors[`${t("pages.contact.contactForm.message")}`]}
          </span>
        )}
      </div>
      <button type="submit" className="md:col-span-2 btn__primary btn__lime">
        {t("pages.contact.contactForm.sendButton")}
      </button>
    </form>
  );
}
