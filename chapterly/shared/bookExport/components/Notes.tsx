import React, { FunctionComponent } from "react";

import { IBook, INote, INotes } from "../../types";
import {
  IBookChapter,
  IBookContentList,
  IBookContentItem,
} from "../../editor/types";
import { chapterListWithMatterPages } from "../../editor/utils";

const NoteView: FunctionComponent<{
  note: INote;
  noteKey: string;
}> = props => {
  return (
    <li id={`note-${props.noteKey}`} className="note-view">
      {props.note.content}
    </li>
  );
};

const ChapterView: FunctionComponent<{
  chapter: IBookChapter;
  notes?: INotes;
  chapterNoteIds: string[];
}> = props => {
  return props.chapterNoteIds.length && props.notes ? (
    <div>
      <div className="notes-page__chapter-title">{props.chapter.title}</div>
      <ol className="notes-page__chapter-notes">
        {props.chapterNoteIds.map(noteKey => {
          const note = props.notes ? props.notes[noteKey] : null;
          if (!note) {
            return null;
          }
          return (
            <NoteView
              noteKey={noteKey}
              note={note}
              key={note.createdAt.toMillis()}
            />
          );
        })}
      </ol>
    </div>
  ) : null;
};

const NotesView: FunctionComponent<{
  chapterList: IBookContentList;
  bookNotes?: INotes;
  book: IBook;
}> = props => {
  const chapterNotes = props.book.chapterNotes || {};
  return (
    <div>
      <div className="page__title notes-page__title">Notes</div>
      <div className="page__content notes-page__content">
        {chapterListWithMatterPages(props.book, props.chapterList).map(
          listItem => {
            if (listItem.type === IBookContentItem.chapter) {
              return (
                <ChapterView
                  key={listItem.id}
                  chapter={listItem}
                  notes={props.bookNotes}
                  chapterNoteIds={chapterNotes[listItem.id] || []}
                />
              );
            }
            return listItem.chapters.map(partChapterItem => {
              return (
                <ChapterView
                  key={partChapterItem.id}
                  chapter={partChapterItem}
                  notes={props.bookNotes}
                  chapterNoteIds={chapterNotes[partChapterItem.id] || []}
                />
              );
            });
          },
        )}
      </div>
    </div>
  );
};

export default NotesView;
