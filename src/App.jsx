import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

function App() {
  return (
    <div>
      <Header />
     {notes.map(
                 createItem =>  (<Note
                    key = {createItem.key}
                    title={createItem.title}
                    content={createItem.content}
                    />)
            )}
      <Footer />
    </div>
  );
}

export default App;
