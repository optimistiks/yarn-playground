import firebase from "firebase/app";
import { Node as ProsemirrorNode } from "prosemirror-model";
import { Step } from "prosemirror-transform";
import { TreeData } from "@atlaskit/tree";
import { IBoardCardSet } from "@chapterly/board-components";
import { IPageStates, PageTypes } from "./editor/types";
import { IFlattenedTree } from "./tree/types";
import { IBookCollaborator } from "./collab/types";
import { Themes } from "./theme";
import { Genre } from "../web-app/settings/modules/types";

export interface IStepModel {
  chapterKey: string;
  version: number;
  step: Step;
  userKey: string;
  revert?: boolean;
}

export interface INote {
  bookKey: string;
  chapterKey: string;
  content: string;
  createdAt: firebase.firestore.Timestamp;
}

export interface INotes {
  [noteKey: string]: INote | undefined;
}

export enum RTDBCollection {
  bookChapterCursor = "bookChapterCursor",
}

export enum DBCollection {
  book = "book",
  bookChapter = "bookChapter",
  bookChapterStep = "bookChapterStep",
  bookChapterSession = "bookChapterSession",
  bookCover = "bookCover",
  bookCoverTemplate = "bookCoverTemplate",
  bookCoverPreview = "bookCoverPreview",
  bookCoverRevision = "bookCoverRevision",
  bookInvitation = "bookInvitation",
  bookPart = "bookPart",
  course = "course",
  courseProgress = "courseProgress",
  exportedFile = "exportedFile",
  exportTask = "exportTask",
  goal = "goal",
  goalProgress = "goalProgress",
  importTask = "importTask",
  library = "library",
  librarySubcollectionItems = "items",
  librarySubcollectionLibraryState = "libraryState",
  librarySubcollectionLibraryStateItems = "libraryStateItems",
  newBookChapterStep = "newBookChapterStep",
  note = "note",
  notification = "notification",
  service = "service",
  user = "user",
  userPurchase = "userPurchase",
  subscription = "subscription",
  thread = "thread",
  threadContent = "threadContent",
  coverEditorSettings = "coverEditorSettings",
  coverEditorAlbum = "coverEditorAlbum",
  revisionHistory = "revisionHistory",
  savedRevisionDocument = "savedRevisionDocument",
  userEvent = "userEvent",
  bookExportSettings = "bookExportSettings",
  signUpProof = "signUpProof",
  board = "board",
  character = "character",
  location = "location",
  metaData = "metaData",
  customField = "customField",
  comment = "comment",
  file = "file",
}

