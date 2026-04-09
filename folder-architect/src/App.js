import { useState } from "react";
import Folder from "./Folder";

const initialData = {
  id: 1,
  name: "root",
  type: "folder",
  children: []
};

export default function App() {
  const [data, setData] = useState(initialData);
  const [clipboard, setClipboard] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📁 Folder Architect</h2>

      <Folder
        node={data}
        setData={setData}
        clipboard={clipboard}
        setClipboard={setClipboard}
      />
    </div>
  );
}