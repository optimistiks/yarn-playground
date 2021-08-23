import { DeepPartial } from "utility-types";
import { IBookChapter, IBaseModel } from "../../types";
import { DocumentPage } from "../../schema/descriptors";

export enum Clauses {
  allRightsReserved = "allRightsReserved",
  fiction = "fiction",
  moralRights = "moralRights",
  externalContent = "externalContent",
  designations = "designations",
  customClauses = "customClauses",
}

export type IOrderedBookChapters = Array<IBookChapter & { id: string }>;

export type IBookPagesHTML = {
  [key in DocumentPage]?: string;
};

export type IBookChaptersHTML = {
  [key: string]: string;
};

export enum BookThemes {
  theme1 = "theme1",
  theme2 = "theme2",
  theme3 = "theme3",
}

export enum TrimSizeType {
  TRADE = "TRADE",
  DIGEST = "DIGEST",
  POCKET = "POCKET",
  STANDARD = "STANDARD",
}

export enum BookExportChapterHeaderStyles {
  titleDigit = "titleDigit",
  titleDigitSingle = "titleDigitSingle",
  titleNumber = "titleNumber",
  titleNumberSingle = "titleNumberSingle",
  titleOnly = "titleOnly",
}

export enum BookExportParagraphIndicationTypes {
  indentation = "indentation",
  spacing = "spacing",
}

export enum BookExportHeaderFooterTypes {
  authorTitlePage = "authorTitlePage",
  titleChapterPage = "titleChapterPage",
  chapterPage = "chapterPage",
  page = "page",
}

export enum BookExportHeaderFooterLayouts {
  allTop = "allTop",
  allTopCenter = "allTopCenter",
  topBottom = "topBottom",
  topBottomCenter = "topBottomCenter",
  allBottom = "allBottom",
  allBottomCenter = "allBottomCenter",
}

export enum BookExportFormats {
  print = "print",
  ebook = "ebook",
}

export enum EbookExportFormat {
  epub = "epub",
  mobi = "mobi",
}

export interface IBookExportSettings {
  theme: BookThemes;
  chapterHeaderStyle: BookExportChapterHeaderStyles;
  headerFooterType: BookExportHeaderFooterTypes;
  headerFooterLayout: BookExportHeaderFooterLayouts;
  paragraphIndicationType: BookExportParagraphIndicationTypes;
  justifyText: boolean;
  hyphenate: boolean;
  useDropcaps: boolean;
  trimSize: TrimSizeType;
  fontSettings: {
    [key in BookExportSettingsFontSlug]: IBookExportSettingsFontSettings;
  };
}

export interface IBookExportSettingsFontSettings {
  fontFamily: string;
  fontVariants: string[];
  fontVariant: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  textTransform: string;
}

export interface IBookExportSettingsModel extends IBaseModel {
  bookKey: string;
  settings: DeepPartial<IBookExportSettings>;
}

export enum BookExportSettingsFontSlug {
  bookTitle = "bookTitle",
  bookSubtitle = "bookSubtitle",
  author = "author",
  copyright = "copyright",
  tocPart = "tocPart",
  tocChapter = "tocChapter",
  tocPageNumber = "tocPageNumber",
  dedicationEpigraph = "dedicationEpigraph",
  pageTitle = "pageTitle",
  partNumber = "partNumber",
  partTitle = "partTitle",
  chapterNumber = "chapterNumber",
  chapterTitle = "chapterTitle",
  noteChapter = "noteChapter",
  noteText = "noteText",
  running = "running",
  paragraph = "paragraph",
  heading = "heading",
  pullQuote = "pullQuote",
  dropcap = "dropcap",
  imageCaption = "imageCaption",
}
