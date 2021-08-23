import React from "react";
import converter from "number-to-words";

interface IPartPageTemplateProps {
  title: string;
  partIndex: number;
}

export default function PartPageTemplate(props: IPartPageTemplateProps) {
  return (
    <div className="page body-page part-page">
      <span className="running running-page-title">{props.title}</span>
      <div className="part-page__anchor" id={`part-${props.partIndex}`}>
        {props.title}
      </div>

      <div className="part-page__index part-index">
        <span className="part-index__number">{props.partIndex}</span>
        <span className="part-index__number--padded">
          {props.partIndex.toString().length === 1
            ? `0${props.partIndex}`
            : props.partIndex}
        </span>
        <span className="part-index__word">
          {converter.toWords(props.partIndex)}
        </span>
      </div>

      <div className="page__title part-page__title part-title">
        <span className="part-title__label">Part </span>
        <span className="part-title__index">{props.partIndex}</span>
        <span className="part-title__index--padded">
          {props.partIndex.toString().length === 1
            ? `0${props.partIndex}`
            : props.partIndex}
        </span>
        <span className="part-title__index--word">
          {converter.toWords(props.partIndex)}
        </span>
        <span className="part-title__colon">: </span>
        <span className="part-title__full-stop">. </span>
        <span className="part-title__dash"> - </span>
        <span className="part-title__title">{props.title}</span>
      </div>
    </div>
  );
}
