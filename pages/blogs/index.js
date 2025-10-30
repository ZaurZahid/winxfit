import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../../src/components/layout/Layout";
import BlogsPage from "../../src/components/blogs/BlogsPage";
import ContactForm from "../../src/components/layout/ContactForm";
import { useTranslation } from "next-i18next";
import { fetchFromAPI } from "./../../src/hooks/apiFetcher";

export default function Blogs({ error }) {
  const { t } = useTranslation("common");

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <Layout>
      <BlogsPage />
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
