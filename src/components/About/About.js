import "./About.scss";

const About = () => {
  return (
    <article className="about">
      <h2 className="about__title">¿Cuál es el propósito de esta app?</h2>
      <p className="about__text1">¡Aprender, aprender, aprender!</p>
      <p className="about__text">
        Esta web nació como parte del curso de <b>CodelyTv</b>: ReactJS, de 0 a
        deploy siguiendo buenas prácticas, donde no sólo puse en práctica los
        conocimientos adquiridos durante el mismo, sino que fuí adaptándola en
        función de otras necesidades que consideré óptimas para una buena
        experiencia de usuario.
      </p>
      <p className="about__text">
        Mi nombre es <b>Lucía Mezquida</b> y soy{" "}
        <b>Programadora FrontEnd Jr.</b>, aunque no siempre ha sido así. Soy una
        farmacéutica reinventada que se ha enamorado del mundo del desarrollo
        web, donde por fín he encontrado la sinergia perfecta entre{" "}
        <b>creatividad</b>, <b>resolución de problemas</b> y la{" "}
        <b>mejora contínua</b>.
      </p>
    </article>
  );
};

export default About;
