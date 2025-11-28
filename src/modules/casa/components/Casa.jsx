import { Page } from "../../../lib/components/Page";
import "../styles/Calendario.css";

export const Casa = () => {

  const sections = [
    {
      id: "casa",
      title: "Casa Dúdar",
      content: (
        <p>
          La casa de la comunidad, situada en Dúdar, es un lugar de encuentro
          fraterno, un sitio común que es de todos y está abierto a todos, donde
          podemos reunirnos, convivir y compartir nuestra vida y nuestra fe en
          un encuentro propicio. Es, por tanto, misión de todos ocuparnos de su
          cuidado y mantenimiento, aportando en cada caso y en función de las
          posibilidades de cada uno, los recursos humanos, de tiempo y
          económicos necesarios para que resulte ser una casa de acogida y
          acogedora a todo el que llegue a ella. Agradecemos a Dios el don de la
          comunidad, y el trabajo de los hermanos de la comunidad que han hecho
          posible este proyecto. Agradecemos especialmente a la fraternidad
          franciscana de Granada -que tantos años lleva acogiéndonos en su
          propia casa- el apoyo real, humano, económico y de fe con el que ha
          contribuido en gran medida a que todos podamos disfrutar ahora de este
          nuevo lugar de encuentro comunitario. Esta casa no quiere ser una casa
          con las puertas cerradas, sino estar abierta al mundo y a las
          necesidades de los que nos rodean, y es por eso que está disponible
          para aquel que la necesite.
        </p>
      ),
    },
    {
      id: "solicitar",
      title: "Solicitud",
      content: (
        <>
          <p>
            Si deseas hacer uso de nuestra y vuestra casa, envía un correo
            electrónico a casa@gruposanfrancisco.org, indicando:
          </p>
          <p>
            Nombre del grupo
            <br />
            Responsable del grupo
            <br />
            - Nombre
            <br />
            - Teléfono de contacto
            <br />
            - Dirección de correo electrónico
            <br />
            Número de personas
            <br />
            Fecha y Hora de entrada
            <br />
            Fecha y Hora de salida
          </p>
          <p>
            Contactaremos contigo lo antes posible para confirmar la reserva.
          </p>
        </>
      ),
    },
    {
      id: "disponibilidad",
      title: "Disponibilidad",
      content: (
        <div className="gc-embed-wrapper">
          <iframe
            title="Google Calendar"
            /**@todo poner url del calendario  */
            src={
              "https://calendar.google.com/calendar/embed?src=ID_CALENDARIO&height=600&wkst=2&ctz=Europe%2FMadrid&showPrint=0&showTz=0&title=Casa%20de%20D%C3%BAdar&color=%23009688"
            }
            className="gc-embed-iframe"
            aria-hidden="false"
          />
        </div>
      ),
    }
  ];

  return <Page sections={sections} ></Page>;
};
