import React from "react";

interface IAcknowledgmentPageTemplateProps {
  externalHTML?: string;
}

export default function AcknowledgmentPageTemplate(
  props: IAcknowledgmentPageTemplateProps
) {
  return (
    <div className="page front-matter-page acknowledgment-page">
      <div className="page__title acknowledgment-page__title">
        Acknowledgment woah
      </div>
      <div
        className="page__content acknowledgment-page__content"
        dangerouslySetInnerHTML={
          props.externalHTML ? { __html: props.externalHTML } : undefined
        }
      />
    </div>
  );
}
