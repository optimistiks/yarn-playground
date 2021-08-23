import { filter, map, pipe, prop, propEq, values } from "ramda";

import {
  IPageDescriptions,
  IPageProperties,
  PageDisplay,
  PageSections,
  PageTypes,
} from "../editor/types";

export const pageDescriptions: IPageDescriptions = {
  [PageTypes.titlePage]: {
    title: "Title Page",
    optional: false,
    display: PageDisplay.generated,
    section: PageSections.frontMatter,
    type: PageTypes.titlePage,
  },
  [PageTypes.copyright]: {
    title: "Copyright",
    optional: false,
    display: PageDisplay.form,
    section: PageSections.frontMatter,
    type: PageTypes.copyright,
  },
  [PageTypes.dedication]: {
    title: "Dedication",
    optional: true,
    display: PageDisplay.document,
    section: PageSections.frontMatter,
    type: PageTypes.dedication,
  },
  [PageTypes.epigraph]: {
    title: "Epigraph",
    optional: true,
    display: PageDisplay.document,
    section: PageSections.frontMatter,
    type: PageTypes.epigraph,
  },
  [PageTypes.tableOfContents]: {
    title: "Table of Contents",
    optional: true,
    display: PageDisplay.generated,
    section: PageSections.frontMatter,
    type: PageTypes.tableOfContents,
  },
  [PageTypes.foreword]: {
    title: "Foreword",
    optional: true,
    display: PageDisplay.document,
    section: PageSections.frontMatter,
    type: PageTypes.foreword,
  },
  [PageTypes.preface]: {
    title: "Preface",
    optional: true,
    display: PageDisplay.document,
    section: PageSections.frontMatter,
    type: PageTypes.preface,
  },
  [PageTypes.acknowledgement]: {
    title: "Acknowledgement",
    optional: true,
    display: PageDisplay.document,
    section: PageSections.frontMatter,
    type: PageTypes.acknowledgement,
  },
  [PageTypes.introduction]: {
    title: "Introduction",
    optional: true,
    display: PageDisplay.document,
    section: PageSections.bodyBefore,
    type: PageTypes.introduction,
  },
  [PageTypes.conclusion]: {
    title: "Conclusion",
    optional: true,
    display: PageDisplay.document,
    section: PageSections.bodyAfter,
    type: PageTypes.conclusion,
  },
  [PageTypes.epilogue]: {
    title: "Epilogue",
    optional: true,
    display: PageDisplay.document,
    section: PageSections.bodyAfter,
    type: PageTypes.epilogue,
  },
  [PageTypes.notes]: {
    title: "Notes",
    optional: true,
    display: PageDisplay.generated,
    section: PageSections.backMatter,
    type: PageTypes.notes,
  },
  [PageTypes.biographicalNote]: {
    title: "Biographical Note",
    optional: true,
    display: PageDisplay.document,
    section: PageSections.backMatter,
    type: PageTypes.biographicalNote,
  },
};

const getBookPartSections = (part: PageSections) =>
  pipe(
    values as (i: IPageDescriptions) => IPageProperties[],
    filter(propEq("section", part)) as (
      i: IPageProperties[]
    ) => IPageProperties[],
    map(prop("type"))
  )(pageDescriptions);

const getPageTypes = (displayType: PageDisplay) =>
  pipe(
    values as (i: IPageDescriptions) => IPageProperties[],
    filter(propEq("display", displayType)) as (
      i: IPageProperties[]
    ) => IPageProperties[],
    map(prop("type"))
  )(pageDescriptions);

export const documentPages: PageTypes[] = getPageTypes(PageDisplay.document);
export const generatedPages: PageTypes[] = getPageTypes(PageDisplay.generated);
export const formPages: PageTypes[] = getPageTypes(PageDisplay.form);

export const frontSections: PageTypes[] = getBookPartSections(
  PageSections.frontMatter
);
export const bodySectionsBefore = getBookPartSections(PageSections.bodyBefore);
export const bodySectionsAfter = getBookPartSections(PageSections.bodyAfter);
export const backSections = getBookPartSections(PageSections.backMatter);
export const bodySections = [...bodySectionsBefore, ...bodySectionsAfter];

export type DocumentPage =
  | PageTypes.dedication
  | PageTypes.epigraph
  | PageTypes.foreword
  | PageTypes.preface
  | PageTypes.acknowledgement
  | PageTypes.introduction
  | PageTypes.conclusion
  | PageTypes.epilogue
  | PageTypes.biographicalNote;

export type GeneratedPage =
  | PageTypes.titlePage
  | PageTypes.tableOfContents
  | PageTypes.notes;

export type FormPage = PageTypes.copyright;
export type GeneratedPageWithoutTOC = PageTypes.titlePage | PageTypes.notes;

export function isPageType(type: string): type is PageTypes {
  return Object.values(PageTypes).includes(type as PageTypes);
}

export function isDocumentPage(type: PageTypes): type is DocumentPage {
  return documentPages.includes(type);
}

export function isFormPage(type: PageTypes): type is FormPage {
  return formPages.includes(type);
}

export function isGeneratedPage(type: PageTypes): type is GeneratedPage {
  return generatedPages.includes(type);
}

export const bodySectionsBeforeDescriptions =
  bodySectionsBefore.map<IPageProperties>(
    (section) => pageDescriptions[section]
  );
export const bodySectionsAfterDescriptions =
  bodySectionsAfter.map<IPageProperties>(
    (section) => pageDescriptions[section]
  );
export const bodySectionsDescriptions = bodySections.map<IPageProperties>(
  (section) => pageDescriptions[section]
);
export const backMatterSectionDescriptions = backSections.map<IPageProperties>(
  (section) => pageDescriptions[section]
);
export const frontMatterSectionDescriptions =
  frontSections.map<IPageProperties>((section) => pageDescriptions[section]);
