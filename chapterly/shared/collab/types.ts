import firebase from "firebase/app";

export enum CollaboratorRoleEnum {
  comment = "comment",
  edit = "edit",
  owner = "owner",
}

export type ICollaboratorRole =
  | CollaboratorRoleEnum.comment
  | CollaboratorRoleEnum.edit
  | CollaboratorRoleEnum.owner;

// a definition of the data structure at /book/bookKey/collaborators/userKey
export interface IBookCollaborator {
  createdAt: firebase.firestore.Timestamp;
  userKey: string;
  role: ICollaboratorRole;
  email: string;
  displayName: string;
  photoURL: string;
  color: string;
  isActive: boolean;
}
