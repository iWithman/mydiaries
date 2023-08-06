"use client"
import React,{ useEffect } from 'react';
import NoteDetails from '@/features/Notes/noteDetails';
import { useDispatch } from 'react-redux';
import { fetchNoteById } from '@/features/Notes/noteSlice';

const Page = ({ params }:{ params:{ noteId: string }}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNoteById(params.noteId));

    }, [dispatch, params.noteId]);

    return (
        <>
            <NoteDetails params={params} />
        </>
    );
};

export default Page;