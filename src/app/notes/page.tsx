import React from "react";

const Notes = () => {
  const notes = [
    {
      id: 1,
      content: "love bears all things",
    },
    {
      id: 2,
      content: "by faith we see the hands of God",
    },
  ];

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>{note.content}</div>
      ))}
    </div>
  );
};

export default Notes;
