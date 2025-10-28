import Star from "../ui/icons/Star";
import Accordion from "./../ui/Accordion";
import { useTranslation } from "next-i18next";
import mockFaq from "./../../../mock/questions";

export default function Fags() {
  const { t } = useTranslation("common");

  return (
    <div
      id="faq"
      className="bg-white w-full flex justify-center mt-8 relative py-14 lg:py-16 scroll-mt-24 lg:scroll-mt-28"
    >
      <div className="max-w-[1440px] w-full px-6 sm:px-8 md:px-16 lg:px-20">
        <div className="mb-8 lg:mb-14">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            {t("faqSection.title")}
          </h2>
        </div>

        <Accordion data={mockFaq} />
      </div>
    </div>
  );
}
