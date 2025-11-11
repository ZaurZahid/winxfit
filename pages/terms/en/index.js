import React from "react";
import { termsContent } from "../../../mock/terms";

function Terms() {
  return (
    <div className="prose" dangerouslySetInnerHTML={{ __html: termsContent }} />
  );
}

export default Terms;
