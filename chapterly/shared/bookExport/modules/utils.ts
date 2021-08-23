import { path as rPath, pathOr } from "ramda";
import { PageTypes, ICopyrightFormValues } from "../../editor/types";
import { IBook, IBookSettings } from "../../types";
import { Clauses } from "./types";

export const getEditions = () => [
  {
    label: "First Edition",
    value: 1,
  },
  {
    label: "Second Edition",
    value: 2,
  },
  {
    label: "Third Edition",
    value: 3,
  },
];

export function createGetIsPageActive(book: IBook) {
  return (page: PageTypes) =>
    rPath<boolean | undefined>(["pageStates", page, "active"], book);
}

export function getBookSettings(book: IBook) {
  return pathOr<IBookSettings>({}, ["settings"], book);
}

export function getCopyrightProps(book: IBook) {
  const bookSettings = getBookSettings(book);
  const copyrightPageProps = (book.pageStates?.copyright?.data ||
    {}) as ICopyrightFormValues;
  return {
    authorName: bookSettings.authorName || "",
    publisherName: copyrightPageProps.publisherName || "",
    publisherLogo: copyrightPageProps.publisherLogo || "",
    penName: copyrightPageProps.penName || "",
    year:
      copyrightPageProps.publicationYear ||
      parseInt(new Date().getFullYear().toString()),
    edition: (() => {
      const head = getEditions().filter(
        item => item.value === copyrightPageProps.edition,
      )[0];
      return head ? head.label : "First edition";
    })(),
    [Clauses.allRightsReserved]: copyrightPageProps.allRightsReserved || true,
    [Clauses.fiction]: copyrightPageProps.fiction || false,
    [Clauses.moralRights]: copyrightPageProps.moralRights || true,
    [Clauses.externalContent]: copyrightPageProps.externalContent || false,
    [Clauses.designations]: copyrightPageProps.designations || false,
    [Clauses.customClauses]: copyrightPageProps.additionalClauses || false,
    customClause: copyrightPageProps.additionalClause,
    collaborators: copyrightPageProps.collaborators || [],
    isbn: Object.keys(copyrightPageProps.bookTypeByISBN || {})[0],
  };
}
