import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const { locale } = router;

  return (
    <footer className="relative bg-dark text-white mt-[7rem] md:mt-[9rem] lg:mt-[12rem] xl:mt-[15rem] pt-10 lg:pt-16 pb-8 z-10">
      <div className="absolute -top-[2.5rem] md:-top-[5.2rem] lg:-top-[6.8rem] xl:-top-[10rem] z-1">
        <img
          src="/get-healthy-4x.png"
          alt="Get healthy background"
          className="object-cover object-center"
        />
      </div>

      <div className="w-full flex justify-center">
        <div className="max-w-[1440px] w-full px-6 sm:px-8 md:px-16 lg:px-20">
          <Link href="/" passHref>
            <img
              src={`${"/logo-white.png"}`}
              alt="Logo"
              className="max-w-20 lg:max-w-24 cursor-pointer"
            />
          </Link>

          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 mt-6">
            <div className="text-left max-w-sm xl:max-w-2xl mb-2 lg:mb-0">
              {t("footer.description")}.
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-4 lg:space-y-0">
              <a
                href={`/#about`}
                className="underline hover:text-gray"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.links.about")}
              </a>
              <a href={`/#faq`} className="underline hover:text-gray">
                {t("footer.links.faq")}
              </a>
              <a
                href={`/terms/${locale}`}
                className="underline hover:text-gray"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.links.termsPrivacy")}
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 mt-12 lg:mt-10">
            <div className="text-left mb-2 lg:mb-0">
              {t("footer.copyright")} @{currentYear},{" "}
              <span className="font-semibold">WinxFIt</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8 space-y-4 lg:space-y-0">
              <div className="flex space-x-4">
                <a
                  href={"/messenger"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800"
                >
                  <img
                    src="/messenger.svg"
                    alt="Messenger"
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href={"/instagram"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800"
                >
                  <img
                    src="/instagram.svg"
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href={"/whatsapp"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800"
                >
                  <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
                </a>
                <a
                  href={"/twitter"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800"
                >
                  <img src="/twitter.svg" alt="Twitter" className="w-5 h-5" />
                </a>
                <a
                  href={"/youtube"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800"
                >
                  <img src="/youtube.svg" alt="YouTube" className="w-5 h-5" />
                </a>
                <a
                  href={"/linkedin"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800"
                >
                  <img src="/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                </a>
                <a
                  href={"/tiktok"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800"
                >
                  <img src="/tiktok.svg" alt="Tiktok" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
