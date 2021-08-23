import React from "react";
import NotesView from "./Notes";
import { IBook, INotes } from "../../types";
import { IBookContentList } from "../../editor/types";

interface INotesPageTemplateProps {
  book: IBook;
  bookNotes: INotes;
  chapterStructure: IBookContentList;
}

export default function NotesPageTemplate(props: INotesPageTemplateProps) {
  return (
    <div className="page back-matter-page notes-page">
      <span className="running running-page-title">Notes</span>
      <NotesView
        book={props.book}
        bookNotes={props.bookNotes}
        chapterList={props.chapterStructure}
      />
    </div>
  );
}
