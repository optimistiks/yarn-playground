import React from "react";

interface IDedicationPageTemplateProps {
  externalHTML?: string;
}

export default function DedicationPageTemplate(
  props: IDedicationPageTemplateProps,
) {
  return (
    <div className="page front-matter-page dedication-page">
      <div className="page__title dedication-page__title">Dedication</div>
      <div
        className="page__content dedication-page__content"
        dangerouslySetInnerHTML={
          props.externalHTML ? { __html: props.externalHTML } : undefined
        }
      />
    </div>
  );
}
