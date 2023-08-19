import { useEffect, useState, useRef } from "react";
import { getSelectedNote } from "../../store/notes/note.store";
import { useSelector } from "react-redux";

const NoteForm = ({ params: { noteId } }) => {
  const [note, setNote] = useState({title: '', body: ''});
  const { selectedNote } = useSelector(getSelectedNote);

  const inputRef = useRef(null);

  useEffect(() => {
    if(noteId === 'new') {
      inputRef.current.focus();
      return
    };

    if(!selectedNote) return 

    if(selectedNote) {
      setNote(selectedNote)
    }
  }, [selectedNote, noteId])


  return (
    <>
     <div 
        ref={inputRef}
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