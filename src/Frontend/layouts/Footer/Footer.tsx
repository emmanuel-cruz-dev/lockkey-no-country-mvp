import LogoIcon from "../../../assets/logo-icon.avif";
import { FaGithub, FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";
import "./Footer.css";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-black text-white" id="footer">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-9 gap-y-6 gap-2 xl:gap-6 py-20 border-b border-neutral-700 px-6 sm:px-8 lg:px-10">
        <article className="xl:col-span-3 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              className="max-w-12"
              src={LogoIcon}
              alt="Logo de LockKey, un candado con una serpiente."
              width={200}
              height={200}
              loading="lazy"
            />
            <h2 className="font-normal text-3xl">
              Lock<strong>Key</strong>
            </h2>
          </div>
          <p className="mb-3 text-neutral-400">
            {t("layout.footer.paragraph")}
          </p>
          <SocialIcons borderRadius={false} />
        </article>
        <article className="xl:col-span-2">
          <h2 className="footer__title">{t("layout.footer.navigation")}</h2>
          <ul className="footer__list footer__navbar">
            <li>
              <Link to="/">{t("layout.header.home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("layout.header.about")}</Link>
            </li>
            <li>
              <Link to="/services">{t("layout.header.services")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("layout.header.contact")}</Link>
            </li>
            <li>
              <Link to="/panel">
                Panel (<strong>demo test</strong>)
              </Link>
            </li>
          </ul>
        </article>
        <article className="xl:col-span-2">
          <h2 className="footer__title">
            {t("layout.footer.contactInformation")}
          </h2>
          <ul className="footer__list [&>li]:flex [&>li]:gap-3 [&>li]:items-center">
            <li>
              <FaPhone />
              <a href="#">+61 3 8376 6284</a>
            </li>
            <li>
              <FaEnvelope />
              <a href="#">info@lockkey.com</a>
            </li>
            <li>
              <FaMapMarker />
              <a href="#">21 King Street, Melbourne</a>
            </li>
          </ul>
        </article>
        <article className="xl:col-span-2">
          <h2 className="footer__title">Newsletter</h2>
          <form className="flex flex-col gap-4" action="">
            <input
              className="p-4 rounded-md text-black"
              name="email"
              id="email"
              type="email"
              placeholder={t("layout.footer.email")}
              autoComplete="email"
              required
            />
            <button
              className="btn__primary btn__secondary text-black"
              type="submit"
            >
              {t("layout.footer.sendButton")}
            </button>
          </form>
        </article>
      </section>
      <article className="flex justify-between items-center p-6 lg:px-10">
        <a
          className="text-4xl footer__link"
          href="https://github.com/No-Country-simulation/equipo-c24-70-ft-webapp/tree/frontend"
          target="_blank"
          rel="noopener noreferrer"
          title={t("layout.footer.repository")}
        >
          <FaGithub />
        </a>
        <p className="text-neutral-400 text-center w-2/3 md:w-auto">
          LockKey copyright © 2025. {t("layout.footer.copyright")}
        </p>
        <span className="w-8"></span>
      </article>
    </footer>
  );
}

export default Footer;
