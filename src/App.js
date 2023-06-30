import "./styles.css";
import { useState } from "react";
import folders from "./data/data";
import Fileexplorer from "./components/Fileexplorer";
export default function App() {
  const [files, setFiles] = useState(folders);
  return (
    <div className="App">
      <Fileexplorer files={files} />
    </div>
  );
}
