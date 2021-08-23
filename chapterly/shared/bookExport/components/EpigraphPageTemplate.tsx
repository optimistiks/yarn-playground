import React from "react";

interface IEpigraphPageTemplateProps {
  externalHTML?: string;
}

export default function EpigraphPageTemplate(
  props: IEpigraphPageTemplateProps,
) {
  return (
    <div className="page front-matter-page epigraph-page">
      <div
        className="page__content epigraph-page__content"
        dangerouslySetInnerHTML={
          props.externalHTML ? { __html: props.externalHTML } : undefined
        }
      />
    </div>
  );
}
