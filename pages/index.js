import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../src/components/layout/Layout";
import OnboardingSection from "../src/components/layout/OnboardingSection";
import EncourageSection from "../src/components/layout/EncourageSection";
import HowItWorks from "../src/components/layout/HowItWorks";
import Competitions from "../src/components/layout/Competitions";
import WorkWith from "../src/components/layout/WorkWith";
import Features from "../src/components/layout/Features";
import TimeTracker from "../src/components/layout/TimeTracker";
import Membership from "../src/components/layout/Membership";
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
      <Features />
      <Competitions />
      <TimeTracker />
      <HowItWorks />
      <WorkWith />
      <Membership />
      <Fags />
      <BlogSection />
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
