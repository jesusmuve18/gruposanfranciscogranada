import { Page } from "../../../lib/components/Page";
import "../styles/Calendario.css";

export const Casa = () => {
  const sectionsCasa = [
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
    },
  ];
  const sectionsComoLlegar = [
    {
      id: "como-llegar",
      title: "¿Cómo llegar?",
      content: (
        <>
          <p>
            Podéis venir como prefiráis: en coche, bici, patinete o caminando,
            cada uno según su ritmo. Tomad la carretera que va hacia Quéntar y
            seguid hasta el kilómetro 3. Veréis el punto kilométrico como el de
            la imagen de la derecha. Justo ahí hay una cuesta bastante
            pronunciada a la derecha: es por donde hay que subir. Al inicio
            encontraréis una verja negra, siempre abierta, y una señal de
            “prohibido el paso”. Aun así, se puede entrar sin problema.
          </p>
          <p>
            Bajad hasta el río y seguidlo unos 50 metros. A vuestra izquierda
            queda una pequeña nave industrial; continuad por el carril que sale
            desde allí y que os llevará directamente hasta la casa. El camino
            termina justo en la puerta, a la izquierda. En coche, desde la
            Iglesia de San Francisco (en Camino de Ronda), se tarda unos 15
            minutos.
          </p>
          <p>
            Si venís en autobús, salen desde el Paseo del Salón —aunque con las
            obras puede que salgan del Callejón del Pretorio—. Podéis consultar
            los horarios en este enlace (
            <a href="https://siu.ctagr.es/es/movil/horarios_lineas_tabla.php?from=1&linea=727">
              aquí
            </a>
            ).
          </p>
        </>
      ),
    },
  ];

  const sectionsNormas = [
    {
      id: "normas",
      title: "Normas de uso y mantenimiento",
      content: (
        <>
          <p>
            Estas normas básicas de uso y convivencia pretenden ser un punto de
            encuentro que faciliten el mantenimiento y conservación de la casa
            para todo el Grupo de San Francisco y para todo aquel que en ella
            sea acogido.
          </p>
          <p>
            La casa de Dúdar pertenece legalmente a la Asociación para el
            Acompañamiento y la Educación de la Juventud San Francisco (la
            asociación -constituida por los miembros de la Comunidad Fraterna-
            que permite la gestión de todos los aspectos económicos y
            administrativos del Grupo de San Francisco) y será usada por los
            miembros de esta Asociación, el resto del Grupo de San Francisco y
            otras personas autorizadas, para el desarrollo de actividades
            compatibles con nuestro Proyecto de Vida.
          </p>
          <p>
            Para el correcto uso de esta casa se atenderá a los siguientes
            puntos:
          </p>
          <p>
            1. La casa será usada para la realización de las actividades del
            Grupo de San Francisco que, por su naturaleza, no pueden realizarse
            en la Iglesia de San Francisco, tales como asambleas, talleres,
            convivencias, encuentros fraternos, campamentos, etc. Cuando esté
            desocupada también podrá ser usada por otros grupos que tengan fines
            similares a los del Grupo, y para el desarrollo de sus actividades,
            siempre que sean compatibles con nuestros objetivos.
            <br />
            2. Un equipo designado por el Equipo de Coordinación de la Comunidad
            Fraterna y por el Equipo Responsable será el encargado del
            mantenimiento de la casa comunitaria, de prestar y conservar todas
            las copias de llaves y de que el uso que se haga de la casa sea
            acorde a los objetivos y fines del Grupo de San Francisco.
            <br />
            3.El número máximo de grupos (fraternidades, catecumenados o grupos
            de catequesis) que, simultáneamente, puedan realizar una convivencia
            de fin de semana en la casa será aquel que permita la ocupación de
            la casa.
            <br />
            4.Los grupos que quieran usar la casa para una convivencia o
            encuentro deberán solicitarlo con una antelación superior a un mes a
            alguno de los responsables o a la dirección de correo:
            casa@gruposanfrancisco.org indicando, asimismo, el nombre del
            responsable del grupo, número de chicos y número de chicas.
            <br />
            5.Si la casa se solicita por parte de algún grupo ajeno al Grupo de
            San Francisco, se procederá a prestarla si está libre, siempre que
            los fines y actividades programados sean compatibles con nuestros
            objetivos. Sólo se podrá confirmar su préstamo un mes antes de su
            utilización, dando prioridad a los grupos pertenecientes al Grupo de
            San Francisco.
            <br />
            6. Los grupos que usen la casa estarán obligados a:
            <li>
              Informar de los desperfectos detectados al comienzo del encuentro.
            </li>
            <li>
              Limpiar correctamente todo lo usado, haciendo especial hincapié en
              cocina y aseos.
            </li>
            <li>
              Comunicar los desperfectos o deterioros que se hayan producido en
              el transcurso de la convivencia, o suministros (butano) que se
              hayan agotado.
            </li>
            <li>
              Cuidar la convivencia con los vecinos, evitando generar molestias
              y ruidos. Devolver las llaves con prontitud a los responsables.
            </li>
            <li>Contribuir económicamente a su mantenimiento.</li>
            <br />
            7.Las personas responsables de la casa podrán contratar los
            servicios de personas o entidades que consideren necesarios para el
            mantenimiento de esta.
            <br />
            8.Los gastos que ocasione la propiedad de la casa, correrán a cargo
            de la Asociación. Las donaciones que se produzcan por el uso de la
            casa podrán ser usadas por la Asociación para sus fines, no estando
            restringidas al uso de la casa.
            <br />
            9. Las personas encargadas de la casa comunitaria están obligadas a
            velar por el cumplimiento de esta normativa de uso.
          </p>
        </>
      ),
    },
    {
      id: "al-llegar",
      title: "Al llegar",
      content: (
        <ul>
          <li>
            Fíjate en cómo se encuentra la casa, para dejarla en mejor estado
            cuando te vayas.
          </li>
          <li>
            Ten especial dedicación y cariño con los vecinos. Saluda con
            educación y no molestes con ruidos innecesarios.
          </li>
          <li>
            El carril de acceso es compartido con los vecinos. No dejes el coche
            en el carril, ni obstaculices el acceso. Podéis meterlos en el
            huerto por la cancela que da al carril; la llave del candado es la
            número 6 y está en el juego de llaves que se os ha entregado.
          </li>
          <li>
            Ten cuidado de que no se cierre la puerta de la casa y se te queden
            las llaves dentro. Puedes dejarlas puestas en la puerta mientras
            estáis fuera o dejar echada una vuelta de cerradura para que no se
            cierre la puerta accidentalmente.
          </li>
          <li>
            Si vas a usar el agua caliente deberás enchufar el termo eléctrico
            que hay en el baño, pero recuerda desenchufarlo cuando te vayas.
          </li>
          <li>
            El agua de los grifos no es potable, es de pozo. La puedes usar para
            lavar, cocinar y asearte, pero no para beber. En la cocina
            encontrarás agua embotellada, pero repón las botellas que consumas,
            para que las encuentre el próximo que venga.
          </li>
          <li>
            Las botellas de gas están en el patio exterior que hay junto a la
            despensa de la cocina, abre la llave de paso amarilla (vertical con
            la tubería) y los reguladores de las botellas para cocinar, pero
            acuérdate de cerrarlas cuando termines de cocinar. ¡¡Importante!!:
            si se acaba el gas y no lo has podido reponer acuerdate de
            comunicarlo para que el siguiente que llegue no tenga problema.
          </li>
          <li>
            Si te sobra tiempo, puedes arreglar el jardín, arrancar las malas
            hierbas y arreglar las macetas.
          </li>
        </ul>
      ),
    },
    {
      id: "al-salir",
      title: "Al salir",
      content: (
        <ul>
          <li>Comprueba que la casa y el jardín quedan limpios y ordenados.</li>
          <li>
            Recoge del jardín todo el mobiliario (sillas, mesas, etc) que al
            llegar estuvieran guardados en el interior
          </li>
          <li>
            Recoge la basura y llévatela para tirarla (¡Acuérdate de reciclar!)
          </li>
          <li>
            No dejes nada en el frigorífico que esté abierto o tenga fecha de
            caducidad inferior a 1 mes
          </li>
          <li>
            Comprueba que los reguladores de las botellas de propano están
            cerrados y la llave de gas amarilla, también (perpendicular al
            tubo).
          </li>
          <li>Desenchufa el termo eléctrico del baño</li>
          <li>
            Si habéis usado los radiadores eléctricos, aseguraros que quedan
            desconectados.
          </li>
          <li>Comprueba que todas las luces quedan apagadas</li>
          <li>
            Comprueba que todas las puertas quedan cerradas (baños, principal,
            despensa, ...)
          </li>
          <li>
            Cierra la puerta principal y echa el candado de la puerta del carril
            y de la cancela de fuera
          </li>
        </ul>
      ),
    },
  ];

  const subpages = [
    {
      id: "casa",
      title: "Casa",
      sections: sectionsCasa,
    },
    {
      id: "como-llegar",
      title: "Cómo llegar",
      sections: sectionsComoLlegar,
    },
    {
      id: "normas",
      title: "Normas y mantenimiento",
      sections: sectionsNormas,
    },
  ];

  return <Page subpages={subpages} />;
};
