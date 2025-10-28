import { useMemo, useState } from "react";
import UserIcon from "./../ui/icons/User";
import Input from "./../ui/Input";
import SmsIcon from "./../ui/icons/Sms";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";
import { useTranslation } from "next-i18next";
import Tiktok from "../ui/icons/Tiktok";
import Facebook from "../ui/icons/Facebook";
import Instagram from "../ui/icons/Instagram";
import Linkedin from "../ui/icons/Linkedin";

export default function ContactForm() {
  const { t } = useTranslation("common");
  const { i18n } = useTranslation();

  const [formState, setFormState] = useState({
    fullname: "",
    email: "",
    message: "",
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

  const followUsContent = useMemo(() => {
    return (
      <div className="flex flex-col">
        <h6 className="text-gray-800 mb-2">
          {t("joinListModal.header.follow-us")}
        </h6>

        <div className="flex gap-4">
          <a
            href={"/tiktok"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <Tiktok className="stroke-gray-500 hover:stroke-black transition duration-300" />
          </a>
          <a
            href={"/facebook"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <Facebook className="stroke-gray-500 hover:stroke-black transition duration-300" />
          </a>
          <a
            href={"/instagram"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <Instagram className="stroke-gray-500 hover:stroke-black transition duration-300" />
          </a>
          <a
            href={"/linkedin"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <Linkedin className="stroke-gray-500 hover:stroke-black transition duration-300" />
          </a>
        </div>
      </div>
    );
  }, []);

  return (
    <section
      id="contact"
      className="py-8 lg:py-16 scroll-mt-20 lg:scroll-mt-28"
    >
      <div className="flex flex-wrap lg:flex-nowrap gap-12">
        {/* Left Section */}
        <div className="flex flex-col justify-between lg:max-w-lg">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative inline-flex text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                <h4 className="max-w-[90%] lg:max-w-[80%]">
                  {t("joinListModal.header.title")}
                </h4>
                <img
                  src="/thinking-face.png"
                  alt="thinking-face"
                  className="absolute top-1/2 -translate-y-1/2 right-8 lg:right-12 w-20 h-20 md:w-24 md:h-24"
                />
              </div>
            </div>
            <h3 className="text-xl lg:text-2xl mt-1 font-normal text-gray-500">
              {t("joinListModal.header.subtitle")}
            </h3>
          </div>
          <div className="mt-10 mb-2 hidden lg:flex">{followUsContent}</div>
        </div>

        {/* Right Section (Form) */}
        <div className="flex flex-col flex-grow">
          <div className="bg-white flex-grow rounded-3xl shadow-lg p-6 lg:p-8 lg:ml-4 xl:ml-8">
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
                  classes={{ root: "mb-4 md:mb-0" }}
                />
                <Input
                  IconComponent={
                    <UserIcon
                      strokeColor={
                        formState.errors.name
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
                  classes={{ root: "md:ml-8" }}
                />
              </div>
              <Textarea
                label={t("form.message")}
                placeholder={t("form.message_placeholder")}
                value={formState.message}
                onChange={(e) => handleChange("message", e.target.value)}
                error={formState.errors.message}
                required
                classes={{ root: "mt-4", input: "bg-gray-100" }}
                maxLength="200"
              />
              <Button
                text={
                  formState.loading
                    ? t("buttons.sending")
                    : t("buttons.send_now")
                }
                type="submit"
                disabled={formState.loading || hasErrors()}
                classes={`mt-8 text-white bg-black hover:bg-orange`}
              />
              {formState.successMessage && (
                <p className="mt-4 text-green-500">
                  {formState.successMessage}
                </p>
              )}
            </form>
          </div>
          <div className="mt-10 lg:hidden">{followUsContent}</div>
        </div>
      </div>
    </section>
  );
}
