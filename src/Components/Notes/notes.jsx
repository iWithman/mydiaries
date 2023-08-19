import { useSelector  } from 'react-redux';
import { getSelectAllNotes } from '../../store/notes/note.store';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import {Link} from 'react-router-dom'
import '../../Common/Styles/common.scss';

const Notes = () => {
  const allNotes = useSelector(getSelectAllNotes);
  let renderedNotes = null

  renderedNotes = allNotes.status === "succeeded" ? (
    allNotes.notes.length > 0 && allNotes.notes.slice(0, 10).map(note => (
      <div className='all-notes' key={note.id}>
        <Link to={`/notes/${note.id}`}>
            <h2>{note.title}</h2>
        </Link>
        <hr />
      </div>
    ))
  ) : (
    <div>
      {allNotes.error}
    </div>
  )

  return (
    <div className='all-notes-container'>
      
      <div className='add-note-icon-container'>
        <h1>Notes</h1>
        <Link to={`/notes/new`}>
          <AddBoxRoundedIcon className='add-note-icon' />
        </Link>
      </div>
      {renderedNotes}
    </div>
  );
};

export default Notes;