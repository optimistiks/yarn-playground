import React from "react";

interface ITitlePageTemplateProps {
  title?: string;
  authorName?: string;
  subtitle?: string;
}

export default function TitlePageTemplate(props: ITitlePageTemplateProps) {
  return (
    <div className="page title-page">
      <div className="page__title title-page__title">{props.title}</div>
      <div className="page__title title-page__subtitle">{props.subtitle}</div>
      <div className="page__title title-page__author">{props.authorName}</div>
    </div>
  );
}
