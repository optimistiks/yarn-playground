import React from "react";
import { IBook, INotes } from "../../types";
import {
  PageTypes,
  IBookContentItem,
  IBookContentList,
} from "../../editor/types";
import TitlePageTemplate from "./TitlePageTemplate";
import CopyrightPageTemplate from "./CopyrightPageTemplate";
import DedicationPageTemplate from "./DedicationPageTemplate";
import EpigraphPageTemplate from "./EpigraphPageTemplate";
import TOCPageTemplate from "./TOCPageTemplate";
import ForewordPageTemplate from "./ForewordPageTemplate";
import PrefacePageTemplate from "./PrefacePageTemplate";
import AcknowledgmentPageTemplate from "./AcknowlegmentPageTemplate";
import IntroductionPageTemplate from "./IntroductionPageTemplate";
import ConclusionPageTemplate from "./ConclusionPageTemplate";
import EpiloguePageTemplate from "./EpiloguePageTemplate";
import NotesPageTemplate from "./NotesPageTemplate";
import BiographyPageTemplate from "./BiographyPageTemplate";
import { getCopyrightProps } from "../modules/utils";
import PartPageTemplate from "./PartPageTemplate";
import ChapterPageTemplate from "./ChapterPageTemplate";
import {
  IBookPagesHTML,
  IBookChaptersHTML,
  TrimSizeType,
} from "../modules/types";

interface IBookTemplateProps {
  book: IBook;
  bookPagesHtml: IBookPagesHTML;
  bookChaptersHtml: IBookChaptersHTML;
  chapterStructure: IBookContentList;
  bookNotes: INotes;
  trimSize?: TrimSizeType;
  specialPages: string[];
}

export default function BookTemplate(props: IBookTemplateProps) {
  const bookSettings = props.book.settings || {};
  const getIsPageActive = (pageType: PageTypes) =>
    props.specialPages.includes(pageType);
  const copyrightProps = getCopyrightProps(props.book);
  const authorName = copyrightProps.penName || bookSettings.authorName;
  return (
    <div
      className={`book ${
        props.trimSize ? `book--size-${props.trimSize.toLowerCase()}` : ""
      }`}
    >
      <span className="running running-page-number" />
      <span className="running running-book-title">{bookSettings.title}</span>
      <span className="running running-author-name">{authorName}</span>
      <TitlePageTemplate
        title={bookSettings.title}
        subtitle={bookSettings.subtitle}
        authorName={authorName}
      />
      <CopyrightPageTemplate {...copyrightProps} />
      {getIsPageActive(PageTypes.dedication) ? (
        <DedicationPageTemplate
          externalHTML={props.bookPagesHtml[PageTypes.dedication]}
        />
      ) : null}
      {getIsPageActive(PageTypes.epigraph) ? (
        <EpigraphPageTemplate
          externalHTML={props.bookPagesHtml[PageTypes.epigraph]}
        />
      ) : null}
      {getIsPageActive(PageTypes.tableOfContents) ? (
        <TOCPageTemplate
          book={props.book}
          chapterStructure={props.chapterStructure}
        />
      ) : null}
      {getIsPageActive(PageTypes.foreword) ? (
        <ForewordPageTemplate
          externalHTML={props.bookPagesHtml[PageTypes.foreword]}
        />
      ) : null}
      {getIsPageActive(PageTypes.preface) ? (
        <PrefacePageTemplate
          externalHTML={props.bookPagesHtml[PageTypes.preface]}
        />
      ) : null}
      {getIsPageActive(PageTypes.acknowledgement) ? (
        <AcknowledgmentPageTemplate
          externalHTML={props.bookPagesHtml[PageTypes.acknowledgement]}
        />
      ) : null}
      {getIsPageActive(PageTypes.introduction) ? (
        <IntroductionPageTemplate
          externalHTML={props.bookPagesHtml[PageTypes.introduction]}
        />
      ) : null}
      {props.chapterStructure.map(chapterStructureItem => {
        if (chapterStructureItem.type === IBookContentItem.part) {
          return (
            <React.Fragment key={chapterStructureItem.id}>
              <PartPageTemplate
                partIndex={chapterStructureItem.partIndex}
                title={chapterStructureItem.title}
              />
              {chapterStructureItem.chapters.map(chapterItem => (
                <ChapterPageTemplate
                  key={chapterItem.id}
                  title={chapterItem.title}
                  chapterIndex={chapterItem.chapterIndex}
                  externalHTML={props.bookChaptersHtml[chapterItem.id]}
                />
              ))}
            </React.Fragment>
          );
        }
        return (
          <ChapterPageTemplate
            key={chapterStructureItem.id}
            title={chapterStructureItem.title}
            chapterIndex={chapterStructureItem.chapterIndex}
            externalHTML={props.bookChaptersHtml[chapterStructureItem.id]}
          />
        );
      })}
      {getIsPageActive(PageTypes.conclusion) ? (
        <ConclusionPageTemplate
          externalHTML={props.bookPagesHtml[PageTypes.conclusion]}
        />
      ) : null}
      {getIsPageActive(PageTypes.epilogue) ? (
        <EpiloguePageTemplate
          externalHTML={props.bookPagesHtml[PageTypes.epilogue]}
        />
      ) : null}
      {getIsPageActive(PageTypes.notes) ? (
        <NotesPageTemplate
          book={props.book}
          bookNotes={props.bookNotes}
          chapterStructure={props.chapterStructure}
        />
      ) : null}
      {getIsPageActive(PageTypes.biographicalNote) ? (
        <BiographyPageTemplate
          externalHTML={props.bookPagesHtml[PageTypes.biographicalNote]}
        />
      ) : null}
    </div>
  );
}
