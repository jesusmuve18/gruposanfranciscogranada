import FadeItem from "../../../lib/components/FadeItem";
import { Page } from "../../../lib/components/Page";
import "../styles/Contacto.css";
import {
  Phone,
  Envelope,
  MapPin,
  FacebookLogo,
  InstagramLogo,
} from "phosphor-react";

export const Contacto = () => {
  return (
    <Page>
      <div className="seccion">
        <FadeItem>
          <h1>Contacto</h1>
        </FadeItem>
        <FadeItem>
          <p>Envíanos un mensaje o visítanos.</p>
        </FadeItem>
        <FadeItem>
        <div className="contact-card">
          {/* <div className="info-item">
            <Phone size={28} weight="fill" />
            <span>+34 600 000 000</span>
          </div> */}

          <div className="info-item">
            <Envelope size={28} weight="fill" color="#78460F" />
            <span>admin@gruposanfrancisco.org</span>
          </div>

          <div className="info-item">
            <MapPin size={28} weight="fill" color="#78460F" />
            <span>Camino de Ronda 65, 18004, Granada, España</span>
          </div>

          <h4 className="socials-title">Síguenos</h4>
          <div className="socials">
            <a
              href="https://www.facebook.com/gruposanfrancisco/?locale=es_ES"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FacebookLogo size={32} color="#78460F" />
            </a>
            <a
              href="https://www.instagram.com/sanfran.granada/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <InstagramLogo size={32} color="#78460F" />
            </a>
          </div>
        </div>
        </FadeItem>
      </div>
      <div className="seccion">
        <FadeItem>
          <h1>Ubicación</h1>
        </FadeItem>
        <FadeItem>
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.283034530762!2d-3.6083623236015065!3d37.16974414678062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fc9724e2f3fb%3A0x25ddb163c7a1c3ca!2sCam.%20de%20Rda.%2C%2065%2C%20Ronda%2C%2018004%20Granada!5e0!3m2!1ses!2ses!4v1764245219875!5m2!1ses!2ses"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </FadeItem>
      </div>
    </Page>
  );
};

{
  /* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.283034530762!2d-3.6083623236015065!3d37.16974414678062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fc9724e2f3fb%3A0x25ddb163c7a1c3ca!2sCam.%20de%20Rda.%2C%2065%2C%20Ronda%2C%2018004%20Granada!5e0!3m2!1ses!2ses!4v1764245219875!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
}
