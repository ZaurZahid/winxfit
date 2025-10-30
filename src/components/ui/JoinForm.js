import React, { useState } from "react";
import SmsIcon from "./icons/Sms";
import UserIcon from "./icons/User";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import ArrowDown from "./icons/ArrowDown";
import ArrowIcon from "./icons/Arrow";
import { useTranslation } from "next-i18next";
import RadioSelect from "./RadioSelect";
import PhoneIcon from "./icons/Phone";
import { useRouter } from "next/router";

const JoinForm = ({ onSuccess }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [formState, setFormState] = useState({
    fullname: "",
    email: "",
    errors: {},
    loading: false,
    successMessage: null,
  });

  const handleChange = (field, value) => {
    // General handler for other fields
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
      errors: { ...prevState.errors, [field]: null },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormState((prevState) => ({
      ...prevState,
      loading: true,
      successMessage: null,
      errors: {},
    }));

    try {
      console.log(formState);
      // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/support/contact/`, {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json', 'Accept-Language': i18n?.language || 'az' },
      //     body: JSON.stringify({
      //         fullname: formState.name,
      //         email: formState.email,
      //         phone: formattedPhone,
      //         message: formState.message,
      //     }),
      // });

      // if (!response.ok) {
      //     if (response.status === 422) {
      //         const errorData = await response.json();
      //         setFormState((prevState) => ({
      //             ...prevState,
      //             errors: {
      //                 name: errorData.fullname?.[0] || null,
      //                 email: errorData.email?.[0] || null,
      //                 phone: errorData.phone?.[0] || null,
      //                 message: errorData.message?.[0] || null,
      //             },
      //             loading: false,
      //         }));
      //     } else {
      //         throw new Error('Unexpected error');
      //     }
      //     return;
      // }

      setTimeout(() => {
        if (onSuccess) onSuccess();

        setFormState({
          fullname: "",
          email: "",
          message: "",
          errors: {},
          loading: false,
          successMessage: t("joinListModal.success_message.title"),
        });
      }, 2000);
    } catch (error) {
      console.error("Error sending contact message:", error);
      setFormState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  const hasErrors = () =>
    Object.values(formState.errors).some(
      (error) => error && error.trim() !== ""
    );

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full md:flex">
        <Input
          IconComponent={
            <SmsIcon
              strokeColor={
                formState.errors.email ? "stroke-red-400" : "stroke-current"
              }
            />
          }
          type="email"
          label={t("form.email")}
          placeholder={t("form.email_placeholder")}
          value={formState.email}
          onChange={(e) => handleChange("email", e.target.value)}
          error={formState.errors.email}
          required
          classes={{ root: "mb-4 md:mb-0", input: "bg-gray-100" }}
        />
        <Input
          IconComponent={
            <UserIcon
              strokeColor={
                formState.errors.name ? "stroke-red-400" : "stroke-current"
              }
            />
          }
          type="text"
          label={t("form.name")}
          placeholder={t("form.name_placeholder")}
          value={formState.fullname}
          onChange={(e) => handleChange("fullname", e.target.value)}
          error={formState.errors.fullname}
          required
          classes={{ root: "md:ml-8", input: "bg-gray-100" }}
        />
        <Button
          text={
            formState.loading
              ? t("buttons.sending")
              : t("buttons.join_the_list")
          }
          type="submit"
          disabled={formState.loading || hasErrors()}
          classes={`mt-6 md:mt-auto md:ml-8 text-white bg-black hover:bg-orange min-w-fit h-14`}
        />
      </div>

      {formState.successMessage && (
        <p className="mt-4 text-green-500">{formState.successMessage}</p>
      )}
    </form>
  );
};

export default JoinForm;
