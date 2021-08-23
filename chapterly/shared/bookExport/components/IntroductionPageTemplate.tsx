import React from "react";

interface IIntroductionPageTemplateProps {
  externalHTML?: string;
}

export default function IntroductionPageTemplate(
  props: IIntroductionPageTemplateProps,
) {
  return (
    <div className="page body-page introduction-page">
      <span className="running running-page-title">Introduction</span>
      <div className="page__title introduction-page__title">Introduction</div>
      <div
        className="page__content introduction-page__content"
        dangerouslySetInnerHTML={
          props.externalHTML ? { __html: props.externalHTML } : undefined
        }
      />
    </div>
  );
}
