import "./About.scss";

const About = () => {
  return (
    <article className="about">
      <h2 className="about__title">¿Cuál es el propósito de esta app?</h2>
      <p className="about__text">
        Esta web nació como parte del curso de CodelyTv: ReactJS, de 0 a deploy
        siguiendo buenas prácticas, donde no sólo puse en práctica los
        conocimientos adquiridos durante el mismo, sino que fuí adaptándola en
        función de otras necesidades que consideré óptimas para una buena
        experiencia de usuario.
      </p>
      <p className="about__text2">
        Mi nombre es Lucía Mezquida y soy programadora FrontEnd Jr., aunque no
        siempre ha sido así. Soy una farmacéutica reinventada que se ha
        enamorado del mundo del desarrollo web, donde por fín he encontrado la
        sinergia perfecta entre creatividad, resolución de problemas y la mejora
        contínua.
      </p>
    </article>
  );
};

export default About;
