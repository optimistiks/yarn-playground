import {
  IBookContentItem,
  IBookContentList,
  PageDisplay,
  PageTypes,
  PageTypesBeautified,
} from "./types";
import {
  backSections,
  bodySectionsAfter,
  bodySectionsBefore,
  frontSections,
  pageDescriptions,
} from "../schema/descriptors";
import { IBook } from "../types";

export const chapterListFromSections = (
  sections: PageTypes[],
  book: IBook
): IBookContentList =>
  sections
    .filter((section) => {
      const pageStates = book.pageStates;
      if (!pageStates) return false;
      const pageState = pageStates[section];
      if (!pageState) return false;
      return (
        pageDescriptions[section].display === PageDisplay.document &&
        pageState.active
      );
    })
    .map((section) => ({
      type: IBookContentItem.chapter,
      id: book.pageStates ? book.pageStates[section]?.id || "" : "",
      title: PageTypesBeautified[section],
      chapterIndex: 0,
    }));

export const chapterListWithMatterPages = (
  book: IBook,
  structuredChapterList: IBookContentList
): IBookContentList => {
  const sectionsBefore: IBookContentList = chapterListFromSections(
    [...frontSections, ...bodySectionsBefore],
    book
  );
  const sectionsAfter: IBookContentList = chapterListFromSections(
    [...bodySectionsAfter, ...backSections],
    book
  );
  return [...sectionsBefore, ...structuredChapterList, ...sectionsAfter];
};
