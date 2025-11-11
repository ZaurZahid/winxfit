import React from "react";
import { privacyContent } from "../../../mock/privacy";

function Privacy() {
  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: privacyContent }}
    />
  );
}

export default Privacy;
