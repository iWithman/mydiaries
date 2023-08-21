import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './Components/Signup/signup';
import Signin from './Components/Signin/signin';
import  Notes  from './Components/Notes/notes';
import NoteDetails from './Components/Notes/noteDetails';

import { fetchNotes } from './store/notes/note.store';
import { useDispatch } from 'react-redux';

import './App.css';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"  element={<h1>Home</h1>} />
          <Route path="/signup" Component={Signup} />
          <Route path="/signin" Component={Signin} />
          <Route path="/notes" Component={Notes} />
          <Route path="/notes/:noteId" Component={NoteDetails} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
