import React from "react";
import {
  CollaboratorOptionsType,
  CopyrightPageCollaboratorVerbs,
} from "../../editor/types";

interface ICopyrightPageTemplateProps {
  edition: string;
  authorName: string;
  publisherName: string;
  penName: string;
  year: number;
  collaborators: Array<{ name: string; role: CollaboratorOptionsType }>;
  allRightsReserved: boolean;
  fiction: boolean;
  moralRights: boolean;
  externalContent: boolean;
  designations: boolean;
  customClauses: boolean;
  customClause: string;
  isbn: string;
}

export default function CopyrightPageTemplate(
  props: ICopyrightPageTemplateProps,
) {
  const authorName = props.penName || props.authorName;
  return (
    <div className="page front-matter-page copyright-page">
      <div className="page__content copyright-page__content">
        <div className="copyright-page__published">
          {props.edition} published by {props.publisherName} {props.year}
        </div>
        <div className="copyright-page__copyright">
          Copyright &copy; {props.year} by {authorName}
        </div>
        {props.allRightsReserved ? (
          <div className="copyright-page__rights">
            All rights reserved. No part of this publication may be reproduced,
            stored or transmitted in any form or by any means, electronic,
            mechanical, photocopying, recording, scanning, or otherwise without
            written permission from the publisher. It is illegal to copy this
            book, post it to a website, or distribute it by any other means
            without permission.
          </div>
        ) : null}
        {props.fiction ? (
          <div className="copyright-page__fiction">
            This novel is entirely a work of fiction. The names, characters and
            incidents portrayed in it are the work of the author's imagination.
            Any resemblance to actual persons, living or dead, events or
            localities is entirely coincidental.
          </div>
        ) : null}
        {props.moralRights ? (
          <div className="copyright-page__moral">
            {authorName} asserts the moral right to be identified as the author
            of this work.
          </div>
        ) : null}
        {props.externalContent ? (
          <div className="copyright-page__external">
            {authorName} has no responsibility for the persistence or accuracy
            of URLs for external or third-party Internet Websites referred to in
            this publication and does not guarantee that any content on such
            Websites is, or will remain, accurate or appropriate.
          </div>
        ) : null}
        {props.designations ? (
          <div className="copyright-page__designations">
            Designations used by companies to distinguish their products are
            often claimed as trademarks. All brand names and product names used
            in this book and on its cover are trade names, service marks,
            trademarks and registered trademarks of their respective owners. The
            publishers and the book are not associated with any product or
            vendor mentioned in this book. None of the companies referenced
            within the book have endorsed the book.
          </div>
        ) : null}
        {props.customClauses ? (
          <div className="copyright-page__custom">{props.customClause}</div>
        ) : null}
        <div className="copyright-page__edition">{props.edition}</div>
        {props.collaborators.length > 0 ? (
          <div className="copyright-page__collaborators">
            {props.collaborators.map((collaborator, index) => (
              <div className="copyright-page__collaborator" key={index}>
                {CopyrightPageCollaboratorVerbs[collaborator.role]}{" "}
                {collaborator.name}
              </div>
            ))}
          </div>
        ) : null}
        {props.isbn ? (
          <div className="copyright-page__isbn">{props.isbn}</div>
        ) : null}
      </div>
    </div>
  );
}
