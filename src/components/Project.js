import { FaInfoCircle } from "react-icons/fa";

const Project = (props) =>
  props.list.map((item) => (
    <div className="card space" key={item.objectID}>
      <a href={item.url} target="_blank" rel="noreferrer">
        <span className="project-name">{item.title}</span>
        <hr />
        <p>{item.description}</p>
        <span className="visit-info">
          <FaInfoCircle />
          click to visit
        </span>
      </a>
    </div>
  ));

export default Project;
