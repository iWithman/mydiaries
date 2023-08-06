import { useEffect, useState } from "react";
import { getSelectedNote } from "@/features/Notes/noteSlice";
import { useSelector } from "react-redux";

const NoteForm = ({ params: { noteId } }) => {
  const [note, setNote] = useState({title: '', body: ''});
  const { selectedNote } = useSelector(getSelectedNote);

  useEffect(() => {
    if(noteId === 'new') return;

    if(!selectedNote) return <div>Note not found</div>

    if(selectedNote) {
      setNote(selectedNote)
    }
  }, [selectedNote])

  return (
    <>
     <div 
        contentEditable
        className='inputField'
        placeholder="Type your note here..."
      >
        <b>{note.title}</b>
        <br />
        <div>{note.body}</div>
      </div>
    </>
  );
};

export default NoteForm;