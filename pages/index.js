import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../src/components/layout/Layout";
import OnboardingSection from "../src/components/layout/OnboardingSection";
import EncourageSection from "../src/components/layout/EncourageSection";
import ValueSection from "../src/components/layout/ValuesSection";
import HowItWorks from "../src/components/layout/HowItWorks";
import TradeCenters from "../src/components/layout/TradeCenters";
import Competitions from "../src/components/layout/Competitions";
import WorkWith from "../src/components/layout/WorkWith";
import Fags from "../src/components/layout/Fags";
import BlogSection from "../src/components/layout/BlogSection";
import ContactForm from "../src/components/layout/ContactForm";
import { useTranslation } from "next-i18next";
import { fetchFromAPI } from "./../src/hooks/apiFetcher";

export default function HomePage({ error }) {
  const { t } = useTranslation("common");

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Layout>
      <OnboardingSection />
      <EncourageSection />
      <Competitions />
      <HowItWorks />
      <WorkWith />
      <Fags />
      <ContactForm />
    </Layout>
  );
}

export async function getServerSideProps({ locale, req }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
