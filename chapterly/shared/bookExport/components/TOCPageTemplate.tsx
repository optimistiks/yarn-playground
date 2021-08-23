import React from "react";
import { IBook } from "../../types";
import { IBookContentItem, IBookContentList } from "../../editor/types";

interface ITOCPageTemplateProps {
  book: IBook;
  chapterStructure: IBookContentList;
}

export default function TOCPageTemplate(props: ITOCPageTemplateProps) {
  return (
    <div className="page front-matter-page toc-page">
      <div className="page__title toc-page__title">Table of contents</div>
      <ul className="page__content toc-page__content">
        {props.chapterStructure.map(chapterStructureItem => {
          if (chapterStructureItem.type === IBookContentItem.part) {
            return (
              <li key={chapterStructureItem.id}>
                <div className="toc-page__part">
                  <a href={`#part-${chapterStructureItem.partIndex}`}>
                    {chapterStructureItem.title}
                  </a>
                </div>
                <ul>
                  {chapterStructureItem.chapters.map(chapterItem => (
                    <li key={chapterItem.id}>
                      <div className="toc-page__chapter">
                        <a href={`#chapter-${chapterItem.chapterIndex}`}>
                          {chapterItem.title}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          return (
            <li key={chapterStructureItem.id}>
              <div className="toc-page__chapter">
                <a href={`#chapter-${chapterStructureItem.chapterIndex}`}>
                  {chapterStructureItem.title}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
