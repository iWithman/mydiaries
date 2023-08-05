"use client"
import { useEffect } from 'react';
import { useSelector  } from 'react-redux';
import { getSelectedNote, getSelectAllNotes } from './noteSlice';
import { fetchNotes } from './noteSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import NoteForm from '@/common/forms/noteForm';
import '@/common/styles/common.scss';

const NoteDetails = () => {
  const { selectedNote } = useSelector(getSelectedNote);
  const allNotes = useSelector(getSelectAllNotes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes())
  }
  , []);

  const renderBottomLine = () => {
    return (
      <>
        <hr className='hr' />
      </>
    )
  }

  let custStringAndAddDot = (str: string, len: number) => {
    return str.length > len ? str.substring(0, len) + '...' : str
  }

  if(!selectedNote || !allNotes.notes) return <h1>Loading...</h1>

  return (
    <div className='noteDetails'>
      <div className='all-notes'>
      {
        allNotes.notes.length > 0 && allNotes.notes.slice(0, 10).map(note => (
          <div key={note.id}>
            <Link href={`/notes/${note.id}`}>
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
          <Link className='backButton' href={`/notes`}>
          {'<- Back'}
          </Link>
        </div>
        <NoteForm selectedNote={selectedNote} />
      </div>
    </div>
  );
};

export default NoteDetails;