import "./styles.css";

const data = [
  {
    id: "1",
    name: "Card generator",
    link: "https://dayanamiranda.github.io/Checkpoint-I---Front-end-II/",
    image:
      "https://www.imagemhost.com.br/images/2022/03/27/projeto2.png",
  },
  {
    id: "2",
    name: "Participação no Checkpoint III",
    link: "https://lui7henrique.github.io/dh-frontend-checkpoint3/",
    image:
      "https://www.imagemhost.com.br/images/2022/03/27/projeto3.png",
  },
  {
    id: "3",
    name: "Juiz de Fora-MG",
    link: "https://dayanamiranda.github.io/Checkpoint-1----FronEnd/",
    image:
      "https://www.imagemhost.com.br/images/2022/03/27/projeto1.png",
  },
  {
    id: "4",
    name: "Doceria DH",
    link: "https://github.com/DayanaMiranda?tab=repositories",
    image:
      "https://www.imagemhost.com.br/images/2022/03/27/projeto5.png",
  },
];

export default function Projects() {
  return (
    <div className="content-projects" id="projects">
      <h1 className="title-project">Projetos</h1>
      <ul className="list-projects">
        {data.map(({ id, image, name, link }) => (
          <li key={id} className="item-list-projects">
              <a href={link}>
                <img src={image} width={350} alt="project" />
                <h3 className="name-project">{name}</h3>
              </a>
            </li>
        ))}
      </ul>
    </div>
  );
}
