import React from "react";

interface IPrefacePageTemplateProps {
  externalHTML?: string;
}

export default function PrefacePageTemplate(props: IPrefacePageTemplateProps) {
  return (
    <div className="page front-matter-page preface-page">
      <div className="page__title preface-page__title">Preface</div>
      <div
        className="page__content preface-page__content"
        dangerouslySetInnerHTML={
          props.externalHTML ? { __html: props.externalHTML } : undefined
        }
      />
    </div>
  );
}
