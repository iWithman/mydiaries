"use client"
import * as React from 'react';
import { useState, useEffect } from 'react';

import { useSelector  } from 'react-redux';
import { getSelectedNote } from './noteSlice';

const NoteDetails = () => {
  const { selectedNote } = useSelector(getSelectedNote);

  if(!selectedNote) return <div>Loading...</div>

  return (
    <div>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}</p>
    </div>
  );
};

export default NoteDetails;