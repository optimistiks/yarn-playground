import React from "react";

interface IForewordPageTemplateProps {
  externalHTML?: string;
}

export default function ForewordPageTemplate(
  props: IForewordPageTemplateProps,
) {
  return (
    <div className="page front-matter-page foreword-page">
      <div className="page__title foreword-page__title">Foreword</div>
      <div
        className="page__content foreword-page__content"
        dangerouslySetInnerHTML={
          props.externalHTML ? { __html: props.externalHTML } : undefined
        }
      />
    </div>
  );
}
