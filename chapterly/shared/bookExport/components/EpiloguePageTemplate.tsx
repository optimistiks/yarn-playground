import React from "react";

interface IEpiloguePageTemplateProps {
  externalHTML?: string;
}

export default function EpiloguePageTemplate(
  props: IEpiloguePageTemplateProps,
) {
  return (
    <div className="page body-page epilogue-page">
      <span className="running running-page-title">Epilogue</span>
      <div className="page__title epilogue-page__title">Epilogue</div>
      <div
        className="page__content epilogue-page__content"
        dangerouslySetInnerHTML={
          props.externalHTML ? { __html: props.externalHTML } : undefined
        }
      />
    </div>
  );
}
