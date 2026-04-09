import { useState } from "react";

const Folder = ({ node, setData, clipboard, setClipboard }) => {
  const [expanded, setExpanded] = useState(true);

  // ➕ Add Folder/File
  const addItem = (type) => {
    const name = prompt(`Enter ${type} name`);
    if (!name) return;

    const newItem = {
      id: Date.now(),
      name,
      type,
      children: type === "folder" ? [] : undefined
    };

    node.children = node.children || [];
    node.children.push(newItem);
    setData({ ...node });
  };

  // ❌ Delete
  const deleteItem = (id) => {
    node.children = node.children.filter((c) => c.id !== id);
    setData({ ...node });
  };

  // 📋 Copy
  const copyItem = (item) => {
    setClipboard({ ...item, cut: false });
  };

  // ✂️ Cut
  const cutItem = (item) => {
    setClipboard({ ...item, cut: true });
    deleteItem(item.id);
  };

  // 📥 Paste (FIXED BUG HERE)
  const pasteItem = () => {
    if (!clipboard) {
      alert("Nothing to paste!");
      return;
    }

    const newItem = {
      ...clipboard,
      id: Date.now()
    };

    node.children = node.children || [];
    node.children.push(newItem);

    setClipboard(null);
    setData({ ...node });
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <div>
        📂 {node.name}

        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "-" : "+"}
        </button>

        <button onClick={() => addItem("folder")}>+ Folder</button>
        <button onClick={() => addItem("file")}>+ File</button>
        <button onClick={pasteItem}>Paste</button>
      </div>

      {expanded &&
        node.children?.map((child) => (
          <div key={child.id} style={{ marginLeft: "20px" }}>
            {child.type === "folder" ? (
              <Folder
                node={child}
                setData={setData}
                clipboard={clipboard}
                setClipboard={setClipboard}
              />
            ) : (
              <div>
                📄 {child.name}

                <button onClick={() => deleteItem(child.id)}>Delete</button>
                <button onClick={() => copyItem(child)}>Copy</button>
                <button onClick={() => cutItem(child)}>Cut</button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Folder;