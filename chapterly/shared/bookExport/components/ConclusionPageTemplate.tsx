import React from "react";

interface IConclusionPageTemplateProps {
  externalHTML?: string;
}

export default function ConclusionPageTemplate(
  props: IConclusionPageTemplateProps,
) {
  return (
    <div className="page body-page conclusion-page">
      <span className="running running-page-title">Conclusion</span>
      <div className="page__title conclusion-page__title">Conclusion</div>
      <div
        className="page__content conclusion-page__content"
        dangerouslySetInnerHTML={
          props.externalHTML ? { __html: props.externalHTML } : undefined
        }
      />
    </div>
  );
}
