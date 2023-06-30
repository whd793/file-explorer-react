import { useState } from "react";

const Fileexplorer = ({ files }) => {
  const [expand, setExpand] = useState(false);

  if (files.isFolder) {
    return (
      <div>
        <div>
          <span
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? "📂" : "📁"}
            {files.name}
          </span>
        </div>

        <div style={{ display: expand ? "block" : "none" }}>
          {files.items.map((f) => {
            // return <span>{f.name}</span>;
            return <Fileexplorer files={f} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>{files.name}</span>
      </div>
    );
  }
};

export default Fileexplorer;
