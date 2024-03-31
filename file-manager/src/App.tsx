import { Directory } from "./components";

import { Fil } from "./models";

import files from "./files.json";

import "./index.css";

const App = (): React.JSX.Element => {
  return (
    <main>
      <div className="spacing">
        <Directory file={files as Fil} />
      </div>
    </main>
  );
};

export default App;
