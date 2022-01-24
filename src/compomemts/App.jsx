import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia"

function generateCard(emojiEl) {
  return (
    <Card
      key = {emojiEl.id}
      emoji = {emojiEl.emojiUrl}
      name = {emojiEl.name}
      meaning = {emojiEl.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>Web Development</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(generateCard)}
      </dl>
    </div>
  )
}

export default App;
