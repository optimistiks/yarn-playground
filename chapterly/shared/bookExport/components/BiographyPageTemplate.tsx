import React from "react";

interface IBiographyPageTemplateProps {
  externalHTML?: string;
}

export default function BiographyPageTemplate(
  props: IBiographyPageTemplateProps,
) {
  return (
    <div className="page back-matter-page biography-page">
      <span className="running running-page-title">Biographical note</span>
      <div className="page__title biography-page__title">Biographical note</div>
      <div
        className="page__content biography-page__content"
        dangerouslySetInnerHTML={
          props.externalHTML ? { __html: props.externalHTML } : undefined
        }
      />
    </div>
  );
}
