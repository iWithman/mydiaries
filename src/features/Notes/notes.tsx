"use client"
import Link from 'next/link';
import { useSelector  } from 'react-redux';
import { getSelectAllNotes } from './noteSlice';

const Notes = () => {
  const allNotes = useSelector(getSelectAllNotes);
  let renderedNotes = null

  renderedNotes = allNotes.status === "succeeded" ? (
    allNotes.notes.slice(0, 10).map(note => (
      <div key={note.id}>
        <Link href={`/notes/${note.id}`}>
          <div>
            <h2>{note.title}</h2>
            <p>{note.body.substring(0, 100)}</p>
          </div>
        </Link>
      </div>
    ))
  ) : (
    <div>
      None
      {allNotes.error}
    </div>
  )

  return (
    <div>
      <h1>Notes</h1>
      {renderedNotes}
    </div>
  );
};

export default Notes;