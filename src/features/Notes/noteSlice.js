const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import notesApi from '../../common/api/notesApi';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  try {
    const response = await notesApi.get('/posts');
    return response.data;
  } catch (error) {
    console.log(error);
  }
})

export const fetchNoteById = createAsyncThunk('notes/fetchNoteById', async (id) => {
  try {
    const response = await notesApi.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
})

export const addNewNote = createAsyncThunk('notes/addNewNote', async (initialNote) => {
  try {
    const response = await notesApi.post('/posts', initialNote);
    return response.data;
  } catch (error) {
    console.log(error);
  }
})

export const updateNote = createAsyncThunk('notes/updateNote', async (updatedNote) => {
  try {
    const response = await notesApi.put(`/posts/${updatedNote.id}`, updatedNote);
    return response.data;
  } catch (error) {
    console.log(error);
  }
})

export const deleteNote = createAsyncThunk('notes/deleteNote', async (id) => {
  try {
    const response = await notesApi.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
})

const initialState = {
  notes: {},
  selectedNote: {},
  status: 'idle',
  error: null
}

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    noteAdded(state, action) {
      state.notes = action.payload;
    }
  },
  extraReducers: {
    [fetchNotes.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchNotes.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.notes = {...state, notes: action.payload }
    },
    [fetchNotes.rejected]: () => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchNoteById.fulfilled]: (state, action) => {
      state.selectedNote = {...state, selectedNote: action.payload }
    },
    [addNewNote.fulfilled]: (state, action) => {
      state.notes.push(action.payload);
    },
    [updateNote.fulfilled]: (state, action) => {
      const { id, title, content } = action.payload;
      const existingNote = state.notes.find(note => note.id === id);
      if (existingNote) {
        existingNote.title = title;
        existingNote.content = content;
      }
    },
    [deleteNote.fulfilled]: (state, action) => {
      const { id } = action.payload;
      state.notes = state.notes.filter(note => note.id !== id);
    }
  }
})


export const { noteAdded } = noteSlice.actions;
export const getSelectAllNotes = state => state.allNotes.notes;
export const getSelectedNote = state => state.allNotes.selectedNote;
export default noteSlice.reducer;
