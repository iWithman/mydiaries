const NoteForm = ({ selectedNote: {title, body}}) => {

  return (
    <>
     <div 
        contentEditable
        className='inputField'
        placeholder="Type your note here..."
      >
        <b>{title}</b>
        <br />
        <div>{body}</div>
      </div>
    </>
  );
};

export default NoteForm;