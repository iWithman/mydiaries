"use client"
import React from 'react';


const NoteDetails = ({ params }: { params: { noteId: string } }) => {
    return (
        <div>
            Note Details: {params.noteId}
        </div>
    );
};

export default NoteDetails;