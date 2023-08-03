"use client"
import Link from 'next/link';
import { useSelector  } from 'react-redux';
import { getSelectAllNotes } from './noteSlice';

const Notes = () => {
  const allNotes = useSelector(getSelectAllNotes);
  let renderedNotes = null

  renderedNotes = allNotes.status === "succeeded" ? (
    allNotes.notes.length > 0 && allNotes.notes.slice(0, 10).map(note => (
      <div key={note.id}>
        <Link href={`/notes/${note.id}`}>
            <h2>{note.title}</h2>
        </Link>
      </div>
    ))
  ) : (
    <div>
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