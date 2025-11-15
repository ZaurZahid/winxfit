import { useMemo, useState } from "react";
import React from "react";
import { useTranslation } from "next-i18next";
import UserIcon from "./../ui/icons/User";
import Input from "./../ui/Input";
import SmsIcon from "./../ui/icons/Sms";
import Button from "../ui/Button";

function OnboardingSection() {
  const { t } = useTranslation("common");
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
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: formState.fullname.trim(),
          email: formState.email.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        const { errors } = data;

        setFormState((prevState) => ({
          ...prevState,
          errors: {
            fullname: errors?.fullname || null,
            email: errors?.email || null,
          },
          loading: false,
        }));
        return;
      }

      setFormState({
        fullname: "",
        email: "",
        errors: {},
        loading: false,
        successMessage: t("joinListModal.success_message.title"),
      });
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
    <div className="relative w-full flex justify-center mt-8 relative lg:py-16 scroll-mt-24 lg:scroll-mt-28 min-h-[950px] lg:min-h-[750px]">
      <div className="max-w-[1440px] w-full px-6 sm:px-8 md:px-16 lg:px-20">
        <div className="h-full flex flex-col lg:flex-row">
          <div className="h-full flex flex-col lg:max-w-3xl min-w-[60%] relative z-20">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <img
                src="/run-box.png"
                alt="run box"
                className="h-20 sm:h-40 w-20 sm:w-40 animate-float-left"
              />
              <h2 className="text-2xl sm:text-5xl font-bold sm:ml-5 max-w-3xl">
                {t("onboarding.title_header")}
              </h2>
            </div>

            <div className="bg-white lg:w-[110%] w-full absolute top-36 sm:top-44 lg:top-36 rounded-3xl shadow-lg p-6 lg:p-8 mt-14">
              <form onSubmit={handleSubmit}>
                <div className="w-full md:flex">
                  <Input
                    IconComponent={
                      <SmsIcon
                        strokeColor={
                          formState.errors.email
                            ? "stroke-red-400"
                            : "stroke-current"
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
                          formState.errors.fullname
                            ? "stroke-red-400"
                            : "stroke-current"
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
                    classes={`md:ml-8 text-white bg-black hover:bg-orange min-w-fit h-14 mt-auto ${
                      hasErrors() ? "mt-5 sm:mt-auto sm:mb-5" : ""
                    }`}
                  />
                </div>

                {formState.successMessage && (
                  <p className="mt-4 text-green-500">
                    {formState.successMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/phones-gradient-2x.png"
        alt="phones gradient"
        className="absolute top-6 sm:max-h-[500px] max-h-[600px] top-[30rem] sm:top-96 lg:top-28 sm:right-28 sm:scale-[1.6] z-10" /* left-1/2 transform -translate-x-1/2 */
      />
      <img
        src="/section-pattern-4x.png"
        alt="section pattern"
        className="absolute left-0 bottom-0 object-cover -top-36 max-w-[65%] h-[48rem] md:h-[60rem] h-[90rem]" /* -top-28 md:-top-40 xl:-top-28 w-full h-[78rem] md:h-[80rem] lg:h-[90rem]  */
      />
    </div>
  );
}

export default OnboardingSection;
