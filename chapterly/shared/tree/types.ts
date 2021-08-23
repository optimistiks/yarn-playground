import firebase from "firebase/app";
import { ItemId, TreeData, TreeItem } from "@atlaskit/tree";

export enum LibraryItemType {
  root = "root",
  library = "library",
  characters = "characters",
  locations = "locations",
  book = "book",
  trash = "trash",
  folder = "folder",
  board = "board",
  note = "note",
  character = "character",
  location = "location",
  manuscript = "manuscript",
  frontMatter = "frontMatter",
  backMatter = "backMatter",
  body = "body",
  specialPage = "specialPage",
  chapter = "chapter",
  part = "part",
}

export enum TreeItemType {
  document = "document",
  chapter = "chapter",
  part = "part",
  container = "container",
  root = "root",
  note = "note",
  folder = "folder",
}

export interface ITreeItemDataObject {
  title?: string;
  type?: TreeItemType | string;
  menu?: string;
}

export interface ITreeItem extends TreeItem {
  data?: ITreeItemDataObject;
}

export interface IDocumentTreeData extends TreeData {
  items: { [key: string]: ITreeItem; [key: number]: ITreeItem };
}

export interface IFlattenedChildrenTree {
  [id: string]: IFlattenedTreeChildItem;
}
export type IFlattenedTreeWithoutRoot = {
  [itemId in ItemId]: IFlattenedTreeItem;
};

export interface IFlattenedTree extends IFlattenedTreeWithoutRoot {
  root: IFlattenedTreeRoot;
}

export interface IFlattenedTreeItemBase {
  id: string;
  next: string | null;
  isExpanded: boolean;
  deleted?: boolean;
  createdAt: firebase.firestore.Timestamp;
}

interface IFlattenedTreeDocumentData extends ITreeItemDataObject {
  type: TreeItemType.document;
  title: string;
  menu?: string;
}
export interface IFlattenedTreeDocument extends IFlattenedTreeItemBase {
  children: { [chapterKey: string]: boolean };
  data: IFlattenedTreeDocumentData;
  revisionId?: string;
}

interface IFlattenedTreeContainerData extends ITreeItemDataObject {
  type: TreeItemType.container;
  title: string;
}
export interface IFlattenedTreeContainer extends IFlattenedTreeItemBase {
  data: IFlattenedTreeContainerData;
  children: { [chapterKey: string]: boolean };
}

interface IFlattenedTreeRootData extends ITreeItemDataObject {
  type: TreeItemType.root;
}

export interface IFlattenedTreeRoot extends IFlattenedTreeItemBase {
  data: IFlattenedTreeRootData;
  children: { [chapterKey: string]: boolean };
  frontMatterExpanded?: boolean;
  backMatterExpanded?: boolean;
  manuscriptExpanded?: boolean;
}

export type IFlattenedTreeChildItem =
  | IFlattenedTreeDocument
  | IFlattenedTreeContainer;

export type IFlattenedTreeContainerItem =
  | IFlattenedTreeContainer
  | IFlattenedTreeRoot;

export type IFlattenedTreeItem = IFlattenedTreeChildItem | IFlattenedTreeRoot;

export const isFlattenedTreeContainer = (
  item: IFlattenedTreeItem
): item is IFlattenedTreeContainer => {
  return item.data && item.data.type === TreeItemType.container;
};

export const isFlattenedTreeItemWithChildren = (
  item: IFlattenedTreeItem
): item is IFlattenedTreeContainerItem => {
  return item.data?.type !== TreeItemType.document;
};

export const isFlattenedTreeItemDocument = (
  item: IFlattenedTreeItem
): item is IFlattenedTreeDocument =>
  item.data && item.data.type === TreeItemType.document;

export interface IFlattenedTreeConfig {
  keyName: "documents" | "chapters";
  newFolder: string;
  newPart?: string;
  newDocument: string;
  newNote?: string;
  createId: (
    type: TreeItemType,
    bookKey: string,
    transaction: firebase.firestore.Transaction
  ) => Promise<string>;
  deleteCallback?: (bookKey: string, chapterKey: ItemId) => Promise<void>;
}
