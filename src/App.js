import React, { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");

  const moods = [
    { name: "Happy", emoji: "😊", color: "#FFD93D" },
    { name: "Sad", emoji: "😢", color: "#6C9BCF" },
    { name: "Angry", emoji: "😡", color: "#FF6B6B" },
    { name: "Excited", emoji: "🤩", color: "#9D4EDD" }
  ];

  return (
    <div
      className="app"
      style={{ backgroundColor: mood ? mood.color : "#f5f5f5" }}
    >
      <h1>Mood Tracker</h1>

      <div className="buttons">
        {moods.map((m, index) => (
          <button key={index} onClick={() => setMood(m)}>
            {m.name}
          </button>
        ))}
      </div>

      {mood && (
        <div className="mood-display">
          <h2>You are feeling {mood.name}</h2>
          <span className="emoji">{mood.emoji}</span>
        </div>
      )}
    </div>
  );
}

export default App;