import React from "react";
import converter from "number-to-words";

interface IChapterPageTemplateProps {
  title: string;
  chapterIndex: number;
  externalHTML?: string;
}

export default function ChapterPageTemplate(props: IChapterPageTemplateProps) {
  return (
    <div className="page body-page chapter-page">
      <span className="running running-page-title">{props.title}</span>
      <div
        className="chapter-page__anchor"
        id={`chapter-${props.chapterIndex}`}
      >
        {props.title}
      </div>

      <div className="chapter-page__index chapter-index">
        <span className="chapter-index__label">Chapter </span>
        <span className="chapter-index__number">{props.chapterIndex}</span>
        <span className="chapter-index__number--padded">
          {props.chapterIndex.toString().length === 1
            ? `0${props.chapterIndex}`
            : props.chapterIndex}
        </span>
        <span className="chapter-index__word">
          {converter.toWords(props.chapterIndex)}
        </span>
      </div>

      <div className="page__title chapter-page__title chapter-title">
        <span className="chapter-title__label">Chapter </span>
        <span className="chapter-title__index">{props.chapterIndex}</span>
        <span className="chapter-title__index--padded">
          {props.chapterIndex.toString().length === 1
            ? `0${props.chapterIndex}`
            : props.chapterIndex}
        </span>
        <span className="chapter-title__index--word">
          {converter.toWords(props.chapterIndex)}
        </span>
        <span className="chapter-title__colon">: </span>
        <span className="chapter-title__full-stop">. </span>
        <span className="chapter-title__dash"> - </span>
        <span className="chapter-title__title">{props.title}</span>
      </div>

      <div
        className="page__content chapter-page__content"
        dangerouslySetInnerHTML={
          props.externalHTML ? { __html: props.externalHTML } : undefined
        }
      />
    </div>
  );
}
