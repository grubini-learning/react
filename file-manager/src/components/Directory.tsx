import { useState } from "react";
import { Kind } from "../enum";
import { Fil } from "../models";

export const Directory = ({ file }: { file: Fil }): React.JSX.Element => {
  const [isExpanded, toggleExpanded] = useState(false);

  if (file.type === Kind.file) {
    return (
      <>
        <h3 className="file-name">{file.name}</h3>
      </>
    );
  }

  return (
    <div className="folder">
      <h2
        className="folder-title"
        onClick={() => toggleExpanded((oldExpanded) => !oldExpanded)}
      >
        {file.name}
      </h2>
      {isExpanded && file.items?.map((item) => <Directory file={item} />)}
    </div>
  );
};
