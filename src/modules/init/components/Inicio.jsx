import '../../../lib/styles/Page.css'
import FadeItem from "../../../lib/components/FadeItem"

export const Inicio = () => {
  return(
    <>
      <div className="seccion">
        <FadeItem>
          <h1>¿Quiénes somos?</h1>
        </FadeItem>
        <FadeItem>
          <p>
            La comunidad de la iglesia de San Francisco de granada es un grupo de hermanos que se reúnen para celebrar la fe al modo de Francisco de Asís. El núcleo de su actividad se centra en la oración y eucaristía comunitarias.
          </p>
        </FadeItem>
      </div>

      <div className="seccion">
        <FadeItem>
          <h1>¿Quién fue San Francisco de Asís?</h1>
        </FadeItem>
        <FadeItem>
          <p>
            Fue un religioso italiano que renunció a su vida acomodada para vivir en absoluta pobreza, predicando la humildad, la paz y el amor por todas las criaturas. Fundó la Orden de los Hermanos Menores (conocida como franciscanos) y es reconocido por su profunda espiritualidad, su cercanía con la naturaleza y su influencia en la renovación de la vida cristiana medieval. Es uno de los santos más venerados de la Iglesia Católica y patrón de los animales y del medio ambiente.
          </p>
        </FadeItem>
      </div>

      {/* <div className="seccion">
        <FadeItem>
          <h1>¿De dónde surge el Grupo de San Francisco?</h1>
        </FadeItem>
        <FadeItem>
          <p>
            En el año 1983, tras una experiencia de oración en Taizé (Francia), nace en Granada el Grupo de Jóvenes de San Francisco. Impulsados por la necesidad de encontrar dentro de la ciudad un espacio adecuado para el silencio y la contemplación, estos y otros jóvenes acompañados por Seve (Severino Calderón Martínez, ofm), comenzaron a reunirse para orar al Padre en los sótanos de la Iglesia de San Francisco (en lo que conocemos como "Cripta").
          </p>
        </FadeItem>
        <FadeItem>
          <p>
            Del encuentro con el Señor y con los hermanos, en especial con el hermano Francisco de Asís, surge al poco tiempo la necesidad de la celebración común de la Eucaristía, como máxima expresión del Amor de Dios.
          </p>
        </FadeItem>
        <FadeItem>
          <p>
            Y cuando esta dimensión contemplativa y celebrativa ha tomado cuerpo, se plantea en el grupo la conveniencia de crecer en la Fe, de ponerla al día. Nacen de esta forma los catecumenados, lugares de comunicación y de maduración en la fe, en los que las reuniones semanales van haciendo posible también un mayor conociiento entre los hermanos. 
          </p>
        </FadeItem>
        <FadeItem>
          <p>
            Y todo siempre "aderezado" con un talante franciscano que entonces empezábamos a descubrir: la sencillez, laminoridad, la simplicidad, el amor a la Naturaleza, la no violencia, la pobreza, la perfecta alegría y, sobre todo, la fraternidad.
          </p>
        </FadeItem>
      </div> */}

       <div className="seccion">
        <FadeItem>
          <h1>¿Cuáles son los objetivos del Grupo San Francisco?</h1>
        </FadeItem>
        <FadeItem>
          <p>
            El grupo de San Francisco, enraizado en la espiritualidad del "Poverello", no pretende otra cosa que seguir a Jesucristo creando comunidad Fraterna.
          </p>
        </FadeItem>
      </div>
    </>
  )
}