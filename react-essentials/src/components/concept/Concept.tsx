import { IConcept } from "../../model";
import "./Concept.css";
// Better to import the image rather than building a path in the src attribute, because it might get lost when bundled for deployment.

export const Concept: React.FC<IConcept> = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};
