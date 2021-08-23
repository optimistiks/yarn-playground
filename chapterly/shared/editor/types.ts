import {
  DocumentPage,
  FormPage,
  GeneratedPageWithoutTOC,
} from "../schema/descriptors";

export enum PageDisplay {
  document = "document",
  form = "form",
  generated = "generated",
}

export enum PageTypes {
  titlePage = "titlePage",
  copyright = "copyright",
  dedication = "dedication",
  epigraph = "epigraph",
  tableOfContents = "tableOfContents",
  foreword = "foreword",
  preface = "preface",
  acknowledgement = "acknowledgement",
  introduction = "introduction",
  conclusion = "conclusion",
  epilogue = "epilogue",
  notes = "notes",
  biographicalNote = "biographicalNote",
}

export const nonEditablePages = [
  PageTypes.titlePage,
  PageTypes.copyright,
  PageTypes.tableOfContents,
  PageTypes.notes,
];

// TODO: ARRAYS!
export const PageTypesWithoutTitle = {
  [PageTypes.titlePage]: PageTypes.titlePage,
  [PageTypes.copyright]: PageTypes.copyright,
  [PageTypes.dedication]: PageTypes.dedication,
  [PageTypes.epigraph]: PageTypes.epigraph,
};

export const ExcludeFromTOC = {
  [PageTypes.titlePage]: PageTypes.titlePage,
  [PageTypes.copyright]: PageTypes.copyright,
  [PageTypes.dedication]: PageTypes.dedication,
  [PageTypes.epigraph]: PageTypes.epigraph,
  [PageTypes.tableOfContents]: PageTypes.tableOfContents,
};

export const PageTypesBeautified = {
  [PageTypes.titlePage]: "Title Page",
  [PageTypes.copyright]: "Copyright",
  [PageTypes.dedication]: "Dedication",
  [PageTypes.epigraph]: "Epigraph",
  [PageTypes.tableOfContents]: "Table Of Contents",
  [PageTypes.foreword]: "Foreword",
  [PageTypes.preface]: "Preface",
  [PageTypes.acknowledgement]: "Acknowledgement",
  [PageTypes.introduction]: "Introduction",
  [PageTypes.conclusion]: "Conclusion",
  [PageTypes.epilogue]: "Epilogue",
  [PageTypes.notes]: "Notes",
  [PageTypes.biographicalNote]: "Biographical Note",
};

export enum CollaboratorOptionsType {
  author = "author",
  coverDesigner = "coverDesigner",
  advisor = "advisor",
  agent = "agent",
  editor = "editor",
  illustrator = "illustrator",
  narrator = "narrator",
  proofreader = "proofreader",
  translator = "translator",
  typesetter = "typesetter",
}

export const CopyrightPageCollaboratorVerbs = {
  [CollaboratorOptionsType.author]: "Author:",
  [CollaboratorOptionsType.coverDesigner]: "Cover design by",
  [CollaboratorOptionsType.advisor]: "Advisor:",
  [CollaboratorOptionsType.agent]: "Agent:",
  [CollaboratorOptionsType.editor]: "Editing by",
  [CollaboratorOptionsType.illustrator]: "Illustration by",
  [CollaboratorOptionsType.narrator]: "Narration by",
  [CollaboratorOptionsType.proofreader]: "Proofreading by",
  [CollaboratorOptionsType.translator]: "Translation by",
  [CollaboratorOptionsType.typesetter]: "Typesetting by",
};

export enum PageSections {
  frontMatter = "frontMatter",
  bodyBefore = "bodyBefore",
  bodyAfter = "bodyAfter",
  backMatter = "backMatter",
}

export interface IPageProperties {
  title: string;
  optional: boolean;
  display: PageDisplay;
  section: PageSections;
  type: PageTypes;
}

export interface ICopyrightFormValues {
  penName: string;
  edition: number;
  publicationYear: number;
  publisherName: string;
  bookTypeByISBN: { [key: string]: string };
  publisherLogo: string;
  collaborators: Array<{ role: CollaboratorOptionsType; name: string }>;
  allRightsReserved: boolean;
  fiction: boolean;
  designations: boolean;
  externalContent: boolean;
  moralRights: boolean;
  additionalClauses: boolean;
  additionalClause: string;
}

export type IPageState =
  | IDocumentPageState
  | IFormPageState
  | IGeneratedPageState
  | ITableOfContentsPage;

interface ICommonPageState {
  active: boolean;
  id?: string;
}

export interface IDocumentPageState extends ICommonPageState {
  id: string;
  display: PageDisplay.document;
  type: DocumentPage;
}

export interface IFormCopyrightPageState extends ICommonPageState {
  display: PageDisplay.form;
  type: FormPage;
  data?: ICopyrightFormValues;
}

type IFormPageState = IFormCopyrightPageState;

export interface IGeneratedPageState extends ICommonPageState {
  display: PageDisplay.generated;
  type: GeneratedPageWithoutTOC;
}

interface ITableOfContentsPage extends ICommonPageState {
  display: PageDisplay.generated;
  type: PageTypes.tableOfContents;
  popupAccepted: boolean;
}

export type IPageDescriptions = { [key in PageTypes]: IPageProperties };

export type IPageStates = { [key in DocumentPage]?: IDocumentPageState } &
  { [key in FormPage]?: IFormPageState } &
  { [key in GeneratedPageWithoutTOC]?: IGeneratedPageState } & {
    [PageTypes.tableOfContents]?: ITableOfContentsPage;
  };

export enum IBookContentItem {
  chapter = "chapter",
  part = "part",
}

export interface IBookChapter {
  type: IBookContentItem.chapter;
  id: string | number;
  title: string;
  chapterIndex: number;
}

export interface IBookPart {
  type: IBookContentItem.part;
  title: string;
  id: string | number;
  chapters: IBookChapter[];
  partIndex: number;
}

export type IBookContentListItem = IBookChapter | IBookPart;
export type IBookContentList = IBookContentListItem[];
