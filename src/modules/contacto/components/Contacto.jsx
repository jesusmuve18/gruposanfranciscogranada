import { Card } from "../../../lib/components/Card";
import { Icon } from "../../../lib/components/Icon";
import { Page } from "../../../lib/components/Page";
import { Section } from "../../../lib/components/Section";
import "../styles/Contacto.css";
import {
  Phone,
  Envelope,
  MapPin,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo
} from "phosphor-react";

export const Contacto = () => {
  return (
    <Page>
      <Section
        title="Contacto"
        content={
          <>
            <p>Envíanos un mensaje o visítanos.</p>
            <Card>
              {/* <div className="info-item">
                  <Phone size={28} weight="fill" />
                  <span>+34 600 000 000</span>
                </div> */}
              <Icon
                icon={Envelope}
                title="admin@gruposanfrancisco.org"
                color="#78460F"
              />
              <Icon
                icon={MapPin}
                title="Camino de Ronda 65, 18004, Granada, España"
                color="#78460F"
              />

              <h4 className="socials-title">Síguenos</h4>
              <div className="socials">
                <Icon
                  icon={FacebookLogo}
                  title="Grupo San Francisco"
                  color="#78460F"
                  url="https://www.facebook.com/gruposanfrancisco/?locale=es_ES"
                />
                <Icon
                  icon={InstagramLogo}
                  title="sanfran.granada"
                  color="#78460F"
                  url="https://www.instagram.com/sanfran.granada/"
                />
                <Icon
                  icon={YoutubeLogo}
                  title="GrupoSanFrancisco"
                  color="#78460F"
                  url="https://www.youtube.com/@GrupoSanFrancisco"
                />
              </div>
            </Card>
          </>
        }
      />
      <Section
        title="Ubicación"
        content={
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
        }
      />
    </Page>
  );
};
