import React from "react";

const CheckIcon = ({ className, fillColor, strokeColor }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="24" height="24" rx="12" fill={fillColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0573 9.13271C16.2428 9.3143 16.2482 9.61417 16.0693 9.80249L11.2693 14.8551C11.1813 14.9477 11.06 15 10.9333 15C10.8066 15 10.6854 14.9477 10.5974 14.8551L7.93074 12.0481C7.75184 11.8598 7.75721 11.5599 7.94274 11.3783C8.12827 11.1967 8.4237 11.2022 8.6026 11.3905L10.9333 13.8439L15.3974 9.14488C15.5763 8.95657 15.8717 8.95111 16.0573 9.13271Z"
        fill="white"
        stroke="white"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
