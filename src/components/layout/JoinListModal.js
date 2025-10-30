import React, { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";
import CloseIcon from "../ui/icons/Close";
import CheckIcon from "../ui/icons/Check";
import { useTranslation } from "next-i18next";
import JoinForm from "../ui/JoinForm";

const JoinListModal = ({ onSuccess, joined, opened, onClose }) => {
  const { t } = useTranslation("common");
  const modalRef = useRef(null);

  // Close the modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleClose = () => {
    onClose();
  };

  if (!opened) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-30">
      <div
        ref={modalRef}
        className="w-full container rounded-2xl mx-auto my-auto px-4 md:px-0 max-w-3xl"
      >
        <div className="bg-white rounded-lg shadow-lg w-full flex flex-col mx-auto md:flex-row relative">
          <Button
            text=""
            IconComponent={<CloseIcon strokeColor={"stroke-black"} />}
            onClick={handleClose}
            classes={
              "absolute z-10 top-3 right-3 bg-gray-300 hover:bg-gray-400 rounded-full !px-1 !pr-3 flex items-center justify-center"
            }
          />

          {joined ? (
            <div className="flex flex-col items-center justify-center text-center p-8 w-full">
              <CheckIcon className="w-10 h-10" fillColor={"black"} />

              <h1 className="mt-4 md:mt-6 text-3xl font-bold text-black">
                {t("joinListModal.success_message.title")}
              </h1>
            </div>
          ) : (
            <div className="flex flex-col p-8 w-full">
              <h1 className="text-3xl font-bold text-black">
                {t("joinListModal.header.title")}
              </h1>
              <div className="mt-8">
                <JoinForm onSuccess={onSuccess} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinListModal;
