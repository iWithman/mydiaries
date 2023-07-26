"use client"
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Notes from "@/features/Notes/notes";
import { fetchNotes } from '@/features/Notes/noteSlice';

const Page = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch]);

  return (
    <>
      <Notes />
    </>
  );
};

export default Page;