export enum StepStatus {
  NEW = "NEW",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

export interface ISerializedSelection {
  anchor: number;
  head: number;
}

export interface INewBookChapterStep {
  steps: Array<Step>;
  selection: ISerializedSelection;
  version: number;
  chapterKey: string;
  userKey: string;
  status: StepStatus;
  bookKey: string;
}

export interface IBaseModel {
  userKey: string;
  // even though we set createdAt on every model on creation, it first gets into redux without createdAt,
  // and the timestamp comes later from Firebase. So the case when createdAt == null is valid
  createdAt?: firebase.firestore.Timestamp;
  updatedAt?: firebase.firestore.Timestamp;
}

export interface IBook extends IBaseModel {
  chapters?: IFlattenedTree;
  documents?: IFlattenedTree;
  covers?: { [key: string]: { coverKey: string } };
  pageStates?: IPageStates;
  collaborators?: {
    [userKey: string]: IBookCollaborator | undefined;
  };
  settings?: IBookSettings;
  deleted?: boolean;
  chapterNotes?: IBookNotes;
  theme: Themes;
  wordCount?: { [chapterKey: string]: number };
  coverPreviewUrl?: string;
  lastEdited?: { chapterKey: string; pageType?: PageTypes };
}

export interface IBookChapter extends IBaseModel {
  state?: { doc: ProsemirrorNode };
  userKey: string;
  bookKey: string;
  version: number;
  pageType?: PageTypes;
  revisionVersion?: number;
}

export interface IBookNotes {
  [chapterKey: string]: string[];
}

export interface IBookSettings {
  title?: string;
  subtitle?: string;
  description?: string;
  isbns?: string[];
  authorName?: string;
  series?: string;
  genre?: Genre;
}

export enum ApiPrivateEndpoints {
  createSource = "/api/createSource",
  deleteCollaborator = "/api/deleteCollaborator",
  changeEmail = "/api/changeEmail",
  changeCard = "/api/changeCard",
  cancelServiceSubscription = "/api/cancelServiceSubscription",
  cancelSubscription = "/api/cancelSubscription",
  reSubscribe = "/api/reSubscribe",
  revisionDocument = "/api/revisionDocument",
  revertSteps = "/api/revertSteps",
  createPayment = "/api/createPayment",
}

export enum ApiPublicEndpoints {
  acceptInvitation = "/api/acceptInvitation",
  signUp = "/api/signUp",
  subscribeToEmailList = "/api/subscribeToEmailList",
  applyCoupon = "/api/applyCoupon",
  generateGoalImage = "/api/generateGoalImage",
}

export enum UserType {
  // anonymous user
  none = "none",
  // user signed up, but hasn't purchased a subscription
  signedUp = "signedUp",
  // user signed up and has an active subscription
  full = "full",
  // a user that was invited to collaborate on a book by another user
  // he doesn't have a subscription
  collaborator = "collaborator",
  // a user who had an active subscription, but it expired
  expired = "expired",
  invitation = "invitation",
  // (Stripe specific) This means a user that has an active subscription, but the first payment failed
  // after 23 hours, Stripe will change the subscription status to incomplete_expired
  // should work:  "selector": "enumMember",
  //         "format": ["camelCase", "snake_case"]
  incomplete_subscription = "incomplete_subscription",
  // (Stripe specific) this means the payment for subscription was not successful during the first 23 hours
  // the subscription is inactive at this state and cannot be updated. A new subscription is required.
  incomplete_expired = "incomplete_expired",
}

export interface IChangeEmailParameters {
  newEmail: string;
  currentEmail: string;
}

export interface IChangeEmailResult {}

export interface IChangeCardParameters {
  source: string;
  last4: string;
  brand: string;
}

export interface IChangeCardResult {}

export interface IReSubscribeParameters {}

export interface IResubscribeResult {}

export interface ICancelSubscriptionParameters {}

export interface ICancelSubscriptionResult {}

export interface ICancelServiceSubscriptionParameters {
  subscriptionId: string;
}

export interface ICancelServiceSubscriptionResult {}

export interface ISignUpParameters {
  displayName: string;
  email: string;
  password: string;
  referralUserKey?: string;
}

export interface ISignUpResult {
  uid: string;
}

export enum CreateSourceType {
  source = "source",
  token = "token",
}

export type IFinishStripeSignupParameters = ICreateSource | ICreateSourceApple;

export interface ICreateSource {
  email: string;
  source: string;
  last4: string;
  brand: string;
  coupon: string | undefined;
  type: CreateSourceType;
  referralUserKey?: string;
}

export interface ICreateSourceApple {
  email: string;
  token: string;
  coupon: string | undefined;
  type: CreateSourceType;
  referralUserKey?: string;
}

export function isCreateSource(
  parameters: IFinishStripeSignupParameters
): parameters is ICreateSource {
  return parameters.type === CreateSourceType.source;
}

export function isCreateSourceApple(
  parameters: IFinishStripeSignupParameters
): parameters is ICreateSourceApple {
  return parameters.type === CreateSourceType.token;
}

export interface IFinishStripeSignupResult {}

export type ICreatePaymentParameters =
  | ICreateApplePayment
  | ICreateStripePayment;

export enum CreatePaymentType {
  stripePayment = "stripePayment",
  applePayment = "applePayment",
}

export interface ICreateStripePayment {
  id: string;
  customerId: string;
  isSubscriptionPlan: boolean;
  type: CreatePaymentType;
}

export interface ICreateApplePayment {
  id: string;
  customerId: string;
  isSubscriptionPlan: boolean;
  token: string;
  type: CreatePaymentType;
}

export function isCreateApplePayment(
  parameters: ICreatePaymentParameters
): parameters is ICreateApplePayment {
  return parameters.type === CreatePaymentType.applePayment;
}

export function isCreateStripePayment(
  parameters: ICreatePaymentParameters
): parameters is ICreateStripePayment {
  return parameters.type === CreatePaymentType.stripePayment;
}

export interface ICreatePaymentResult {}

export interface ISubscribeToEmailListParameters {
  email: string;
  emailListId: string[];
}

export interface ISubscribeToEmailListResult {}

export interface IApplyCouponParameters {
  coupon: string;
}

export interface IApplyCouponResult {}

export interface IAcceptInvitationParameters {
  invitationKey: string;
  email?: string;
  password?: string;
  displayName?: string;
}

export interface IAcceptInvitationResult {}

export interface IPaypalFinishSignupParameters {
  subscriptionId: string;
  planId: string;
  referralUserKey?: string;
}

export interface IPaypalFinishSignupResult {}

export interface IPaypalCreatePaymentParameters {
  // serviceKey is the id of the service in the /service collection in the database
  serviceKey: string;
  // orderId is the id of the Paypal order for one-time purchases
  // for one-time payment purchases, first we pass just serviceKey and get orderId in return
  // to finish the purchase, we pass orderId and serviceKey
  orderId?: string;
  // subscriptionId is the id of the Paypal Subscription when we purchase a subscription-based service
  subscriptionId?: string;
}

export interface IPaypalCreatePaymentResult {
  orderId?: string;
}

export enum ReactivateUserResponseCode {
  REACTIVATED = "REACTIVATED",
  NOT_REACTIVATED = "NOT_REACTIVATED",
}

export interface IReactivateUserParameters {}

export interface IReactivateUserResult {
  code: ReactivateUserResponseCode;
}

export interface IActivateFreeDaysParameters {}

export interface IActivateFreeDaysResult {}

export enum FunctionCollection {
  signUp = "signUp",
  changeEmail = "changeEmail",
  changeCard = "changeCard",
  cancelSubscription = "cancelSubscription",
  cancelServiceSubscription = "cancelServiceSubscription",
  reSubscribe = "reSubscribe",
  finishStripeSignup = "finishStripeSignup",
  createPayment = "createPayment",
  deleteCollaborator = "deleteCollaborator",
  subscribeToEmailList = "subscribeToEmailList",
  applyCoupon = "applyCoupon",
  acceptInvitation = "acceptInvitation",
  previewCoverHandler = "previewCoverHandler",
  generateBarcode = "generateBarcode",
  paypalFinishSignup = "paypalFinishSignup",
  paypalCreatePayment = "paypalCreatePayment",
  reactivateUser = "reactivateUser",
  activateFreeDays = "activateFreeDays",
}

export type ITimezone = Array<{
  value: string;
  abbr: string;
  offset: number;
  isdst: boolean;
  label: string;
  utc: string[];
}>;

export interface ISignupProof {
  name: string;
  avatar: string;
  city: string;
  country: string;
  createdAt: number;
}

export enum TimezoneEnum {
  CENTRAL_AMERICA_STANDARD_TIME = "Central America Standard Time",
}

export interface ILibrary extends IBaseModel {
  tree: TreeData;
}

export interface IBoard extends IBaseModel {
  bookKey: string;
  cards: IBoardCardSet;
}
