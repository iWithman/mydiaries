import React, { useEffect } from 'react';
import { useSelector  } from 'react-redux';
import { fetchNotes, getSelectAllNotes, fetchNoteById } from './noteSlice';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import NoteForm from '../../Common/Forms/noteForm';
import '../../Common/Styles/common.scss'

const NoteDetails = () => {
  const params = useParams();
  const allNotes = useSelector(getSelectAllNotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes())
    dispatch(fetchNoteById(params.noteId))
  }, [dispatch, params.noteId]);

  const renderBottomLine = () => {
    return (
      <>
        <hr className='hr' />
      </>
    )
  }

  let custStringAndAddDot = (str, len) => {
    return str.length > len ? str.substring(0, len) + '...' : str
  }

  if(!allNotes.notes) return <h1>Loading...</h1>

  return (
    <div className='noteDetails'>
      <div className='all-notes'>
      {
        allNotes.notes.length > 0 && allNotes.notes.slice(0, 10).map(note => (
          <div key={note.id}>
            <Link to={`/notes/${note.id}`}>
                <h2>{custStringAndAddDot(note.title, 15)}</h2>
                <p>{custStringAndAddDot(note.body, 15)}</p>
            </Link>
            {renderBottomLine()}
          </div>
        ))
      }
      </div>
      <div className='note'>
        <div className='backButton-container'>
          <Link className='backButton' to={`/notes`}>
          {'<- Back'}
          </Link>
        </div>
        <NoteForm params={params} />
      </div>
    </div>
  );
};

export default NoteDetails;